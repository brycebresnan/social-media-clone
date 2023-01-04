import React from "react";

function PostBar(){
  return(
    <form>  
      <input type="text" name="name" placeholder="What's Up Dog?" />
      <input type="submit" value="Bark" />
    </form>
  );
}

export default PostBar;