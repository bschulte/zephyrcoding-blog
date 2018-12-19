#!/bin/bash

./node_modules/.bin/gatsby build
scp -r public/* bschulte@204.48.21.24:/var/www/zephyrcoding.com/html/