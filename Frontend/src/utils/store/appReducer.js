import Events from './events'

const initialState = {
    profile: {},
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case Events.appSetProfile:
            return {
                ...state,
                profile: action.profile,
            }
        default:
            return state
    }
}

export default reducer
