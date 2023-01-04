import React from "react";
import PropTypes from "prop-types";
import { Hero, Media } from "react-bulma-components";

function Tweet(props){
  return (
    <React.Fragment>
      <Hero color="dark">
        <Hero.Body>
          <img src={props.photo} style={{width: 100, height: 100, align:"top"}}/>
          <h4>{props.userName}</h4>
          <p>{props.tweetContent}</p>
          <hr />
        </Hero.Body>
      </Hero>
    </React.Fragment>
  );
}

  Tweet.propTypes = {
    photo: PropTypes.string,
    userName: PropTypes.string,
    tweetContent: PropTypes.string
  };

export default Tweet;