import {h, Component} from 'preact';
import style from './style';
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
        expenses
    }, state) {
        return (
            <div class={style.home}>
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
                <div class="button button-clear" onClick={this.removeAll}>Delete All Items</div>
            </div>
        );
    }
}
const HomeContainer = connect(['expenses'], actions)(Home);
export default HomeContainer;