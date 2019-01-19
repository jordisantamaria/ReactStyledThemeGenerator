import * as React from "react";
import { Card } from "./basic";
import { ICard } from "./basic/Card";

interface IProps extends ICard {
  children: any;
  variant: string;
}
const ListItem = (props: IProps) => {
  // const color = props.pair ? Colors.primaryLight : Colors.primary;
  return (
    <Card
      alignItems={"center"}
      justifyContent={"space-between"}
      variant={props.variant}
      {...props}
    >
      {props.children}
    </Card>
  );
};

export default ListItem;
