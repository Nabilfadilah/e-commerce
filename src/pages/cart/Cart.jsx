import React from "react";
import "./Cart.css";
import {useDispatch, useSelector} from "react-redux";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import {BiShoppingBag} from "react-icons/bi";
import {IoClose} from "react-icons/io5";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFormCart,
} from "../../redux/cartSlice";

const Cart = () => {
  // memilih cart item product
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  // menghitung total harga dari product
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  // Format harga ke Rupiah
  const formatRupiah = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  });

  return (
    <div>
      <Navbar />

      <div className="cart-container">
        <div className="cart-title-container">
          <BiShoppingBag className="cart-icon" />
          <h2 className="cart-title">Shopping Cart</h2>
        </div>

        {cartItems.length === 0 ? (
          <p>Your Cart is empty</p>
        ) : (
          <>
            <div className="cart-content">
              <div className="cart-items-section">
                <div className="cart-header">
                  <div className="header-item">Product</div>
                  <div className="header-item">Price</div>
                  <div className="header-item">Quantity</div>
                  <div className="header-item">Total</div>
                </div>

                {cartItems.map((item, index) => (
                  <div key={index} className="cart-item">
                    <div className="cart-product">
                      <img
                        src={item.img}
                        alt=""
                        className="cart-product-image"
                      />
                      <p>{item.title}</p>
                    </div>
                    <div className="cart-price">
                      {formatRupiah.format(item.price)}
                    </div>
                    <div className="cart-quantity">
                      <button onClick={() => dispatch(decreaseQuantity(item))}>
                        {" "}
                        -{" "}
                      </button>

                      <span>{item.quantity}</span>
                      <button onClick={() => dispatch(increaseQuantity(item))}>
                        +
                      </button>
                    </div>
                    <div className="cart-total">
                      {formatRupiah.format(item.price * item.quantity)}
                    </div>
                    <button
                      className="remove-btn"
                      onClick={() => dispatch(removeFormCart(item))}
                    >
                      <IoClose size={20} />
                    </button>
                  </div>
                ))}
              </div>

              <div className="cart-summary">
                <h3 className="summary-title">Order Summary</h3>
                <div className="summary-details">
                  <div className="summary-item">
                    <span>Price:</span>
                    <span>{formatRupiah.format(totalPrice)}</span>
                    {/* <span>${totalPrice.toFixed(2)}</span> */}
                  </div>
                  <div className="summary-item">
                    <span>Delivery:</span>
                    <span>Free</span>
                  </div>
                  <div className="summary-item">
                    <span>Total:</span>
                    <span>{formatRupiah.format(totalPrice)}</span>
                    {/* <span>${totalPrice.toFixed(2)}</span> */}
                  </div>
                </div>
                <button className="checkout-btn">Lanjutkan Pembayaran</button>
              </div>
            </div>
          </>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
