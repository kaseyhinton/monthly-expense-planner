import store from './store';
import {db} from './store';
let expenses = db.collection('expenses');

let actions = state => ({
    async addExpense(state, expense) {
        expense.isPaid = false;
        console.log(expense);
        await expenses.insert(expense);
        let all = await(expenses.find({})).toArray();
        return {'expenses': all};
    },

    async updateExpense(state, expense) {
        await expenses.update({
            _id: expense.id
        }, {isPaid: expense.isPaid});
        let all = await(expenses.find({})).toArray();
        return {'expenses': all};
    },

    async findAll(state) {
        let all = await(expenses.find({})).toArray();
        console.log(all);
        return {expenses: all};
    },

    async remove(state, expense) {
        await expenses.remove({_id: expense.id});
        let all = await(expenses.find({})).toArray();
        return {expenses: all};
    },

    async removeAll(state) {
        await expenses.remove({});
        return {expenses: []}
    },

    async findOne(state) {}
});

export default actions;