import { Box, ChakraProvider } from '@chakra-ui/react';
import theme from './theme';
import 'animate.css';

import { BrowserRouter } from 'react-router-dom';
import RouteRoot from './Routes';
import { ColorModeSwitcher } from './ColorModeSwitcher';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box position={'fixed'} right={'2em'} top={'0.5em'} zIndex={'1000'}><ColorModeSwitcher/></Box>
      
      <BrowserRouter>
        <RouteRoot/>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
