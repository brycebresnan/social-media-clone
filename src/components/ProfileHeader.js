import React from "react";
import { Card } from "react-bulma-components";
import PropTypes from "prop-types";



function ProfileHeader(props){
  return (
    <Card>
      <img src={props.profilePhoto} style={{width: 100, height: 100, align:"top"}}/>
      <h4>{props.profileName}</h4>
      <a href={props.tweets}>Tweets</a>
      
      <a href={props.followers}>Followers</a>
      
      <a href={props.following}>Following</a>
    </Card>
  );
}

ProfileHeader.propTypes = {
  profilePhoto: PropTypes.string,
  tweets: PropTypes.string,
  followers: PropTypes.string,
  following: PropTypes.string,
  profileName: PropTypes.string
};

export default ProfileHeader;