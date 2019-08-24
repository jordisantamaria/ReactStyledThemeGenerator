import React, { useState } from "react";
import { Box } from "../basic";

interface IToggleContent {
  container: (open) => any;
  children: (open) => any;
}

const ToggleContent = (props: IToggleContent) => {
  const [open, setOpen] = useState(false);

  const toggleOnClick = () => {
    setOpen(!open);
  };

  return (
    <Box>
      <Box onClick={toggleOnClick}>{props.container(open)}</Box>
      {open && props.children(open)}
    </Box>
  );
};

export default ToggleContent;
