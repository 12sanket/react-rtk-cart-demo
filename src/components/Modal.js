import { useDispatch } from 'react-redux'
import {  closeModal } from '../features/cart/modalSlice'
import {  clearCart } from '../features/cart/cartSlice'

const Modal = () => {
    const dispatch = useDispatch()
    return (
        <aside className="modal-container">
            <div className="modal">
                <h4>Do you want to empty the cart ?</h4>
                <div className="btn-container">
                    <button type="button" className="btn confirm-btn" onClick={() => {
                        dispatch(clearCart())
                        dispatch(closeModal())
                    }}>
                        Yes
                    </button>
                    <button type="button" className="btn clear-btn" onClick={() => {
                        dispatch(closeModal())
                    }}>
                        No
                    </button>
                </div>
            </div>
        </aside>
    )
}

export default Modal