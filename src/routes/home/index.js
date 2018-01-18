import {h, Component} from 'preact';
import style from './style';
import {Provider, connect} from 'unistore/preact'
import actions from '../../actions';
import ExpenseItem from '../../components/expenseItem';

class Home extends Component {
    state = {
        description: '',
        amount: '',
        dueDate: ''
    }

    componentDidMount() {
        console.log(this.props);
    }

    onDescriptionChanged = (event) => {
        this.setState({description: event.target.value});
    }

    onAmountChanged = (event) => {
        this.setState({amount: event.target.value});
    }

    onDueDateChanged = (event) => {
        this.setState({dueDate: event.target.value});
    }

    addExpense = (event) => {
        this
            .props
            .addExpense({description: this.state.description, amount: this.state.amount, dueDate: this.state.dueDate})
        this.setState({description: '', amount: '', dueDate: ''});
    }
    removeAll = (event) => {
        const result = window.confirm("Are you sure you want to delete all of your expenses?");
        if (result) {
            this
                .props
                .removeAll();
        }
    }

    componentDidMount() {
        this
            .props
            .findAll();
    }

    render({
        addExpense,
        expenses
    }, {description, amount, dueDate}) {
        return (
            <div class={style.home}>
                <p style="float: left;">Monthly Expense Planner</p>
                <div class="button button-clear" onClick={this.removeAll}>Delete All Items</div>
                <table>
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Amount</th>
                            <th>Due Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {expenses.map(expense => <ExpenseItem
                            id={expense._id}
                            description={expense.description}
                            amount={expense.amount}
                            dueDate={expense.dueDate}
                            isPaid={expense.isPaid}/>)
}
                    </tbody>
                </table>
                <input
                    type="text"
                    placeholder="Description"
                    onChange={this.onDescriptionChanged}
                    value={description}/>
                <input
                    type="text"
                    placeholder="Amount"
                    onChange={this.onAmountChanged}
                    value={amount}/>
                <input
                    type="text"
                    placeholder="Due Date"
                    onChange={this.onDueDateChanged}
                    value={dueDate}/>
                <div>
                    <button onClick={this.addExpense}>Add Expense</button>
                </div>

            </div>
        );
    }
}
const H = connect(['expenses'], actions)(Home);
export default H;