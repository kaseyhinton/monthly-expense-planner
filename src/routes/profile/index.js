import {h, Component} from 'preact';
import style from './style';
import actions from '../../actions';
import {connect} from 'unistore/preact';

export default connect('expenses', actions)(({addExpense, findAll}) => (
    <div class={style.profile}>
        <h1>Profile:</h1>
        <p>This is the user profile for a user named .</p>

        <div>Current time: {new Date().toLocaleString()}</div>

        <p>
            <button onClick={() => addExpense('$55.00')}>Add Expense</button>
            {' '}
            <button onClick={findAll}>Find All</button>

            Clicked times.
        </p>
    </div>
));;
