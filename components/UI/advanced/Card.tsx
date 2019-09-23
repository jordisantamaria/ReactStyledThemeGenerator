import * as React from "react";
import { Colors } from "../../../lib/Colors";
import {Box, Image} from '../basic';

interface ICard {
  bg?: string;
  borderColor?: string;
  title: string;
  children: any;
  width?: any;
}

const Card: React.FC<ICard> = (props: ICard) => {
  return (
    <Box width={props.width}>
      <Image src={'sakuratrick.jpg'}/>
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
