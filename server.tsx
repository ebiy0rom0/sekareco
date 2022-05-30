import { App } from "aleph/react"
import { serve } from "aleph/server"
import presetWind from "@unocss/preset-wind.ts"
import { renderToReadableStream } from "react-dom/server"

serve({
  routes: "./routes/**/*.{tsx,ts}",
  build: {
    unocss: {
      presets: [presetWind()]
    },
  },
  ssr: {
    dataDefer: false,
    render: (ctx) => renderToReadableStream(<App ssrContext={ctx} />, ctx),
  },
});
