FROM node:8.11.2
RUN mkdir -p /usr/src/sportstore
COPY dist /usr/src/sportstore/dist
COPY authMiddleware.js /usr/src/sportstore/
COPY data.json /usr/src/sportstore/
COPY server.js /usr/src/sportstore/server.js
COPY deploy-package.json /usr/src/sportstore/package.json
WORKDIR /usr/src/sportstore
RUN npm install
EXPOSE 80
CMD ["node", "server.js"]
