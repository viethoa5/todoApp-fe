module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          node: "16.9.1",
        },
      },
    ],
    "@babel/preset-react",
    "@babel/preset-typescript",
  ],
};
