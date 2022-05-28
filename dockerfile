FROM node:14
WORKDIR '/app'
COPY my-first-app/package.json .
RUN npm install
COPY my-first-app .
EXPOSE 4200
CMD ["npm", "start"]
