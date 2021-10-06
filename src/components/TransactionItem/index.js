// Write your code here
import './index.css'

const TransactionItem = props => {
  const {eachAmount, deleteTransaction} = props
  const {id, title, amount, type} = eachAmount

  const onDeleteTransaction = () => {
    deleteTransaction(id)
  }

  return (
    <li className="History-container">
      <p className="Title-container Title-container1">{title}</p>
      <p className="Title-container Title-container1">{amount}</p>
      <p className="Title-container Title-container1">{type}</p>

      <div className="delete-container">
        <button
          className="delete-button"
          type="button"
          onClick={onDeleteTransaction}
          testid="delete"
        >
          <img
            className="delete-img"
            src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default TransactionItem
