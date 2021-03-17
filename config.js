const fs = require('fs');

const config = {
  url: 'https://ghost.ginto.io',
  mail: {
    transport: 'Direct'
  },
  logging: {
    transports: [
      'file',
      'stdout'
    ]
  },
  process: 'local',
  database: {
    client: 'sqlite3',
    connection: {
      filename: '/mnt/data/ghost.db'
    }
  },
  server: {
    host: '0.0.0.0',
    port: 80
  }
};

fs.writeFileSync('/var/www/ghost/config.production.json', JSON.stringify(config));
