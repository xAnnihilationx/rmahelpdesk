FROM node:23
RUN mkdir -p /rmahelpdesk
WORKDIR /rmahelpdesk



COPY package.json /rmahelpdesk
COPY package-lock.json /rmahelpdesk
RUN npm install

COPY . /rmahelpdesk
EXPOSE 3000

CMD ["npm", "run", "dev"]