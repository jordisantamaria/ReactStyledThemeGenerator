import * as React from "react";
import { Colors } from "../../../lib/Colors";
import { Box, Heading } from "../basic";

interface ICard {
  bg?: string;
  borderColor?: string;
  title: string;
  children: any;
}

const Card: React.FC<ICard> = (props: ICard) => {
  return (
    <Box bg={props.bg}>
      <Heading
        fontSize={"18px"}
        py={2}
        px={3}
        color={"white"}
        border={`1px solid ${props.borderColor}`}
      >
        {props.title}
      </Heading>
      <Box p={3} border={`1px solid ${props.borderColor}`} borderTop={"none"}>
        {props.children}
      </Box>
    </Box>
  );
};

Card.defaultProps = {
  bg: Colors.primary,
  borderColor: Colors.primaryDark
};

export default Card;
