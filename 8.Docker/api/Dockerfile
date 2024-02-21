FROM node:17-alpine

# set /app as working directory
# so all commands will be run in app folder
WORKDIR /app

COPY package.json .

# building command
# from example: RUN npm install
# this command get executed at building time when image is created
RUN npm install

COPY . .

# set port number that will be expose by container
# port that will be listen to
EXPOSE 4000

# execute command at run time
CMD ["npm", "start"]

