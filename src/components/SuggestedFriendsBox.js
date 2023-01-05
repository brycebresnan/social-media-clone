import React from "react";
import { Box, Content } from "react-bulma-components";
import FriendSuggestion from "./FriendSuggestion.js";

const friendsList = [
  {
    photo: "https://raw.githubusercontent.com/Noah-Huppert/js-borzoi-test/HEAD/icon.png",
    userName: "Dr. Skate Board",
    addFriendLink: ""
  },
  {
    photo: "https://images.saatchiart.com/saatchi/746930/art/8408405/7472684-BXUYMGDB-7.jpg",
    userName: "Bing Bong",
    addFriendLink: ""
  },
  {
    photo: "https://www.boredpanda.com/blog/wp-content/uploads/2020/05/95300455_670356770193037_3290717106967354931_n-5eceb36b830f4__700.jpg",
    userName: "Introduction to Circuit Analysis",
    addFriendLink: ""
  }
  ];

function SuggestedFriendsBox() {
  return (
    <React.Fragment>
      <Content>
        <h4>Dogs You May Know:</h4>
      </Content>
      <Box>
        {friendsList.map((friend,index) =>
          <FriendSuggestion 
            photo={friend.photo}
            userName={friend.userName}
            addFriendLink={friend.tweetContent}
            key={index}/> 
          )}
      </Box>
    </React.Fragment>
  );
}

export default SuggestedFriendsBox;