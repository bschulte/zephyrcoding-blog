#!/bin/bash

./node_modules/.bin/gatsby build
scp -r public/* bschulte@192.168.55.10:/var/www/zephyrcoding.com/html/