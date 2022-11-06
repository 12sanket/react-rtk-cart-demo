import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
import Modal from "./components/Modal";
import { calculateTotal} from './features/cart/cartSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from "react";

function App() {
  const { cartItems } = useSelector((store) => store.cart)
  const { isOpen } = useSelector((store) => store.modal)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(calculateTotal())
  }, [cartItems])
  return (
  <main>
    { isOpen && <Modal/>}
    <Navbar></Navbar>
    <CartContainer></CartContainer>
  </main>
  );
}
export default App;
