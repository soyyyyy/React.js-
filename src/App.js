import { useState, useEffect } from "react";

function App() {
  const[loading, setLoding] = useState(true);
  const[coins, setCoins] = useState([]);
  useEffect(()=>{
    fetch("http://api.coinpaprika.com/v1/tickers")  
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoding(false);
      })
  }, []);
  return(
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? <strong>Loading...</strong> : (
        <select>
          {coins.map((coin) => (
            <option>
              {coin.name} ({coin.symbol}): ${coin.quotes.USD.price}
            </option>
          ))}
        </select>
      )}
      
    </div>
  );
}

export default App;

