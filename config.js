const fs = require('fs');

let mail = {
  transport: 'Direct',
};

if (process.env.MAIL_PROVIDER === 'Mailgun') {
  mail = {
    transport: 'SMTP',
    options: {
      service: 'Mailgun',
      auth: {
        user: process.env.MAILGUN_USERNAME,
        pass: process.env.MAILGUN_PASSWORD,
      }
    }
  }
}

if (process.env.MAIL_PROVIDER === 'SES') {
  mail = {
    transport: 'SMTP',
    options: {
      host: process.env.SES_SERVER_NAME,
      port: 465,
      service: 'SES',
      auth: {
        user: process.env.SES_ACCESS_KEY_ID,
        pass: process.env.SES_SECRET_ACCESS_KEY,
      }
    }
  }
}

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
  mail,
  logging: {
    transports: [
      'stdout'
    ]
  },
  paths: {
    contentPath: '/mnt/data/content'
  }
};

fs.writeFileSync('/var/www/ghost/config.production.json', JSON.stringify(config, null, '  '));
