# indus-frontend-website

## SPA Routing Fix

This project has been configured to handle Single Page Application (SPA) routing correctly. The issue where refreshing pages or accessing URLs directly resulted in "not found" errors has been resolved.

### What was fixed:

1. **Development Server**: Configured Vite to use `historyApiFallback: true` for both dev and preview servers
2. **Production Server**: Created `server.js` with Express to handle SPA routing
3. **Apache Support**: Added `.htaccess` file for Apache servers
4. **Netlify Support**: Added `_redirects` file for Netlify hosting

### How to use:

#### For Development:
```bash
npm run dev:client
```
The Vite dev server now properly handles client-side routing.

#### For Production:
```bash
npm run build
npm start
```
This builds the project and starts the Express server that handles SPA routing.

#### For Different Hosting Platforms:

- **Apache**: The `.htaccess` file in the `public` folder will be copied to `dist` during build
- **Netlify**: The `_redirects` file in the `public` folder will be copied to `dist` during build
- **Express/Node.js**: Use the provided `server.js` file
- **Nginx**: Add the following to your nginx config:
  ```nginx
  location / {
    try_files $uri $uri/ /index.html;
  }
  ```

### Testing:
After implementing these changes, you should be able to:
- Refresh any page (like `/nfpa`) without getting a 404 error
- Access URLs directly in the browser
- Use browser back/forward buttons correctly
- Share direct links to specific pages