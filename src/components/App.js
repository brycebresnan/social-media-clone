import React from "react";
import TweetFeed from "./TweetFeed";
import { Container, Media } from 'react-bulma-components';

function App (){
  return (
    <React.Fragment>
      <Container>
        
        <TweetFeed />
      </Container>
    </React.Fragment>
  )
}

export default App;