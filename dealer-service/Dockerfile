FROM node:16-slim
WORKDIR /app
COPY . .
RUN npm install express cors
EXPOSE 3000
CMD ["node", "server.js"]
