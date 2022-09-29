import type { UserConfig } from "@unocss/core";
import presetUno from "@unocss/preset-uno";

// @ref https://github.com/unocss/unocss#configurations
export default <UserConfig> {
  presets: [presetUno()],
  theme:{
    breakpoints: {
      lg: '1080px',
      xl: '1384px',
      '2xl': '1536px'
    }
  },
};
