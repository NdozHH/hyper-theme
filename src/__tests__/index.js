import { decorateConfig } from '..'
import { BaseColors, Colors, ConfigColors } from '../colors'

describe(`Selected colors to create the theme`, () => {
  test('Base colors', () => {
    expect(BaseColors).toMatchInlineSnapshot(`
      Object {
        "BACKGROUND_COLOR": "#1B262C",
        "BLACK": "#171717",
        "BLUE": "#2FA4FF",
        "DARK_PINK": "#CE49BF",
        "GRADIENT_LEFT": "#00C6FF",
        "GRADIENT_RIGHT": "#0072FF",
        "GREEN": "#00AF91",
        "ORANGE": "#FF8E00",
        "PURPLE": "#B983FF",
        "RED": "#CF0000",
        "SELECTION_COLOR": "rgba(255, 255, 255, 0.1)",
        "WHITE": "#EFEFEF",
      }
    `)
  })

  test(`Colors for the theme's config's colors key`, () => {
    expect(Colors).toMatchInlineSnapshot(`
      Object {
        "black": "#171717",
        "blue": "#2FA4FF",
        "green": "#00AF91",
        "lightBlack": "#EFEFEF",
        "lightBlue": "#B983FF",
        "lightCyan": "#B983FF",
        "lightGreen": "#2FA4FF",
        "lightYellow": "#CE49BF",
        "magenta": "#FF8E00",
        "red": "#CF0000",
        "yellow": "#B983FF",
      }
    `)
  })

  test(`Additional theme's config colors`, () => {
    expect(ConfigColors).toMatchInlineSnapshot(`
      Object {
        "backgroundColor": "#1B262C",
        "borderColor": "#171717",
        "cursorAccentColor": "#2FA4FF",
        "cursorColor": "#2FA4FF",
        "foregroundColor": "#EFEFEF",
        "selectionColor": "rgba(255, 255, 255, 0.1)",
      }
    `)
  })
})

describe('Theme configuration object', () => {
  test('Decorated config object with the selected colors', () => {
    expect(decorateConfig({})).toMatchInlineSnapshot(`
      Object {
        "backgroundColor": "#1B262C",
        "borderColor": "#171717",
        "colors": Object {
          "black": "#171717",
          "blue": "#2FA4FF",
          "green": "#00AF91",
          "lightBlack": "#EFEFEF",
          "lightBlue": "#B983FF",
          "lightCyan": "#B983FF",
          "lightGreen": "#2FA4FF",
          "lightYellow": "#CE49BF",
          "magenta": "#FF8E00",
          "red": "#CF0000",
          "yellow": "#B983FF",
        },
        "css": "
            
            .hyper_main {
              border-width: 2px !important;
              border-color: #171717 !important;
            }
            .tab_textActive {
              color: #EFEFEF;
            }
            .tab_text:not(.tab_textActive) {
              color: #EFEFEF50;
            }
            .tab_textActive .tab_textInner::before {
              content: \\"🐱‍👤 \\";
            }
            .tab_textActive .tab_textInner::after {
              content: \\" 🚀\\";
            }
            .header_appTitle {
              color: #2FA4FF;
              font-weight: bold;
              font-size: 14px;
              background: #00C6FF;
              background: -webkit-linear-gradient(to right, #00C6FF 0%, #0072FF 100%);
              background: -moz-linear-gradient(to right, #00C6FF 0%, #0072FF 100%);
              background: linear-gradient(to right, #00C6FF 0%, #0072FF 100%);
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
              background: rgba(255, 255, 255, 0.1);
            }
            *::-webkit-scrollbar-thumb:window-inactive {
              background: transparent;
            }
          ",
        "cursorAccentColor": "#2FA4FF",
        "cursorColor": "#2FA4FF",
        "cursorShape": "BEAM",
        "fontSize": 16,
        "foregroundColor": "#EFEFEF",
        "selectionColor": "rgba(255, 255, 255, 0.1)",
      }
    `)
  })
})
