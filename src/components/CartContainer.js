import { useSelector, useDispatch } from "react-redux"
import CartItem from "./CartItem"
import { openModal } from "../features/cart/modalSlice"

const CartContainer = () => {

    const dispatch = useDispatch()
    const { cartItems, total, amount } = useSelector((store) => store.cart)

    if (amount < 1) {
        return <section className="cart">
            <header>
                <h2>No Items</h2>
                <h4 className="empty-cart">in your cart</h4>
            </header>
        </section>
    }

    return (
        <section className="cart">
            <header>
                <h2>Your Cart</h2>
            </header>
            <div>
                {cartItems.map( (item) => {
                    return <CartItem key={item.id} {...item} />
                })}
            </div>
            <footer>
                <hr />
                <div className="cart-total">
                <h4>total <span>${total.toFixed(2)}</span></h4>
                </div>
                <button className="btn clear-btn" onClick={()=> { dispatch(openModal()) }}>Clear Cart</button>
            </footer>
        </section>
    )
}

export default CartContainer