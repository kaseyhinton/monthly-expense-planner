import {h, Component} from 'preact';
import {Link} from 'preact-router/match';
import {Provider, connect} from 'unistore/preact'
import actions from '../../actions';

class ExpenseItem extends Component {
    state = {
        paid: false
    }

    pay = (event) => {
        this
            .props
            .update({
                id: this.props.id,
                isPaid: !this.props.isPaid,
                description: this.props.description,
                amount: this.props.amount,
                dueDate: this.props.dueDate
            });
    }

    remove = (event) => {
        this
            .props
            .remove({id: this.props.id});
    }

    render({
        description,
        amount,
        dueDate,
        isPaid
    }, state) {
        return (
            <tr>
                <td>{description}</td>
                <td>{amount}</td>
                <td>{dueDate}</td>
                <td>
                    <span onClick={this.remove}>
                        <svg style="width:24px;height:24px;fill:#757575" viewBox="0 0 24 24">
                            <path
                                d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z"/>
                        </svg>
                    </span>
                    <span onClick={this.pay}>
                        <svg
                            style={{
                            width: 24,
                            height: 24,
                            fill: isPaid
                                ? '#1abc9c'
                                : '#757575'
                        }}
                            viewBox="0 0 24 24">
                            <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/>
                        </svg>
                    </span>

                </td>
            </tr>
        );
    }
}
const ExpenseItemContainer = connect([], actions)(ExpenseItem);
export default ExpenseItemContainer;