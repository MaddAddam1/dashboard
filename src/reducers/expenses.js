

// use reducer for each root property

// expenses reducer and its default state
const expensesReducerDefaultState = [];

export default (state = expensesReducerDefaultState, action) => {

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

        default: 
            return state;
    }
};

