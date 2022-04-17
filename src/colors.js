const BaseColors = {
  BLACK: '#171717',
  RED: '#CF0000',
  GREEN: '#00AF91',
  BLUE: '#2FA4FF',
  WHITE: '#EFEFEF',
  PURPLE: '#B983FF',
  ORANGE: '#FF8E00',
  DARK_PINK: '#CE49BF',
  BACKGROUND_COLOR: '#1B262C',
  SELECTION_COLOR: 'rgba(255, 255, 255, 0.1)',
  GRADIENT_LEFT: '#00C6FF',
  GRADIENT_RIGHT: '#0072FF',
}

// Intentionally some keys name do not match the assigned color
const Colors = {
  black: BaseColors.BLACK,
  red: BaseColors.RED,
  green: BaseColors.GREEN,
  blue: BaseColors.BLUE,
  magenta: BaseColors.ORANGE,
  yellow: BaseColors.PURPLE,
  lightBlack: BaseColors.WHITE,
  lightGreen: BaseColors.BLUE,
  lightBlue: BaseColors.PURPLE,
  lightCyan: BaseColors.PURPLE,
  lightYellow: BaseColors.DARK_PINK,
}

const ConfigColors = {
  cursorColor: BaseColors.BLUE,
  cursorAccentColor: BaseColors.BLUE,
  foregroundColor: BaseColors.WHITE,
  backgroundColor: BaseColors.BACKGROUND_COLOR,
  selectionColor: BaseColors.SELECTION_COLOR,
  borderColor: BaseColors.BLACK,
}

export { BaseColors, Colors, ConfigColors }
