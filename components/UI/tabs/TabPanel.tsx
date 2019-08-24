import * as React from "react";
import Flex from "../basic/Flex";

interface Iprops {
  isActiveTab?: boolean;
  children: any;
}
const TabPanel = (props: Iprops) => {
  const { isActiveTab, children, ...otherProps } = props;
  return isActiveTab ? <Flex {...otherProps}>{children}</Flex> : null;
};

export default TabPanel;
