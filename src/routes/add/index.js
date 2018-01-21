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
            .addOrUpdateExpense({description: this.state.description, amount: this.state.amount, dueDate: this.state.dueDate})
        this.setState({description: '', amount: '', dueDate: ''});
        route('/');
    }

    render(props, {description, amount, dueDate}) {
        return (
            <div class="route">
                <h4>Add Monthly Expense</h4>
                <div class="mui-textfield mui-textfield--float-label">
                    <input
                        autofocus
                        ref={input => input && input.focus()}
                        type="text"
                        onChange={this.onDescriptionChanged}
                        value={description}/>
                    <label>Description</label>
                </div>
                <div class="mui-textfield mui-textfield--float-label">
                    <input type="text" onChange={this.onAmountChanged} value={amount}/>
                    <label>Amount</label>
                </div>
                <div class="mui-textfield mui-textfield--float-label">
                    <input type="text" onChange={this.onDueDateChanged} value={dueDate}/>
                    <label>Due</label>
                </div>

                <div>
                    <button
                        style="float: right;"
                        class="mui-btn mui-btn--primary"
                        onClick={this.addExpense}>Add Expense</button>
                </div>
            </div>
        )
    }
}
const AddContainer = connect(['expenses'], actions)(Add);
export default AddContainer;