#!/bin/bash

yarn global add knex-migrator grunt-cli ember-cli

mkdir -p /var/www/ghost

git clone --recurse-submodules --shallow-submodules --depth 1 https://github.com/TryGhost/Ghost.git#v4.0.1 /var/www/ghost

cd /var/www/ghost && yarn install

cd /var/www/ghost && grunt update_submodules:pinned

cd /var/www/ghost && grunt subgrunt:init

cd /var/www/ghost && grunt clean:tmp

cd /var/www/ghost && grunt prod

mkdir -p /mnt/data/content/data

mkdir -p /mnt/data/content/images

mkdir -p /mnt/data/content/themes

mkdir -p /mnt/data/content/logs

mkdir -p /mnt/data/content/adapters

node /srv/node/config.js
