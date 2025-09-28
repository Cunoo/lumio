/**
 * App.tsx
 *
 * This is the entry point of the application.
 * It sets up the main structure and navigation of the app.
 */

import {StyleSheet, View } from 'react-native';
import {
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import LoginScreen from './screens/LoginScreen';

function App() {
  return (
    <SafeAreaProvider>
      <LoginScreen />
    </SafeAreaProvider>
  );
}


export default App;
