import createStore from 'unistore';

import idb from 'idb';

const dbPromise = idb.open('expenses-store', 1, upgradeDB => {
    upgradeDB.createObjectStore('expenses');
});

let store = createStore({expenses: [], totalExpenses: 0});
export {dbPromise}
export default store;
