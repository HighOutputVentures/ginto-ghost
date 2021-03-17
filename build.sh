#!/bin/bash

yarn global add knex-migrator grunt-cli ember-cli

mkdir -p /var/www/ghost

git clone --recurse-submodules --shallow-submodules --branch v4.0.1 --depth 1 https://github.com/TryGhost/Ghost.git /var/www/ghost

cd /var/www/ghost && yarn install

cd /var/www/ghost && grunt update_submodules:pinned

cd /var/www/ghost && grunt subgrunt:init

cd /var/www/ghost && grunt clean:tmp

cd /var/www/ghost && grunt prod || (exit 0)

node /srv/node/config.js
