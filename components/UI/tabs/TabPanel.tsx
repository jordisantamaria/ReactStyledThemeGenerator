import * as React from "react";
import Flex from "../basic/Flex";

interface Iprops {
  isActiveTab?: boolean;
  children: any;
}
const TabPanel = (props: Iprops) => {
  return props.isActiveTab ? <Flex>{props.children}</Flex> : null;
};

export default TabPanel;
