#!/bin/bash
rsync -avzh --delete --progress --exclude 'node_modules' --exclude '.git' --exclude 'Procfile' /project/vue_express/ ~/vue_express/
