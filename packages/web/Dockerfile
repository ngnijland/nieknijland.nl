FROM docker.io/library/node:14.18.1

WORKDIR /usr/app/packages/web
EXPOSE 8000

RUN apt-get update && apt-get install -y python

COPY package.json yarn.lock .
RUN yarn
