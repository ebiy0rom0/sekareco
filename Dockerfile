FROM denoland/deno:distroless

WORKDIR /app

COPY . .

EXPOSE 3678

CMD ["task", "start"]