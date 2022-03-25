const BaseColors = {
  BLACK: "#171717",
  RED: "#CF0000",
  GREEN: "#00AF91",
  BLUE: "#2FA4FF",
  WHITE: "#EFEFEF",
  PURPLE: "#B983FF",
  MAGENTA: "#FF8E00",
  BACKGROUND_COLOR: "#1B262C",
  SELECTION_COLOR: "rgba(255, 255, 255, 0.1)",
  GRADIENT_LEFT: "#00C6FF",
  GRADIENT_RIGHT: "#0072FF",
};

const Colors = {
  black: BaseColors.BLACK,
  red: BaseColors.RED,
  green: BaseColors.GREEN,
  blue: BaseColors.BLUE,
  magenta: BaseColors.MAGENTA,
  lightBlack: BaseColors.WHITE,
  lightGreen: BaseColors.BLUE,
  lightBlue: BaseColors.PURPLE,
  lightCyan: BaseColors.PURPLE,
};

const ConfigColors = {
  cursorColor: BaseColors.BLUE,
  cursorAccentColor: BaseColors.BLUE,
  foregroundColor: BaseColors.WHITE,
  backgroundColor: BaseColors.BACKGROUND_COLOR,
  selectionColor: BaseColors.SELECTION_COLOR,
  borderColor: BaseColors.BLACK,
};

module.exports = {
  BaseColors,
  Colors,
  ConfigColors,
};
