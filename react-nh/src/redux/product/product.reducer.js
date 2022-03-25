import { INCR, DECR } from './product.action'
let initialState = {
    name: "APPLE iPhone 12 (White, 128 GB)",
    price: 42000,
    image: "https://rukminim2.flixcart.com/image/224/224/kg8avm80/mobile/j/f/9/apple-iphone-12-dummyapplefsn-original-imafwg8dhe5aeyhk.jpeg?q=90",
    qty: 1
}
let productReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCR:
            return { ...state, qty: state.qty + 1 }
        case DECR:
            return { ...state, qty: state.qty - 1 }
        default:
            return state;
    }
}
export { productReducer }