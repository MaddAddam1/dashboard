import { createStore, combineReducers} from 'redux';
import expensesReducer from './../reducers/expenses';
import filtersReducer from '../reducers/filters'

export default () => {

    // store creation
    // root properties and the reducer that's controlling them 
    const store = createStore(
        combineReducers({
            expenses: expensesReducer,
            filters: filtersReducer
        })
    );

    return store;

};

