import {h, Component} from 'preact';
import {Provider, connect} from 'unistore/preact'
import actions from '../../actions';
import ExpenseItem from '../../components/expenseItem';
import {route} from 'preact-router';

class Home extends Component {

    // removeAll = (event) => {     if (typeof window === undefined)         return;
    //     const result = window.confirm("Are you sure you want to delete all of
    // your expenses?");     if (result) {         this             .props
    // .removeAll();     } }

    componentDidMount() {
        this
            .props
            .findAll();
    }

    render({
        expenses,
        totalExpenses
    }, state) {
        return (
            <div class="route">
                <table class="mui-table mui-table--bordered">
                    <tbody>
                        <tr>
                            <td>Description</td>
                            <td>Amount</td>
                            <td>Due</td>
                            <td>Actions</td>
                        </tr>
                    </tbody>
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
                <h4 style="text-align: right;">Total Monthly Expenses: ${this.props.totalExpenses}
                </h4>

                <button
                    style="position: fixed; right: 16px; bottom: 16px; font-size: 22px;"
                    class="mui-btn mui-btn--fab mui-btn--primary"
                    onClick={() => route('/add')}>+</button>
            </div>
        );
    }
}
const HomeContainer = connect([
    'expenses', 'totalExpenses'
], actions)(Home);
export default HomeContainer;