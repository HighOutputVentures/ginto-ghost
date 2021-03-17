#!/bin/bash

mkdir -p /mnt/data/content/data

mkdir -p /mnt/data/content/images

mkdir -p /mnt/data/content/themes

mkdir -p /mnt/data/content/logs

mkdir -p /mnt/data/content/adapters

ln -s /var/www/ghost/content/themes/casper /mnt/data/content/themes/casper || true

NODE_ENV=production yarn start
