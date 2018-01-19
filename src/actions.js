import store from './store';
import {db} from './store';
let expenses = db.collection('expenses');

let actions = state => ({
    async addExpense(state, expense) {
        expense.isPaid = false;
        console.log(expense);
        await expenses.insert(expense);
    },

    async updateExpense(state, expense) {
        await expenses.update({
            _id: expense.id
        }, {isPaid: expense.isPaid});
        store.action(actions().findAll)();
    },

    async findAll(state) {
        let all = await(expenses.find({})).toArray();
        return {expenses: all};
    },

    async remove(state, expense) {
        await expenses.remove({_id: expense.id});
        store.setState({}, false, store.action(actions().findAll)());
    },

    async removeAll(state) {
        await expenses.remove({});
    },

    async findOne(state) {}
});
store.subscribe(state => console.log(state));
export default actions;