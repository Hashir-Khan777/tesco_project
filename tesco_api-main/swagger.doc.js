const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
      title: 'My API',
      version: '1.0.0',
      description: 'A description of my API',
    },
    
    servers: [
      {
        url: 'http://localhost:8000',
      },
    ],
    
    
  };
module.exports=swaggerDefinition
