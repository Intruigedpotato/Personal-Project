import React, {Component} from 'react';
import Nav from './Nav';


class Gallery extends Component {


    render(){
        return(
            <div>
            
           
           <div className="flex">
            <img className="sass-box" src="https://xenimanyme.files.wordpress.com/2017/07/cropped-xeni-logo-8.png?w=1180&h=533" alt=''/>
            </div>
            <div className="flex">
            <Nav />
            </div>
            
            <div className="gallery">

            </div>

            </div>
        )
    }
} export default Gallery