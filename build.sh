#!/bin/bash

npm install -g ghost-cli

adduser --disabled-password --gecos '' appuser

mkdir -p /var/www/ghost

chown appuser:appuser /var/www/ghost

runuser -l appuser -c 'cd /var/www/ghost && ghost install --db sqlite3 --no-start --no-setup --no-stack' 

node /root/config.js

chown appuser:appuser /var/www/ghost/config.production.json
