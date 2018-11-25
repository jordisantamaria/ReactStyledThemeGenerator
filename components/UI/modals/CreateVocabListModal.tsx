import Modal from 'styled-react-modal'
import * as React from 'react';
import Flex from "../basic/Flex";
import Text from "../basic/Text";

const StyledModal = Modal.styled`
  width: 20rem;
  height: 20rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.colors.white};
`


interface Iprops {
  isOpen?: boolean;
  toggleModal?: () => void;
}
const CreateVocabListModal = (props: Iprops) => {
  console.log('props = ', props);
  return (
  <StyledModal
    isOpen={props.isOpen}
    onBackgroundClick={props.toggleModal}
    onEscapeKeydown={props.toggleModal}>
    <Flex>
      <Text>Nueva lista de vocab</Text>
      <button onClick={props.toggleModal}>Cerrar</button>
    </Flex>

  </StyledModal>
  );
}

export default CreateVocabListModal;