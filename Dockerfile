FROM node:12

# Create app directory
WORKDIR /app

# Install app dependencies
#COPY package*.json ./

#RUN yarn install

RUN yarn add serve

# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY ./build .

EXPOSE 5000
CMD [ "yarn", "serve" ]