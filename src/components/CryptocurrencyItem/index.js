// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {eachCryptoItem} = props
  const {currencyLogo, currencyName, euroValue, usdValue} = eachCryptoItem

  return (
    <li className="list-item-container">
      <div className="logo-title-container">
        <img src={currencyLogo} alt={currencyName} className="logo" />
        <p className="logo-name">{currencyName}</p>
      </div>
      <div className="list-item-value-container">
        <p className="item-value">{usdValue}</p>
        <p className="item-value">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
