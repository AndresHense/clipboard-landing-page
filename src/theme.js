import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    heading: 'Bai Jamjuree, sans-serif',
    body: 'Bai Jamjuree, sans-serif',
  },
  styles: {
    global: {
      p: {
        color: 'gray.500',
        fontSize: 'xl',
        paddingX: '1rem',
      },
      h1: {
        fontSize: '5xl',
        fontWeight: 'bold',
      },
      h2: {
        fontSize: '4xl',
        fontWeight: 'bold',
      },
      h3: {
        fontWeight: 'bold',
        fontSize: '3xl',
        color: 'black',
      },
    },
  },
  components: {
    Button: {
      baseStyle: {
        borderRadius: 9999,
      },
      sizes: {
        lg: {
          padding: 7,
          fontSize: 'lg',
        },
      },
    },
  },
});

export default theme;
