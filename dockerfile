FROM node:latest
CMD mkdir -p /src/app
WORKDIR /src/app
COPY . /src/app
EXPOSE 3000
CMD ["node", "."]