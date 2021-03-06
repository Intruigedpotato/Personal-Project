import React, { Component } from 'react';
//import axios from 'axios';
import { getUserInfo } from './../ducks/users'; // the first ./ says start in the private folder
import { connect } from 'react-redux';
import Nav from './Nav';
import "./../../node_modules/video-react/dist/video-react.css";
import { Player } from 'video-react';


 class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo: {}
        }
    }
//when the /private endpoint is hit the componentDidMount method will fire and make an
//axios.get call to /aut/me then set the component state equal to the req.user's results.data
// componentDidMount() {
//     axios.get('/auth/me').then( res => { 
//         this.setState({
//             userInfo: res.data
//         })
//     })
// }

componentDidMount() {
    this.props.getUserInfo();
}


    
    render() {
        const user = this.props.user;
        
        return (
            <div className="home">

                
                
                    
{/* <div className="xeni">

<img className="xeni-photo"  src="https://image.ibb.co/dh6EVm/13131192_1007295365985536_6660129807187869381_o.jpg" alt="13131192_1007295365985536_6660129807187869381_o" border="0" />

                </div> */}

                
                {/* <video autoplay loop id="video-background" muted plays-inline>
                <source src="https://player.vimeo.com/video/240066990?autoplay=1&loop=1&title=0&byline=0&portrait=0" type="video/mp4" />
              </video> */}



                {/* <div className="title-bar">
                <img className="sass-box-title" src="https://xenimanyme.files.wordpress.com/2017/07/cropped-xeni-logo-8.png?w=1180&h=533" alt=''/>
               <span className="many-me">Many Me</span>
                </div> */}
               
                <div className="flex">

                

                <Nav header="Home" />

               

                </div>
                
                    <div className="recent-posts">
                    <iframe width="1000" height="480" src="https://www.youtube.com/embed/bhIl7zm77_s" frameBorder="0" allowFullScreen></iframe>
                   
                    {/* <a href=""> */}

                    {/* <div>FOLLOW ME!</div> */}


                    <a href="https://www.facebook.com/kendrajeansquire"><img id="photo"  src="https://image.ibb.co/mBLPvm/if_facebook_2308066.png" alt='' /></a>
                    <a href="https://www.instagram.com/k.andendsinendra/"><img id="photo"  src="https://image.ibb.co/g3TBam/if_instagram_2308118.png" alt='' /></a>                    
                    <a href="https://twitter.com/KendraJean2"><img id="photo"  src="https://image.ibb.co/idbKT6/if_twitter_2308045.png" alt='' /></a>
                    <a href="https://www.youtube.com/user/pianoplayer7771"><img id="photo"  src="https://image.ibb.co/kMB8MR/if_youtube2_2308040.png" alt='' /></a>
                   
                    </div>

                </div>
             
        )
    }
} 

function mapStateToProps(state) {
    // console.log('state from Home', state);
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, { getUserInfo })(Home);