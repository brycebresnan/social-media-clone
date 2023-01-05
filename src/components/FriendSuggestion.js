import React from "react";
import PropTypes from "prop-types";
import { Image, Content, Button, Media } from "react-bulma-components";



function FriendSuggestion(props){
  return (
    <React.Fragment>
    <Media>
      <Media.Item>
        <img src={props.photo} style={{width: 100, height: 100, align:"top"}}/>
        <Content>
          <h4>{props.userName}</h4>
          <Button>
            Add Friend
            {props.addFriendLink}
          </Button>
        </Content>
    </Media.Item>
  </Media>
</React.Fragment>
  );
}

FriendSuggestion.propTypes = {
  photo: PropTypes.string,
  userName: PropTypes.string,
  addFriendLink: PropTypes.string
};

export default FriendSuggestion;

