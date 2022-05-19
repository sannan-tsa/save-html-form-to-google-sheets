import React from "react";
import './Products.css';
import { FaCartPlus } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import Popup from 'reactjs-popup';
import 'react-toastify/dist/ReactToastify.css';
import ReactGA from 'react-ga';
import { clear } from "@testing-library/user-event/dist/clear";

ReactGA.initialize('UA-229171813-1', { debug: true })
ReactGA.pageview(window.location.pathname + window.location.search);

function Products() {

  const [show, setShow] = React.useState(false);

  const onClick = () => {
    setShow(!show)
  }

  const anchor = React.useRef();

  const products_data = [
    {
      'Image': 'shirt.jpeg',
      'name': 'T-shirt',
      'price': 400
    },
    {
      'Image': 'jeans.jpg',
      'name': 'Jeans',
      'price': 500
    },
    {
      'Image': 'cap.jpg',
      'name': 'Caps',
      'price': 100
    },
  ];

  var addCart = []

  const [addCarts, setAddCarts] = React.useState([])

  const notify = () => toast.success('Added To Cart', {
    position: "top-center",
    autoClose: 1000,
    hidProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

  const checkOut = () => toast.success('SuccessFull', {
    position: "top-center",
    autoClose: 1000,
    hidProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

  const AddedCart = (name, price) => {
    addCart.push({
      'Name': name,
      'price': price
    })
    console.log(addCart, addCarts)
    setAddCarts(
      [...addCarts, {
        'Name': name,
        'price': price
      }]
    )
    console.log(addCart, addCarts)
  }

  const clear = () => {
    setAddCarts([])
  }

  return (
    <div className="Products">
      <div className="HeaderBar">
        <p className="HeaderTitle">Shopify</p>
        <Popup trigger={<FaCartPlus onClick={onClick} />} position="right center">
          <div>
            <div className="CartShow">
              {addCarts.map((addCart, index) => (
                <div className="CartAlign">
                  <p>{addCart.Name}</p>
                  <p>{addCart.price}</p>
                </div>
              ))}
            </div>
            <button className="ButtonClick" onClick={() => { checkOut(); clear(); }}>Proceed To Checkout</button>
          </div>
        </Popup>
      </div>
      <div className="ProductsDetails">
        <p>Image</p>
        <p>Name</p>
        <p>Price</p>
        <p>Order</p>
      </div>
      {products_data.map((products_data, index) => (
        <div className="ProductsDetailsData">
          <img src={require("./" + products_data.Image)} />
          <p>{products_data.name}</p>
          <p>{products_data.price}</p>
          <FaCartPlus onClick={() => {
            notify();
            AddedCart(products_data.name, products_data.price)
          }
          } />
          <ToastContainer />
        </div>
      ))}
    </div>
  )
}

export default Products;