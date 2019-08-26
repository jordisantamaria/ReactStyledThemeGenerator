import * as React from "react";
import { useState } from "react";
import { Box, Flex } from "../basic";
import { InputControlled } from "./InputStyled";
import { SketchPicker } from "react-color";
import styled from "styled-components";
import { connect } from "react-redux";
import { setThemeColor } from "../../../lib/redux/ThemeActions";

interface IProps {
  color: string;
  setThemeColor: (color) => void;
  colorKey: string;
}

const Cover = styled.div`
  position: fixed;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
`;

/*var isHexColor  = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/i; */

const ColorPickerInput = (props: IProps) => {
  const [isVisible, setVisible] = useState(false);
  const [color, setColor] = useState(props.color);

  const showColorPicker = () => {
    setVisible(true);
  };

  const handleChangeComplete = colorPicker => {
    //setVisible(false)
    console.log('change complete picker');
    const themeColor = {};
    themeColor[props.colorKey] = colorPicker.hex;
    props.setThemeColor(themeColor);
    setColor(colorPicker.hex);
  };

  const handleClose = () => {
    setVisible(false);
  };

  const onInputChange = event => {
    setColor(event.target.value);
  };

  return (
    <>
      <Flex onClick={showColorPicker}>
        <Box width={30} bg={color} />
        <InputControlled
          width={100}
          name={"color"}
          value={color}
          onChange={onInputChange}
        />
      </Flex>
      {isVisible && (
        <Box css={{ position: "absolute", zIndex: "2" }}>
          <Cover onClick={handleClose} />
          <SketchPicker color={color} onChangeComplete={handleChangeComplete} />
        </Box>
      )}
    </>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    setThemeColor: color => dispatch(setThemeColor(color))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(ColorPickerInput);
