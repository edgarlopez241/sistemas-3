FROM node:20

WORKDIR /ProyectoNSS

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 4000
CMD ["npm" ,"run" ,"dev"]