const fs = require('fs');

const config = {
  url: process.env.URL || `https://${process.env.GINTO_DEFAULT_DOMAIN}`,
  server: {
    port: 80,
    host: '0.0.0.0'
  },
  database: {
    client: 'sqlite3',
    connection: {
      filename: '/mnt/data/content/data/ghost.db'
    }
  },
  mail: {
    'transport': 'Direct'
  },
  logging: {
    transports: [
      'file',
      'stdout'
    ]
  },
  paths: {
    'contentPath': '/mnt/data/content'
  }
};

fs.writeFileSync('/var/www/ghost/config.production.json', JSON.stringify(config, null, '  '));
