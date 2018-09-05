import { createStore, combineReducers} from 'redux';
import expensesReducer from './../reducers/expenses';
import filtersReducer from '../reducers/filters'
import scriptsReducer from '../reducers/scripts';


const Store = () => {

    // store creation
    // root properties and the reducer that's controlling them 
    const store = createStore(
        combineReducers({
 
            scripts: scriptsReducer
        })
    );

    return store;
   

};

export default Store;