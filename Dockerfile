FROM node:8
WORKDIR /app
COPY . /app

CMD bash ./run.sh
EXPOSE 3001
