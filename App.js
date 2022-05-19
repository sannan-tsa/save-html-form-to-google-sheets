import { IconName } from "react-icons/fa";
import './App.css';
import HeaderBar from './components/Header/headerBar';
import Products from "./components/Products/Products";
import 'reactjs-popup/dist/index.css';
import ReactGA from 'react-ga';
ReactGA.initialize('UA-229171813-1', { debug: true })
ReactGA.pageview(window.location.pathname + window.location.search);

function App() {
  return (
    <div className="App">
      {/* <HeaderBar /> */}
      <Products />
    </div>
  );
}

export default App;
