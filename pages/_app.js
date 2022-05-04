import { ThemeProvider, createTheme } from '@mui/material/styles';
import Layout from '../components/Layout';
import '../styles/globals.css';

const theme = createTheme({});

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
