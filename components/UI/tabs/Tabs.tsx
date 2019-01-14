import * as React from 'react';
import { default as Box, IBox } from "../basic/Box";

interface IState {
  activeTab: number;
}
interface Iprops extends IBox{

}
class Tabs extends React.Component<Iprops, IState> {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0,
    }
  }

  public setActiveTab = (index) => {
    this.setState(() => ({
      activeTab: index,
    }));
  }

  public render() {
    return (
      <Box {...this.props}>
        {this.props.children.map( (el, index) => {
          if (index === 0) {
            return React.cloneElement(el, {
              activeTab: this.state.activeTab,
              setActiveTab: this.setActiveTab,
              key: index
            })
          } else {
            return React.cloneElement(el, {
              isActiveTab: this.state.activeTab === index -1,
              key: index
            })
          }
        })}
      </Box>
    );
  }
}

export default Tabs;