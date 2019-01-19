import Modal from "styled-react-modal";
import * as React from "react";
import Tabs from "../../../../components/UI/tabs/Tabs";
import TabList from "../../../../components/UI/tabs/TabList";
import Tab from "../../../../components/UI/tabs/Tab";
import TabPanel from "../../../../components/UI/tabs/TabPanel";
import Box from "../../../../components/UI/basic/Box";
import Card from "../../../../components/UI/basic/Card";
import Text from "../../../../components/UI/basic/Text";
import Icon from "../../../../components/UI/basic/Icon";
import CreateTabContent from "./CreateTabContent";

const StyledModal = Modal.styled`
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.colors.white};
`;

interface Iprops {
  isOpen?: boolean;
  toggleModal?: () => void;
}
const CreateVocabListModal = (props: Iprops) => {
  console.log("props = ", props);
  return (
    <StyledModal
      isOpen={props.isOpen}
      onBackgroundClick={props.toggleModal}
      onEscapeKeydown={props.toggleModal}
    >
      <Box>
        <Card
          variant="primary"
          justifyContent={"center"}
          p={3}
          position={"relative"}
        >
          <Text>Nueva lista de vocab</Text>
          <Icon
            className="icon-cancel"
            color={"white"}
            position={"absolute"}
            css={{ right: "20px" }}
            onClick={props.toggleModal}
          />
        </Card>
        <Tabs>
          <TabList>
            <Tab>Crear</Tab>
            <Tab>Importar</Tab>
          </TabList>
          <TabPanel>
            <CreateTabContent closeModal={props.toggleModal} />
          </TabPanel>
          <TabPanel>
            <div>List name</div>
            <div>Contenido a importar</div>
          </TabPanel>
        </Tabs>
      </Box>
    </StyledModal>
  );
};

export default CreateVocabListModal;
