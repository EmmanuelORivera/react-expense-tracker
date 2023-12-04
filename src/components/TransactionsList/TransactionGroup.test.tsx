import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import TransactionGroup from './TransactionGroup'
import { ITransaction } from '../../interfaces/ITransaction'

describe('TransactionGroup', () => {
  const date = '2023/12/02'
  const transactionList: ITransaction[] = [
    {
      id: '1',
      text: 'Transaction 1',
      amount: 50,
      date: new Date('2023/12/03'),
    },
    {
      id: '2',
      text: 'Transaction 2',
      amount: 75,
      date: new Date('2023/12/02'),
    },
  ]
  it('should render the component without a problem', () => {
    render(<TransactionGroup date={date} transactionList={transactionList} />)
  })
})
