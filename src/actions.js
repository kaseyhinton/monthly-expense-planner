import store from './store';
import {dbPromise} from './store';
import {guid} from './util';

let actions = state => ({
    async addExpense(state, expense) {
        const db = await dbPromise;
        const tx = db.transaction('expenses', 'readwrite');
        const id = guid();
        await tx
            .objectStore('expenses')
            .put({
                id: id,
                description: expense.description,
                amount: expense.amount,
                dueDate: expense.dueDate,
                isPaid: false
            }, id);
        store.action(actions().findAll)();
    },

    async findAll(state) {
        const db = await dbPromise
        const allExpenses = await db
            .transaction('expenses')
            .objectStore('expenses')
            .getAll();
        store.setState({expenses: allExpenses});
    },

    async remove(state, expense) {
        const db = await dbPromise
        const tx = db.transaction('expenses', 'readwrite');
        await tx
            .objectStore('expenses')
            .delete(expense.id);
        store.action(actions().findAll)();
    },

    async removeAll(state) {
        const db = await dbPromise;
        const tx = db.transaction('expenses', 'readwrite');
        await tx
            .objectStore('expenses')
            .clear();
        store.action(actions().findAll)();
    },
    async findOne(state) {}
});
store.subscribe(state => console.log(state));
export default actions;