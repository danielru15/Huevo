import '../styles/globals.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { DatosProvider } from '../context/useContext';
import Layout from '../layout/Layout';

function MyApp({ Component, pageProps }) {
  return (
  <DatosProvider>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </DatosProvider>
  )
}

export default MyApp
