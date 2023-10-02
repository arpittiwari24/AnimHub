export const editorThemes = [
  { name: "Dark", theme: "vs-dark" },
  { name: "Light", theme: "vs-light" },
  { name: "HCLight", theme: "hc-light" },
  { name: "HCDark", theme: "hc-black" },
];

export const htmlTemplate = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="./style.css" />
    <title>Document</title>
  </head>
  <body>
  <!-- Add Your button code here -->
  <button class="btn">Click Me</button>
  <script src="./app.js"></script>
  </body>
</html>
`;

export const cssTemplate = `* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #212121;
}
/* 
1. Add your styles below this.
2. Don't change the above code.
3. You can change the background color of the body.
4. Remove the comments.
 */
`;

export const jsTemplate = `// Add Your button script here`;

export const tailwindCssTemplate = `
@tailwind base;
@tailwind components;
@tailwind utilities;
`;

export const tailwindConfigTemplate = `
/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      // ...
    },
  },
  plugins: [],
}
`;
