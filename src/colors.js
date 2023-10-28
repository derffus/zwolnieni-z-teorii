const colors = {
  lightMode: {
    purple: "",
    purpleHovered: "",
    content: "",
    purpleClicked: "",
    blue: "",
    colorFont: "",
  },
  darkMode: {
    purple: "",
    purpleHovered: "",
    content: "",
    purpleClicked: "",
    blue: "",
    colorFont: "",
  },
};
for (let color in colors.lightMode) {
  if (!colors.lightMode.hasOwnProperty(color)) {
    continue;
  }
  switch (color) {
    case "purple":
      colors.lightMode[color] = "hsl(235, 26%, 62%)";
      continue;
    case "purpleHovered":
      colors.lightMode[color] = "hsl(235, 26%, 87%)";
      continue;
    case "content":
      colors.lightMode[color] = "white";
      continue;
    case "purpleClicked":
      colors.lightMode[color] = "hsl(235, 26%, 68%)";
      continue;
    case "blue":
      colors.lightMode[color] = "hsl(201, 43%, 25%)";
      continue;
    case "colorFont":
      colors.lightMode[color] = "hsl(201, 43%, 25%)";
      continue;
    default:
      continue;
  }
}

for (let color in colors.darkMode) {
  if (!colors.darkMode.hasOwnProperty(color)) {
    continue;
  }
  switch (color) {
    case "purple":
      colors.darkMode[color] = "hsl(235, 26%, 40%)";
      continue;
    case "purpleHovered":
      colors.darkMode[color] = "hsl(235, 26%, 12%)";
      continue;
    case "content":
      colors.darkMode[color] = "hsl(235, 26%, 3%)";
      continue;
    case "purpleClicked":
      colors.darkMode[color] = "hsl(235, 26%, 38%)";
      continue;
    case "blue":
      colors.darkMode[color] = "hsl(201, 43%, 45%)";
      continue;
    case "colorFont":
      colors.darkMode[color] = "#8c8c8c";
      continue;
    default:
      continue;
  }
}
export default colors;
