import Balance from './components/Balance/Balance'
import Header from './components/Header/Header'
import TransactionsList from './components/TransactionsList/TransactionsList'

function App() {
  return (
    <>
      <Header />
      <div data-testid="app-container" className="container">
        <Balance />
        <TransactionsList />
      </div>
    </>
  )
}

export default App
