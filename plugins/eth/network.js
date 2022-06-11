import axios from 'axios'
import BN from 'bignumber.js'
import Base from './base'

export default class Network extends Base {
  constructor (args) {
    super(args)
    this.supportedNetworks = [1, 3, 4, 137, 80001, 56, 97]
    this.networkMap = {
      1: 'mainnet',
      3: 'ropsten',
      4: 'rinkeby',
      137: 'polygon',
      80001: 'mumbai',
      56: 'bsc',
      97: 'bsctest'
    }
  }

  hasProvider () {
    return !!this.provider
  }

  async getBlockNumber () {
    return await this.web3.eth.getBlockNumber()
  }

  async getId () {
    const id = await this.web3.eth.net.getId()
    if (!this.supportedNetworks.includes(id)) throw new Error('Unsupported network, please use Mainnet, Ropsten, Rinkeby, Polygon, Mumbai or Binance Smart Chain.')
    return id
  }

  async currentName () {
    const id = await this.getId()
    return this.networkMap[id]
  }

  async gasPrice () {
    let gasPriceUrl = ''
    let bn = new BN(0)
    if (this.supportedNetworks === 137 || this.supportedNetworks === 80001) {
      gasPriceUrl = 'https://gasstation-mainnet.matic.network'
      const { data: gasData } = await axios.get(gasPriceUrl)
      bn = new BN(gasData.fast)
    } else if (this.supportedNetworks === 56 || this.supportedNetworks === 97) {
      gasPriceUrl = 'https://owlracle.info/bsc/gas'
      const { data: gasData } = await axios.get(gasPriceUrl)
      bn = new BN(gasData.speeds[2].gasPrice)
    } else {
      gasPriceUrl = 'https://www.etherchain.org/api/gasPriceOracle'
      const { data: gasData } = await axios.get(gasPriceUrl)
      bn = new BN(gasData.fast)
    }
    return bn.shiftedBy(9).toString(10)
  }
}
