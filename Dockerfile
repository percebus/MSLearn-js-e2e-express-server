FROM node:16 as base
WORKDIR /usr/project
COPY . .
# RUN sed -i 's/\r$//' ./scripts/**/*.sh
RUN ls -la
RUN npm run setup:ci --if-present  &&  npm ci

FROM base as test
RUN npm run test

FROM base as release
EXPOSE 3000
CMD ["npm", "start"]
