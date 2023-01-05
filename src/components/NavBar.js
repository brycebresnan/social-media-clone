import React from "react";
import { Navbar, Button } from "react-bulma-components";

function NavBar(){
  return(
    <React.Fragment>
      <Navbar>
        <Button.Group>
          <Button>
            Home
          </Button>
          <Button>
            Notifications
          </Button>
          <Button>
            Messages
          </Button>
        </Button.Group>

        <form>  
          <input type="text" name="search" placeholder="Search" />
          <input type="submit" value="Bark" />
        </form>
      </Navbar>
    </React.Fragment>
    
  );
}
export default NavBar;
