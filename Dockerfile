FROM node:18-alpine
ENV NODE_ENV=production
ADD server /server
WORKDIR /server
RUN yarn install --production

ADD client /client
WORKDIR /client
RUN yarn install
RUN yarn build
RUN mv /client/build/* /server/static
RUN rm -rf /client

ADD admin-ui /admin
WORKDIR /admin
RUN yarn install
RUN yarn build
RUN mv /admin/build/* /server/static/admin
RUN rm -rf /admin

EXPOSE 80
WORKDIR /server
CMD yarn serve