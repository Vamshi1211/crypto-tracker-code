// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import CryptocurrencyItem from '../CryptocurrencyItem'
import './index.css'

class CryptocurrenceList extends Component {
  state = {cryptoList: [], isLoading: true}

  componentDidMount() {
    this.getCryptoData()
  }

  getCryptoData = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()

    const updatedData = data.map(eachItem => ({
      currencyLogo: eachItem.currency_logo,
      currencyName: eachItem.currency_name,
      euroValue: eachItem.euro_value,
      usdValue: eachItem.usd_value,
      id: eachItem.id,
    }))
    this.setState({cryptoList: updatedData, isLoading: false})
  }

  getCryptoListItems = () => {
    const {cryptoList} = this.state

    return (
      <>
        <h1 className="heading">Cryptocurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
          className="crypto-image"
        />
        <ul className="list-container">
          <li className="list-header">
            <p className="crypto-type">Crypto Type</p>
            <div className="currency-container">
              <p className="crypto-type">USD</p>
              <p className="crypto-type">EURO</p>
            </div>
          </li>
          {cryptoList.map(eachItem => (
            <CryptocurrencyItem key={eachItem.id} eachCryptoItem={eachItem} />
          ))}
        </ul>
      </>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div className="crypto-currency-list-container">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          this.getCryptoListItems()
        )}
      </div>
    )
  }
}

export default CryptocurrenceList
