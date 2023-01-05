import React from "react";
import { Box, Content } from "react-bulma-components";
import PropTypes from "prop-types";

function Bio(props){
  return(
    <Box>
      <Content>
        <p>{props.userBio}</p>
      </Content>
    </Box>
  );
}

Bio.propTypes = {
  userBio: PropTypes.string
};

export default Bio;