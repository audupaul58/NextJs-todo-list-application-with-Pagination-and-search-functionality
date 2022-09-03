import '../styles/globals.scss'
import 'bootstrap/dist/css/bootstrap.css';
import {SWRConfig} from 'swr'
import axios from 'axios'
import {useEffect} from 'react'
import { SSRProvider } from 'react-bootstrap';


function MyApp({ Component, pageProps:{ session, pageProps}}) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
      }, []);
  return <SWRConfig value={{fetcher: (url)=> axios.get(url).then(res => res.data)}}>
    <SSRProvider>
      <Component {...pageProps} />
    </SSRProvider>
  </SWRConfig>
  
}

export default MyApp
