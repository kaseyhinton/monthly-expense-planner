import createStore from 'unistore';
import zango from 'zangodb';

let db = new zango.Db('mep', {
    expenses: ['amount', 'dueDate', 'description', 'isPaid']
});

let store = createStore({expenses: []});
export {db}
export default store;
