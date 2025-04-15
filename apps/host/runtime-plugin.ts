import {FederationRuntimePlugin} from '@module-federation/runtime';

export default function (): FederationRuntimePlugin {
  return {
    name: 'custom-plugin-build',
    beforeLoadShare(args) {
      console.log('[build time inject] beforeLoadShare');
      return args;
    },
  };
}
