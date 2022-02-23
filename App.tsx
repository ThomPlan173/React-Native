
import React from 'react';
import { StarshipFeedScreen } from './src/screens/StarshipFeedScreen';
import { QueryClient, QueryClientProvider } from 'react-query'
import { NetworkProvider } from 'react-native-offline';
import { Offline } from './src/screens/offline';
import { Navigator } from './src/navigation/Navigator';
 const queryClient = new QueryClient()
const App = () => {
   
  return <NetworkProvider><QueryClientProvider client={queryClient}>
    <Navigator />
    </QueryClientProvider></NetworkProvider>
    
  
};

export default App;