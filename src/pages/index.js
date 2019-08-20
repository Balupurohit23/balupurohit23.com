import React from 'react'
import { Helmet } from 'react-helmet'
import DefaultButton from '../components/button'
import { SocialIcon } from 'react-social-icons'

import '../style/index.css'

const Index = props => {
  return (
    <div>
    <Helmet title={"BaluPurohit23"} />
      <div className="bContainer">
        <div className="bCard">
          {/* Main Image */}
          <div className="img">
            <DefaultButton to="/">
              <img
                className="img-circle"
                src="https://avatars0.githubusercontent.com/u/16207266?s=400&u=3f550bd2a5049e106e319d3775a4d3bb811ddd17&v=4"
                alt="MainImge"
              />
            </DefaultButton>
          </div>
          {/* My Name */}
          <div className="name">Balu Purohit</div>
          {/* Title */}
          <div className="title">Keep Moving Forward</div>
          {/* Social Links Buttons */}
          <span>
          <SocialIcon url="mailto:balupurohit23@gmail.com" />&nbsp;
          <SocialIcon url="http://github.com/balupurohit23" />&nbsp;
          <SocialIcon url="https://in.linkedin.com/in/balupurohit23" />&nbsp;
          <SocialIcon url="https://instagram.com/balupurohit23" />&nbsp;
          <SocialIcon url="https://www.facebook.com/balu.purohit.359" />&nbsp;
          <SocialIcon url="https://www.youtube.com/channel/UCZ__kcjMnskJqO6Dw0drzhA/playlists" />&nbsp;
          <SocialIcon url="https://open.spotify.com/user/erwwxaq1mjryf8e52uspic97w" />&nbsp;
          <SocialIcon url="https://medium.com/@balupurohit23" />&nbsp;
          <SocialIcon url="https://twitter.com/balupurohit23" />&nbsp;
          </span>
    
          <br></br>
    			<Link to="/dummy-post">Go to my first dummy blog post</Link>
    
    </div>
          </div>
    </div>

  )
}

export default Index
