import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import MoneyDetails from '../MoneyDetails'

import TransactionItem from '../TransactionItem'

import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here
class MoneyManager extends Component {
  state = {
    amount: '',
    title: '',
    moneyList: [],
    optionId: transactionTypeOptions[0].optionId,
  }

  onChangeTitle = event => {
    this.setState({title: event.target.value})
  }

  onChangeAmount = event => {
    this.setState({amount: event.target.value})
  }

  onChangeOptionId = event => {
    this.setState({optionId: event.target.value})
    console.log(event.target.value)
  }

  onAmountDetails = event => {
    event.preventDefault()
    const {amount, title, optionId} = this.state
    const typeOption = transactionTypeOptions.find(
      eachTransaction => eachTransaction.optionId === optionId,
    )

    const {displayText} = typeOption

    const newAmountDetails = {
      title,
      amount: parseInt(amount),
      type: displayText,
      id: uuidv4(),
    }

    this.setState(prevState => ({
      moneyList: [...prevState.moneyList, newAmountDetails],
      title: '',
      amount: '',
      optionId: transactionTypeOptions[0].optionId,
    }))
  }

  getIncome = () => {
    const {moneyList} = this.state
    let incomeAmount = 0
    moneyList.forEach(eachBill => {
      if (eachBill.type === transactionTypeOptions[0].displayText) {
        incomeAmount += eachBill.amount
      }
    })

    return incomeAmount
  }

  getExpenses = () => {
    const {moneyList} = this.state
    let expensesAmount = 0

    moneyList.forEach(eachBill => {
      if (eachBill.type === transactionTypeOptions[1].displayText) {
        expensesAmount += eachBill.amount
      }
    })

    return expensesAmount
  }

  deleteTransaction = id => {
    const {moneyList} = this.state

    const updatedMoneyList = moneyList.filter(each => each.id !== id)

    this.setState({moneyList: updatedMoneyList})
  }

  render() {
    const {amount, title, moneyList, optionId} = this.state
    const income = this.getIncome()
    const expenses = this.getExpenses()

    return (
      <div className="background-container">
        <div className="background-top-container">
          <h1>Hi, Richard</h1>
          <p>
            welcome back to your <span>Money Manager</span>
          </p>
        </div>
        <MoneyDetails income={income} expenses={expenses} />
        <div className="bottom-container">
          <form className="form-container" onSubmit={this.onAmountDetails}>
            <h1>Add Transaction</h1>
            <label htmlFor="title">TITLE</label>
            <br />
            <input
              id="title"
              className="form-input"
              value={title}
              onChange={this.onChangeTitle}
            />
            <br />
            <label htmlFor="amount">AMOUNT</label>
            <br />
            <input
              id="amount"
              className="form-input"
              value={amount}
              onChange={this.onChangeAmount}
            />
            <br />
            <label htmlFor="moneyType">TYPE</label>
            <br />
            <select
              id="moneyType"
              className="form-input"
              value={optionId}
              onChange={this.onChangeOptionId}
            >
              {transactionTypeOptions.map(eachTransaction => (
                <option
                  value={eachTransaction.optionId}
                  key={eachTransaction.optionId}
                >
                  {eachTransaction.displayText}
                </option>
              ))}
            </select>
            <br />
            <button type="submit" className="form-button">
              Add
            </button>
          </form>
          <div className="history-container">
            <h1>History</h1>
            <ul className="History-container">
              <li className="Title-container list-container">
                <p className="Title-container Title-container1">Title</p>
                <p className="Title-container Title-container1">Amount</p>
                <p className="Title-container Title-container1">Type</p>
              </li>
            </ul>
            <ul className="History-container History-container1">
              {moneyList.map(eachList => (
                <TransactionItem
                  eachAmount={eachList}
                  key={eachList.id}
                  deleteTransaction={this.deleteTransaction}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
