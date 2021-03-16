#!/bin/bash

npm install -g ghost

mkdir ghost && cd ghost

ghost install --db sqlite3 --no-start --no-setup
