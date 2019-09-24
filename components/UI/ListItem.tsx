import * as React from "react";
import { Panel } from "./basic";
import { IPanel } from "./advanced/Card/Panel";

interface IProps extends IPanel {
  children: any;
  variant: string;
}
const ListItem = (props: IProps) => {
  // const color = props.pair ? Colors.primaryLight : Colors.primary;
  return (
    <Panel
      alignItems={"center"}
      justifyContent={"space-between"}
      colors={props.variant}
      {...props}
    >
      {props.children}
    </Panel>
  );
};

export default ListItem;
