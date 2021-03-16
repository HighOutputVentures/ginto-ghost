#!/bin/bash

npm install -g ghost-cli

mkdir app && cd app

ghost install --db sqlite3 --no-start --no-setup
