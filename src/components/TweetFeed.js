import React from "react";
import Tweet from "./Tweet";
import PostBar from "./PostBar";

const tweetFeedList = [
{
  photo: "https://64.media.tumblr.com/53aacdc60693e066835048ac29566eda/tumblr_pajkpwK0Ja1w1fdg1o1_1280.jpg",
  userName: "Perry JR.",
  tweetContent: " I AM A PROGRAMMING GOD"
},
{
  photo: "https://media.istockphoto.com/id/1288812193/vector/vector-cute-borzoi-or-whippet-dog-breeds-doodle-illustration-isolated-on-white-background.jpg?b=1&s=170667a&w=0&k=20&c=2V1FJhaXaioU7wRViDx-V7qFtoZuFSMF5Lm7cj5DoRA=",
  userName: "BIG BRYCE",
  tweetContent: "I RESPECT PIZZA"
},
{
  photo: "https://www.purina.co.uk/sites/default/files/styles/square_medium_440x440/public/2022-07/Borzoi.jpg?itok=oq-Zteni",
  userName: "WACKY TACKY WALTER",
  tweetContent: "FEELING A BIT WACKY TODAY"
}
];

function TweetFeed(){
  return (
    <React.Fragment> 
      <PostBar />
      {tweetFeedList.map((tweet,index) =>
        <Tweet 
          photo={tweet.photo}
          userName={tweet.userName}
          tweetContent={tweet.tweetContent}
          key={index}/> 
        )}
      </React.Fragment>
  );
}


export default TweetFeed;