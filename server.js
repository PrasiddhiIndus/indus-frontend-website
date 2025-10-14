import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the dist directory
app.use(express.static(path.join(__dirname, 'dist'), {
  // Set proper cache headers for static assets
  maxAge: '1y',
  etag: true,
  lastModified: true
}));

// Handle client-side routing - catch all routes and serve index.html
app.use((req, res, next) => {
  // Skip API routes if you have any
  if (req.path.startsWith('/api/')) {
    return next();
  }
  
  // Skip requests for static files (files with extensions)
  if (req.path.includes('.') && !req.path.endsWith('/')) {
    return next();
  }
  
  // For all other routes, serve the index.html file
  res.sendFile(path.join(__dirname, 'dist', 'index.html'), (err) => {
    if (err) {
      console.error('Error serving index.html:', err);
      res.status(500).send('Internal Server Error');
    }
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Server error:', err);
  res.status(500).json({ error: 'Internal Server Error' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Visit: http://localhost:${PORT}`);
});