import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import Logo from './Logo';
import Middle from './Screens/Middle';
import Footer from './Screens/Footer';
import Footer1 from './Screens/Footer1';
import Header from './Screens/Header';
//import Logo  from './Logo';





import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Middle />
    <Footer1 />
    <Footer />
    </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
