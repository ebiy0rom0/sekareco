FROM denoland/deno:latest

WORKDIR /app

COPY . .

RUN deno task build

EXPOSE 3678

CMD ["task", "start"]