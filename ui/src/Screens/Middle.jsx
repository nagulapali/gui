import '../Components/App.css';
import Abort from '../Components/Abort';
import React from 'react';
import Buttons from '../Components/Buttons';
import Buttons1 from '../Components/Buttons1';
import Lang from '../Components/Lang';

class Footer extends React.Component
 {
    render() {
      return ( <div className="Middle">
      
      <Abort />
      <Buttons />
      <Buttons1 />
<Lang/>

    
        </div>
      );
       
    }
  }

 export default Footer;