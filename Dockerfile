FROM node:18-alpine

WORKDIR /

COPY public/ /public
COPY src/ /src
COPY package.json /

RUN npm install
RUN npm run build
RUN npm install -g serve
EXPOSE 8001
CMD ["serve", "-s", "build", "-l", "8001"]