// ./config/plugins.js
module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('CLOUDINARY_NAME'),
        api_key: env('CLOUDINARY_KEY'),
        api_secret: env('CLOUDINARY_SECRET'),
        upload_preset: env('CLOUDINARY_UPLOAD_PRESET'),
        use_filename: true,
        unique_filename: true,
        overwrite: true,
        resource_type: 'auto',
        folder: env('CLOUDINARY_FOLDER', 'strapi-uploads'),
      },
      actionOptions: {
        upload: {
          folder: env('CLOUDINARY_FOLDER', 'strapi-uploads'),
          use_filename: true,
          unique_filename: true,
          overwrite: true,
          resource_type: 'auto',
        },
        uploadStream: {
          folder: env('CLOUDINARY_FOLDER', 'strapi-uploads'),
          use_filename: true,
          unique_filename: true,
          overwrite: true,
          resource_type: 'auto',
        },
        delete: {},
      },
    },
  },
});