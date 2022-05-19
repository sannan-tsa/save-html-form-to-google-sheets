import React from "react";
import './headerBar.css';
import { FaCartPlus } from "react-icons/fa";

import Popup from 'reactjs-popup';
import ReactGA from 'react-ga';
ReactGA.initialize('UA-229171813-1', { debug: true })
ReactGA.pageview(window.location.pathname + window.location.search);
function HeaderBar() {

  const [show, setShow] = React.useState(false);

  const onClick = () => {
    setShow(!show)
  }
  const anchor = React.useRef();

  return (
    <div className="HeaderBar">
      <p className="HeaderTitle">Shopify</p>
    </div>
  )
}

export default HeaderBar;