import * as eva from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';
import AppNavigation from './src/navigation/AppNavigation';
import { default as theme } from './theme.json'
import { default as mapping } from './mapping.json';

export default function App() {
  return (
    <ApplicationProvider 
    {...eva} 
    theme={{ ...eva.light, ...theme } } 
    customMapping={mapping}>
      <AppNavigation />
    </ApplicationProvider>
  );
}
