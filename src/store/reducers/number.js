export function numberReducer(state, action) {
    switch(action.type) {
        case 'numberAdd2':
            return { ...state, number: state.number + 2}
        case 'numberMult7':
            return { ...state, number: state.number * 7}
        case 'numberDiv25':
            return { ...state, number: parseInt(state.number / 25)}
        case 'numberAddn':
            return { ...state, number: state.number + action.payload}
        default:
            return state
    }
}