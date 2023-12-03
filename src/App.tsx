import Balance from './components/Balance/Balance'
import Header from './components/Header/Header'

function App() {
  return (
    <>
      <Header />
      <div data-testid="app-container" className="container">
        <Balance />
      </div>
    </>
  )
}

export default App
