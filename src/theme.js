import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';
import './font.css';
const styles = {
  global: props => ({
   
    body: {
      color: mode('#E5E4F1', '#131B52')(props),
      bg: mode('#131B52', '#5EBBC3')(props),
    },
   
  }),
};
const theme = extendTheme({
  styles,
  fonts: {
    heading: `'League Spartan', sans-serif`,
    body: `'League Spartan', sans-serif`,
  },
});

export default theme;