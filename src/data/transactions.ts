import { ITransaction } from '../interfaces/ITransaction'

const transactions: ITransaction[] = [
  { id: '1', date: new Date('2023/10/31'), text: 'Netflix', amount: -316.0 },
  { id: '2', date: new Date('2023/12/01'), text: 'Spotify', amount: -190.0 },
  { id: '3', date: new Date('2023/10/25'), text: 'Amazon', amount: -50.0 },
  { id: '4', date: new Date('2023/11/02'), text: 'Groceries', amount: -120.0 },
  { id: '5', date: new Date('2023/10/30'), text: 'Gas', amount: -40.0 },
  { id: '6', date: new Date('2023/11/02'), text: 'Coffee', amount: -5.0 },
  { id: '7', date: new Date('2023/10/28'), text: 'Restaurant', amount: -80.0 },
  { id: '8', date: new Date('2023/10/29'), text: 'Utilities', amount: 150.0 },
  { id: '9', date: new Date('2023/11/02'), text: 'Earnings', amount: 500.0 },
  { id: '10', date: new Date('2023/10/27'), text: 'Investment', amount: 300.0 },
  { id: '11', date: new Date('2023/12/03'), text: 'Tacos', amount: -10.5 },
]

export default transactions
