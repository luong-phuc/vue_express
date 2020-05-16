FROM node:13
RUN apt-get update -y
RUN apt-get install -y vim less
RUN npm install -g npm
RUN npm install -g @vue/cli @vue/cli-init
