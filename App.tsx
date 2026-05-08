import React, { useEffect } from 'react';
import { HomeScreen } from './src/screens';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createTables } from './src/services/db';

const App = () => {
  useEffect(() => {
    // Init Database
    createTables();
  }, []);

  return (
    <SafeAreaProvider>
      <HomeScreen />
    </SafeAreaProvider>
  );
};

export default App;
