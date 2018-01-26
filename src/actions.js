import store from './store';
import {guid} from './util';

let actions = state => ({
    add(state, expense) {
        const e = {
            id: guid(),
            description: expense.description,
            amount: expense.amount,
            dueDate: expense.dueDate,
            isPaid: false
        }
        let exp = state.expenses;
        exp.push(e);
        return {expenses: exp}
    },
    update(state, expense) {
        const e = {
            id: expense.id,
            description: expense.description,
            amount: expense.amount,
            dueDate: expense.dueDate,
            isPaid: expense.isPaid
        }
        let idx = state
            .expenses
            .map(i => i.id)
            .indexOf(e.id);
        state.expenses.splice(idx, 1, e);
        return {expenses: state.expenses}
    },
    findAll(state) {
        let total = 0;
        let i = 0;
        while (i < state.expenses.length) {
            total += parseInt(state.expenses[i].amount, 10);
            i++;
        }
        return {expenses: state.expenses, totalExpenses: total}
    },
    remove(state, expense) {
        let idx = state
            .expenses
            .map(i => i.id)
            .indexOf(expense.id);
        let exp = state.expenses;
        exp.splice(idx, 1);
        return {expenses: exp}
    },
    removeAll(state) {
        return {expenses: []}
    },
    findOne(state) {}
});
store.subscribe(state => console.log(state));
export default actions;