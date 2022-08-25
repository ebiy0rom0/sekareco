# Sekareco

This project is React application powered by
[Aleph.js](https://github.com/alephjs/aleph.js).

## Available Scripts

### `deno task dev`
Start the application in development mode.

### `deno task build`
Builds the app for production to the `dist` folder.

### `deno task start`
Start the application in production mode.

## Launch with Docker
This project is supports launch production mode with `Docker`.  
command for example.
```
$ docker build --tag sekareco:v1.0 .
$ docker run -p 3000:3678 --name sekareco sekareco:v1.0
```
and access to `localhost:3000` on your browser.

## Setup development
Used `denon` for hot reloading during development.  
Run the following command to install `denon`.
```
deno install -qAf --unstable https://deno.land/x/denon/denon.ts
```

⚠️ tips ⚠️  
Aleph.js uses port 6060 for launch the application.  
If another application is occupying it, release it before launching.

## Links
- [deno official](https://deno.land/)
- [denon repository](https://deno.land/x/denon@2.5.0)
- [Aleph.js repository](https://github.com/alephjs/aleph.js)
