import * as React from "react";
import Panel from "../basic/Panel";

export interface ITabActive {
  activeTab?: number;
  setActiveTab?: (index) => void;
}

interface IProps extends ITabActive {
  children: any;
}
const TabList = (props: IProps) => {
  const setActiveTab = index => () => {
    props.setActiveTab(index);
  };
  return (
    <Panel colors={"primaryLight"} borderRadius={"0px"} color={"black2"}>
      {props.children.map((el, index) => {
        return React.cloneElement(el, {
          isActiveTab: props.activeTab === index,
          setActiveTab: setActiveTab(index),
          key: index
        });
      })}
    </Panel>
  );
};

export default TabList;
