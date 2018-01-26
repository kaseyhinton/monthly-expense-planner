import createStore from 'unistore';

import persistStore from 'unissist';
import localStorageAdapter from 'unissist/integrations/localStorageAdapter';

let store = createStore({expenses: [], totalExpenses: 0});
const adapter = localStorageAdapter();
persistStore(store, adapter);

export default store;
