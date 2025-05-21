// config/database.js
const path = require('path');

module.exports = ({ env }) => {
  const client = env('DATABASE_CLIENT', 'postgres');

  const connections = {
    postgres: {
      connection: {
        // Usar solo connectionString, evita duplicar host/port
        connectionString: env('DATABASE_URL'),
        ssl: {
          require: true,
          rejectUnauthorized: true,
          ca: env('DATABASE_SSL_CA')
        }
      },
      pool: {
        min: env.int('DATABASE_POOL_MIN', 1),
        max: env.int('DATABASE_POOL_MAX', 5), // pool máximo reducido
      },
      acquireConnectionTimeout: env.int('DB_ACQUIRE_TIMEOUT', 60000),
      debug: env.bool('DATABASE_DEBUG', false),
    },
    sqlite: {
      connection: {
        filename: path.join(__dirname, '..', env('DATABASE_FILENAME', '.tmp/data.db')),
      },
      useNullAsDefault: true,
    },
  };

  return {
    connection: {
      client,
      ...connections[client],
    },
  };
};
