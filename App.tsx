import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import AppNavigation from './src/navigation/AppNavigation';
import { default as theme } from './theme.json';
import { default as mapping } from './mapping.json';

export default function App() {
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider
        {...eva}
        theme={{ ...eva.light, ...theme }}
        customMapping={mapping}
      >
        <AppNavigation />
      </ApplicationProvider>
    </>
  );
}
