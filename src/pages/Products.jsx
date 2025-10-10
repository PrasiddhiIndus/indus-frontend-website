import React from 'react';
import ProductsHero from './servicessection/ProductsHero';


// const productsImagesMarkets = [img1, img2, img3];
// const productsDescriptionMarkets =
// "Products markets we serve — delivering reliable fire and safety equipment solutions across critical industries. From oil refineries and chemical plants to ports, warehouses, and power infrastructure, our range of products— including fire suppression systems, rescue tools, PPE kits, and emergency equipment—are engineered for performance, durability, and compliance. Designed to meet industrial standards, our solutions ensure safety readiness and operational continuity in every environment."

const Products = () => {
  // const [services, setServices] = useState([]);

  // useEffect(() => {
  //   const fetchProductsServices = async () => {
  //     const { data, error } = await supabase
  //       .from('services_products')
  //       .select('*')
  //       .order('created_at', { ascending: true });

  //     if (error) {
  //       console.error('Error fetching manpower services:', error);
  //     } else {
  //       const sizeOptions = [
  //         'h-[500px]',
  //         'h-[600px]',
  //         'h-[300px]',
  //         'h-[420px]',
  //         'h-[300px]',
  //         'h-[650px]'
  //       ];

  //       const formattedServices = data.map((service, index) => ({
  //         title: service.title,
  //         description: service.description,
  //         image: service.image_url,
  //         size: sizeOptions[index % sizeOptions.length]
  //       }));

  //       setServices(formattedServices);
  //     }
  //   };

  //   fetchProductsServices();
  // }, []);


  return (
    <div className="min-h-screen">
      <ProductsHero />
      {/* <ProductsServices  />
      <ServicesProvider title="Products Services Provider" services={services} />
      <ServicesMarkets title="Products Markets"
        description={productsDescriptionMarkets}
        images={productsImagesMarkets} />
      <ServicesContact /> */}
    </div>
  );
};

export default Products;