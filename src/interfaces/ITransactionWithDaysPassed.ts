import { ITransaction } from './ITransaction'

export interface ITransactionWithDaysPassed extends ITransaction {
  daysPassed: number
}
