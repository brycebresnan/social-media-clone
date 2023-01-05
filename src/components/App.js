import React from "react";
import TweetFeed from "./TweetFeed";
import NavBar from "./NavBar";
import ProfileHeader from "./ProfileHeader";
import Bio from "./Bio";
import { Columns, Container, Navbar} from 'react-bulma-components';
import SuggestedFriendsBox from "./SuggestedFriendsBox.js";

function App (){
  return (
    <React.Fragment>
      <Container>
        <NavBar />
      
        <Columns>

          <Columns.Column>
            <ProfileHeader 
              profilePhoto="https://www.purina.co.uk/sites/default/files/styles/square_medium_440x440/public/2022-07/Borzoi.jpg?itok=oq-Zteni"
              tweets="https://twitter.com/myspacetom"
              followers="https://twitter.com/myspacetom/followers"
              following="https://twitter.com/myspacetom/following"
              profileName="WACKY TACKY WALTER" />
              
            <Bio 
              userBio="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque risus mi, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum felis venenatis efficitur. Aenean ac eleifend lacus, in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem."/>
          </Columns.Column>

          <Columns.Column>
            <TweetFeed />
          </Columns.Column>    

          <Columns.Column>
            <SuggestedFriendsBox/>

          </Columns.Column>

        </Columns>
      </Container>
    </React.Fragment>
  )
}

export default App;