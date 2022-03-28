import { ThirdwebWeb3Provider } from '@3rdweb/hooks'
import '../styles/globals.css'


const supportedChainsIds = [4] //[rinkeby]
const connectors = {
  injected: {},
}

function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebWeb3Provider connectors={connectors} supportedChainIds={supportedChainsIds}>
      <Component {...pageProps} />
    </ThirdwebWeb3Provider>
  )
}

export default MyApp
