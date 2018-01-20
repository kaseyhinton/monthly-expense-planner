import store from './store';
import {dbPromise} from './store';
import {guid} from './util';

let actions = state => ({
    async addOrUpdateExpense(state, expense) {
        const db = await dbPromise;
        const tx = db.transaction('expenses', 'readwrite');
        let id;
        let e;
        if (expense.id) {
            // patch
            id = expense.id;
            e = {
                id: id,
                description: expense.description,
                amount: expense.amount,
                dueDate: expense.dueDate,
                isPaid: expense.isPaid
            }
        } else {
            // post
            id = guid();
            e = {
                id: id,
                description: expense.description,
                amount: expense.amount,
                dueDate: expense.dueDate,
                isPaid: false
            }
        }
        await tx
            .objectStore('expenses')
            .put(e, id);
        store.action(actions().findAll)();
    },
    async findAll(state) {
        const db = await dbPromise
        const allExpenses = await db
            .transaction('expenses')
            .objectStore('expenses')
            .getAll();
        let total = 0;
        allExpenses.map(expense => {
            total += parseInt(expense.amount, 10);
        });
        store.setState({expenses: allExpenses, totalExpenses: total});
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