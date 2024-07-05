import Color from "./colors";
export const randomColor = () => {
  return Color[Math.floor(Math.random() * Color.length)];
};
