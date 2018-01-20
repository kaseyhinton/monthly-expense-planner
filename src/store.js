import createStore from 'unistore';

import idb from 'idb';

const dbPromise = idb.open('expenses-store', 1, upgradeDB => {
    upgradeDB.createObjectStore('expenses');
});

let store = createStore({expenses: []});
export {dbPromise}
export default store;
