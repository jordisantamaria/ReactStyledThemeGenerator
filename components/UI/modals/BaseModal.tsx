import Modal from 'styled-react-modal';
import * as React from 'react';
import Icon from '../basic/Icon';
import {space} from 'styled-system';
import {Flex} from '../basic';

const StyledModal = Modal.styled`
  background-color: ${props => props.theme.colors.white};
  ${space}
`;

export interface IModal {
  isOpen?: boolean;
  toggleModal?: () => void;
  m?: number | string | any[];
  mt?: number | string | any[];
  mr?: number | string | any[];
  mb?: number | string | any[];
  ml?: number | string | any[];
  mx?: number | string | any[];
  my?: number | string | any[];
  p?: number | string | any[];
  pt?: number | string | any[];
  pr?: number | string | any[];
  pb?: number | string | any[];
  pl?: number | string | any[];
  px?: number | string | any[];
  py?: number | string | any[];
}

export interface IBaseModal extends IModal {
  children: React.ReactElement<any>;
  titleComponent: React.ReactElement<any>;
  headerStyles?: object;
}

const BaseModal = (props: IBaseModal) => {
  const {
    isOpen,
    toggleModal,
    headerStyles,
    titleComponent,
    children,
    ...otherProps
  } = props;
  return (
    <StyledModal
      isOpen={isOpen}
      onBackgroundClick={toggleModal}
      onEscapeKeydown={toggleModal}
      {...otherProps}
    >
      <Flex
        bg="primary"
        justifyContent={"center"}
        p={3}
        position={"relative"}
        borderRadius={0}
        css={headerStyles}
      >
        {titleComponent}
        <Icon
          className="icon-cancel"
          color={"white"}
          position={"absolute"}
          css={{ right: "20px" }}
          onClick={toggleModal}
        />
      </Flex>
      {children}
    </StyledModal>
  );
};

export default BaseModal;
