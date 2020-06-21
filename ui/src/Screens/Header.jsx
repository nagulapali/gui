import React from 'react';
import Images from '../Components/Images';
import Gmail from '../Components/Gmail';
import Signup from '../Components/Signup';
import Avatar from '../Components/Avatar';
import '../Components/App.css';
class Header extends React.Component {
    render() {
        return (<div className="Head">
            <Signup />
            <Gmail />
            <Images />
            <Avatar/>
        </div>
        );
    }
}
      export default Header;