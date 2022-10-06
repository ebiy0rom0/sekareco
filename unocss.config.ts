import type { UserConfig } from "@unocss/core";
import presetUno from "@unocss/preset-uno";
import { presetForms } from "@unocss/preset-forms";
import { presetExtra } from "@unocss/preset-extra";

// @ref https://github.com/unocss/unocss#configurations
export default <UserConfig> {
  presets: [presetUno(), presetForms(), presetExtra()],
  theme: {
    breakpoints: {
      "sm": "640px",
      "md": "768px",
      "lg": "1080px",
      "xl": "1384px",
      "2xl": "1536px",
    },
  },
};
