import { GM, GN } from './wish.action'
let initialState = { message: "Hello" }
let wishReducer = (state = initialState, action) => {
    switch (action.type) {
        case GM:
            return { message: "Good Morning" }
        case GN:
            return { message: "Good Night" }
        default:
            return state;
    }
}
export { wishReducer }