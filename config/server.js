module.exports = ({ env }) => ({
  host: process.env.HOST || '0.0.0.0',
  port: process.env.PORT || 4000,
  app: {
    keys: env.array('APP_KEYS'),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});
