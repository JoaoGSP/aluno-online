FROM node:16.5.0
WORKDIR /app
COPY src/package.json ./
RUN npm install
COPY src .
CMD [ "npm", "run", "start" ]