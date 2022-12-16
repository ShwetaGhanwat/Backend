var cloudinary = require('cloudinary').v2;

cloudinary.config({ 
    cloud_name: 'dpdiljh2k',//process.env.CLOUD_NAME, 
    api_key: '198666147591686',//process.env.API_KEY, 
    api_secret: 'DK79PKVQ6WI22yYEDcquY5dY42Y'//process.env.API_SCRE
});

module.exports=cloudinary