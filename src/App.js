import "./App.css";

function App() {
  return (
    <main className="App">
      <div className="CardContainer">
        <img
          src="/images/image-equilibrium.jpg"
          alt="equilibrium "
          className="Image"
        />
        <div className="DetailsContainer">
          <div className="Description">
            <h3>Equilibrium #3429</h3>
            <p>Our Equilibrium collection promotes balance and clam.</p>
          </div>
          <div className="PriceAndTime">
            <div className="Price">
              <img src="/images/icon-ethereum.svg"
              alt="icon-ethereum" width={11} height={18}/>
              <span> 0.041ETH</span>
            </div>
            <div className="Time">
            <img src="/images/icon-clock.svg"
              alt="icon-clock"
              width={17} height={17}/>
              <span>3 days left</span>
            </div>
          </div>
        </div>
        <div className="CreationContainer">
          <img
          src="/images/image-avatar.png" alt="avatar"
          width={40} height={40}
          />
          <p>Creation of <span>Jules Wyvern</span></p>
        </div>
      </div>
    </main>
  );
}

export default App;
