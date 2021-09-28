module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          screens: './src/screens',
          styles: './src/styles',
          assets: './src/assets',
          navigation: './src/navigation',
          utils: './src/utils',
          'shared-services': './src/shared-services',
          'redux-helper': './src/redux-helper',
        },
      },
    ],
  ],
};
