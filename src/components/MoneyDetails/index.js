// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {income, expenses} = props

  const balance = income - expenses

  return (
    <ul className="moneyDetails-container">
      <li className="moneyDetails-list-container background-balance-color">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png "
          alt="balance"
          className="money-image-details "
        />
        <div>
          <p>Your Balance</p>
          <p testid="balanceAmount">Rs {balance}</p>
        </div>
      </li>
      <li className="moneyDetails-list-container background-income-color">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png "
          alt="income"
          className="money-image-details "
        />
        <div>
          <p>Your Income</p>
          <p testid="incomeAmount">Rs {income}</p>
        </div>
      </li>
      <li className="moneyDetails-list-container background-expenses-color">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png "
          alt="expenses"
          className="money-image-details "
        />
        <div>
          <p>Your Expenses</p>
          <p testid="expensesAmount">Rs {expenses}</p>
        </div>
      </li>
    </ul>
  )
}

export default MoneyDetails
