import React from 'react';
import '../Components/App.css';
import About from '../Components/About';
import Settings  from '../Components/Settings';

import Privacy  from '../Components/Privacy';
import Terms from '../Components/Terms';


class Footer extends React.Component {
    render() {
      return ( <div className="Footer">
      
      <About />
    

    
    <Settings />
    <Privacy />
    <Terms/>
        </div>
      );
       
    }
  }

 export default Footer;