import {createStore, combineReducers} from 'redux';
import uuid from 'uuid';


// add expense
const addExpense = ({description = '', note = '', amount = 0, createdAt = 0} = {}) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount, 
        createdAt
    }
})

// edit expense
const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id, 
    updates
});
// remove expense
const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id 
});
// sort by Date
const sortByDate = () => ({
    type: 'SORT_BY_DATE'
})
// sort by amount
const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT' 
});
// set start date
const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
});
// set end date
const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
});
// set text filter
const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});

// use reducer for each root property

// expenses reducer and its default state
const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {

    switch (action.type) {

        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ];

        case 'REMOVE_EXPENSE':
            return state.filter(({ id }) => id !== action.id);
        
        case 'EDIT_EXPENSE':

            return state.map((expense) => {
                if (expense.id === action.id){
                    return {
                        ...expense,
                        ...action.updates   // adds all the object props then overrides any passed in with updates 
                    };
                } else {
                    return expense;
                }
            });

        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            }

        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            };
        
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            }
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            }

        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            }

        default: 
            return state;
    }
};

// filters reducer and its default state
const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {

    switch (action.type) {

        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            }

        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            };
        
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            }
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            }

        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            }

        default: 
            return state;
    }
};
// get visible expenses
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if (sortBy === 'date'){
            return a.createdAt < b.createdAt ? 1 : -1;              // sort in place rules
        } else if (sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1;
        }
        
    });
};

// store creation
// root properties and the reducer that's controlling them 
const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});

const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100, createdAt: 1000}));
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 200, createdAt: -1000 }));


// store.dispatch(removeExpesnse({id: expenseOne.expense.id}));

// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }));

// store.dispatch(setTextFIlter('rent'));

// store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

store.dispatch(setStartDate(125));
store.dispatch(setEndDate(1250));

// state
const demoState = {

    expenses: [{
        id: 'asdfasd',
        description: 'January rent',
        note: 'This was the final payment for that address',
        amount: 54500,
        createdAt: 0,
    }],

    filters: {
        text: 'rent',
        sortBy: 'amount', // or date
        startDate: undefined,
        endDate: undefined
    }
};

// spread object like array, can override existing properties
const user = {
    name: 'Jen',
    age: 25
}

console.log({
    ...user,
    location: 'OKC'
});