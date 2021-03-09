#FROM node:alpine AS build
#WORKDIR /app
#COPY . .
#RUN npm install && npm run prod

FROM nginx:alpine
WORKDIR /usr/share/nginx/html
#COPY --from=build /dist/web-punterbot .
COPY /dist/web-punterbot .

EXPOSE 80
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

