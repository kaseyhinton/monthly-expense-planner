import {h, Component} from 'preact';
import {Provider, connect} from 'unistore/preact'
import actions from '../../actions';
import ExpenseItem from '../../components/expenseItem';

class Home extends Component {

    removeAll = (event) => {
        if (typeof window === undefined) 
            return;
        
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
        expenses,
        totalExpenses
    }, state) {
        return (
            <div class="route">
                <h4>Monthly Expense Planner</h4>
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
                            id={expense.id}
                            description={expense.description}
                            amount={expense.amount}
                            dueDate={expense.dueDate}
                            isPaid={expense.isPaid}/>)
}
                    </tbody>
                </table>
                <h5 style="float: right;">Total Monthly Expenses: ${this.props.totalExpenses}
                </h5>
                <div
                    style="position: absolute; bottom: 0; right:0"
                    class="button button-clear"
                    onClick={this.removeAll}>Delete All Items</div>
            </div>
        );
    }
}
const HomeContainer = connect([
    'expenses', 'totalExpenses'
], actions)(Home);
export default HomeContainer;