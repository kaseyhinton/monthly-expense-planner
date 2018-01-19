import {h, Component} from 'preact';
import {Link} from 'preact-router/match';
import style from './style';
import {Provider, connect} from 'unistore/preact'
import actions from '../../actions';

class ExpenseItem extends Component {
    state = {
        paid: false
    }

    pay = (event) => {
        this
            .props
            .updateExpense({
                id: this.props.id,
                isPaid: !this.props.isPaid
            });
        // this     .props     .findAll();
    }

    remove = (event) => {
        this
            .props
            .remove({id: this.props.id});
        // this     .props     .findAll();
    }
    getFillColor() {
        return this.props.isPaid
            ? '#1abc9c'
            : '#757575';
    }
    render({
        description,
        amount,
        dueDate,
        isPaid
    }, state) {
        return (
            <tr class={style.expenseItem}>
                <td>{description}</td>
                <td>{amount}</td>
                <td>{dueDate}</td>
                <td>
                    <span onClick={this.pay}>
                        <svg
                            style={{
                            width: 24,
                            height: 24,
                            fill: this.getFillColor()
                        }}
                            viewBox="0 0 24 24">
                            <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/>
                        </svg>
                    </span>
                    <span onClick={this.remove}>
                        <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                            <path
                                d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z"/>
                        </svg>
                    </span>
                </td>
            </tr>
        );
    }
}
const ExpenseItemContainer = connect('expenses', actions)(ExpenseItem);
export default ExpenseItemContainer;