
import React from 'react';
import { StarshipFeedScreen } from './src/screens/StarshipFeedScreen';
import { QueryClient, QueryClientProvider } from 'react-query'
import { NetworkProvider } from 'react-native-offline';

 const queryClient = new QueryClient()
const App = () => {
   //<LoginScreen />;
  // <TermsScreen />;
  //<StarshipFeedScreen />;
  
  return <QueryClientProvider client={queryClient}><StarshipFeedScreen /></QueryClientProvider>
    
  
};

export default App;