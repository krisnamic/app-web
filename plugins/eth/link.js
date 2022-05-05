export default class Link {
  address (addr, { network = 'mainnet' } = {}) {
    const subdomain = network === 'mainnet' ? '' : `${network}.`
    const EXPLORER_DOMAIN = network === 'bsc' || network === 'bsctest' ? 'bscscan.com' : (network === 'polygon' || network === 'mumbai' ? 'polygonscan.com' : 'etherscan.io')
    return `https://${subdomain}${EXPLORER_DOMAIN}/address/${addr}`
  }

  transaction (txHash, { network = 'mainnet' } = {}) {
    const subdomain = network === 'mainnet' ? '' : `${network}.`
    const EXPLORER_DOMAIN = network === 'bsc' || network === 'bsctest' ? 'bscscan.com' : (network === 'polygon' || network === 'mumbai' ? 'polygonscan.com' : 'etherscan.io')
    return `https://${subdomain}${EXPLORER_DOMAIN}/tx/${txHash}`
  }
}
