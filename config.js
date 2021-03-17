const fs = require('fs');

const config = {
  url: 'https://ghost.ginto.io/',
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
