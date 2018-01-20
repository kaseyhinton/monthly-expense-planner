import {h, Component} from 'preact';
import actions from '../../actions';
import {connect} from 'unistore/preact';
import {route} from 'preact-router';

class Add extends Component {
    state = {
        description: '',
        amount: '',
        dueDate: ''
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
        route('/');
    }

    render(props, {description, amount, dueDate}) {
        return (
            <div class="route">
                <h4>Add Monthly Expense</h4>
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
                    <button class="button" onClick={this.addExpense}>Add Expense</button>
                </div>
            </div>
        )
    }
}
const AddContainer = connect(['expenses'], actions)(Add);
export default AddContainer;