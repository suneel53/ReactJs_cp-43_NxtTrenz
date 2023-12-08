// Write your code here
import CartContext from '../../context/CartContext'
import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      let tot = 0
      cartList.forEach(each => {
        tot += each.price * each.quantity
      })
      return (
        <>
          <div className="cartsummary-cont">
            <h1 className="order-totalvalue">
              <span className="order-total-label">Order Total:</span> Rs {tot}{' '}
              /-
            </h1>
            <p className="total-items">{cartList.length} Items in cart</p>
            <button type="button" className="checkout-btn d-sm-none">
              checkout
            </button>
          </div>
          <button type="button" className="checkout-btn d-lg-none">
            checkout
          </button>
        </>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
