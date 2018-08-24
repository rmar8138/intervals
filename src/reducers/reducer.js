const defaultState = {
    sets: 0,
    work: 0,
    rest: 0,
    isWork: false,
    isRest: false
};

// SET_SETS
// SET_WORK
// SET_REST
// SET_IS_WORK
// SET_IS_REST

const timerReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'SET_SETS':
            return {
                ...state,
                sets: action.sets,
                work: action.work,
                rest: action.rest
            };
        case 'SET_IS_WORK':
            return {
                ...state,
                isWork: true,
                isRest: false
            };
        case 'SET_IS_REST': 
            return {
                ...state,
                isWork: false,
                isRest: true
            }
        default: 
            return state;
    }
};

export default timerReducer;