import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
import Modal from "./components/Modal";
import { calculateTotal, getCartItems} from './features/cart/cartSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from "react";

function App() {
  const { cartItems, isLoading } = useSelector((store) => store.cart)
  const { isOpen } = useSelector((store) => store.modal)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(calculateTotal())
  }, [cartItems])

  useEffect( ()=> {
    dispatch(getCartItems())
  }, [])

  if (isLoading) {
    return (
      <div className="loading">
        <h1>Please wait</h1>
      </div>
    )
  }
  return (
  <main>
    { isOpen && <Modal/>}
    <Navbar></Navbar>
    <CartContainer></CartContainer>
  </main>
  );
}
export default App;
