import React from "react";
import PropTypes from "prop-types";
import { Image, Content, Hero, Media } from "react-bulma-components";

function Tweet(props){
  return (
    <React.Fragment>
        <Media>
          <Media.Item>
            <img src={props.photo} style={{width: 100, height: 100, align:"top"}}/>
            <Content>
              <h4>{props.userName}</h4>
              <p>{props.tweetContent}</p>
            </Content>
        </Media.Item>
      </Media>
    </React.Fragment>
  );
}

  Tweet.propTypes = {
    photo: PropTypes.string,
    userName: PropTypes.string,
    tweetContent: PropTypes.string
  };

export default Tweet;