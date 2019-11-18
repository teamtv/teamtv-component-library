#!/bin/bash

npm run-script build
cd dist
mv main.*.js main.js
mv main.*.css main.css