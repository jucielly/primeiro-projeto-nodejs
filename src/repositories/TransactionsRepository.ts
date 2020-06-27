import Transaction from '../models/Transaction';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

interface createTransactionDTO {
  title: string
  type: 'income' | 'outcome';
  value: number
}

class TransactionsRepository {
  private transactions: Transaction[];

  constructor() {
    this.transactions = [];
  }

  public all(): Transaction[] {
    return this.transactions;
  }

  public getBalance(): Balance {
    //const handleSumAllTransactions = this.transactions.reduce((accumulator, transaction) => {

    //}, 0);
  }

  public create({title, type, value} : createTransactionDTO): Transaction {
    const transaction = new Transaction({title,type,value}) {


    }
  }
}

export default TransactionsRepository;
