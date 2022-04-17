import { BaseColors, Colors, ConfigColors } from './colors'

const decorateConfig = config => {
  const myConfig = {
    cursorShape: 'BEAM',
    fontSize: 16,
    css: `
      ${config.css || ''}
      .hyper_main {
        border-width: 2px !important;
        border-color: ${BaseColors.BLACK} !important;
      }
      .tab_textActive {
        color: ${BaseColors.WHITE};
      }
      .tab_text:not(.tab_textActive) {
        color: ${BaseColors.WHITE}50;
      }
      .tab_textActive .tab_textInner::before {
        content: "🐱‍👤 ";
      }
      .tab_textActive .tab_textInner::after {
        content: " 🚀";
      }
      .header_appTitle {
        color: ${BaseColors.BLUE};
        font-weight: bold;
        font-size: 14px;
        background: ${BaseColors.GRADIENT_LEFT};
        background: -webkit-linear-gradient(to right, ${
          BaseColors.GRADIENT_LEFT
        } 0%, ${BaseColors.GRADIENT_RIGHT} 100%);
        background: -moz-linear-gradient(to right, ${
          BaseColors.GRADIENT_LEFT
        } 0%, ${BaseColors.GRADIENT_RIGHT} 100%);
        background: linear-gradient(to right, ${BaseColors.GRADIENT_LEFT} 0%, ${
      BaseColors.GRADIENT_RIGHT
    } 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;

      }
      *::-webkit-scrollbar {
        width: 4px;
        height: 4px;
        background-color: transparent;
      }
      *::-webkit-scrollbar-track {
        background-color: transparent;
      }
      *::-webkit-scrollbar-thumb {
        background: ${BaseColors.SELECTION_COLOR};
      }
      *::-webkit-scrollbar-thumb:window-inactive {
        background: transparent;
      }
    `,
    ...ConfigColors,
    colors: {
      ...config.colors,
      ...Colors,
    },
  }

  return Object.assign({}, config, myConfig)
}

export { decorateConfig }
