import * as React from "react";
import BaseLayout from "../components/BaseLayout";
import Tabs from "../components/UI/tabs/Tabs";
import Tab from "../components/UI/tabs/Tab";
import TabPanel from "../components/UI/tabs/TabPanel";
import TabList from "../components/UI/tabs/TabList";

interface IProps {
  className?: string;
}

class Login extends React.Component<IProps, any> {
  public render() {
    return (
      <BaseLayout description={"Login"} title={"Login"}>
        <Tabs>
          <TabList>
            <Tab>Iniciar session</Tab>
            <Tab>Registrarse</Tab>
          </TabList>
          <TabPanel>a</TabPanel>
          <TabPanel>a</TabPanel>
        </Tabs>
      </BaseLayout>
    );
  }
}

export { Login };
