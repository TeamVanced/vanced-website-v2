FROM node:14-alpine
LABEL maintainer="teamvanced@gmail.com"

COPY package.json /src/package.json
RUN cd /src && npm install --loglevel error
RUN npm install -g serve
COPY . /src
WORKDIR /src

# Add environment variables
ARG REACT_APP_VANCED_LATEST_API_URL
RUN echo "REACT_APP_VANCED_LATEST_API_URL=$REACT_APP_VANCED_LATEST_API_URL" >> .env

EXPOSE 4001
RUN npm run build
CMD serve -s build -l 4001