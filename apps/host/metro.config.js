const path = require('path');
const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

require('module-federation-metro');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('@react-native/metro-config').MetroConfig}
 */
const config = {
  watchFolders: [
    path.resolve(__dirname, '../../node_modules'),
    path.resolve(__dirname, '../../external/metro/packages'),
  ],
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
