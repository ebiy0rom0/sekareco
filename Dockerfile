FROM denoland/deno:distroless

WORKDIR /app

COPY . .

EXPOSE 3678

CMD ["run", "--allow-net", "-A", "https://deno.land/x/aleph@1.0.0-alpha.60/cli.ts", "start"]