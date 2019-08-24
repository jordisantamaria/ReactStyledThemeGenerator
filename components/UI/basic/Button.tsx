import * as React from "react";
import { useRef } from "react";
import { IBox } from "./Box";
import {
  buttonStyle,
  color,
  fontFamily,
  fontSize,
  fontWeight,
  space,
  textAlign,
  width
} from "styled-system";
import styled from "styled-components";
import { useWaves, WavesContainer } from "../advanced/Waves";

interface IButton extends IBox {
  fontWeight?: string;
  variant?: string;
  onClick?: (event?: any, ...args: any) => void;
  onMouseDown?: (event?: any, ...args: any) => void;
  type?: string;
  disabled?: boolean;
}

const css = props => props.css;

const ButtonStyled = styled("button")(
  {
    verticalAlign: "middle",
    textAlign: "center",
    textDecoration: "none",
    appearance: "none",
    cursor: "pointer",
    border: "none",
    display: "block",
    position: "relative",
    "&:disabled": {
      opacity: 1 / 4
    },
    "&:focus": {
      outline: "none"
    },

    overflow: "hidden",
    userSelect: "none",
    webkitTapHighlightColor: "transparent",
    boxShadow: "0 2px 5px 0 rgba(0,0,0,.16), 0 2px 10px 0 rgba(0,0,0,.12)",
    transition:
      "color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out",
    ":hover:enabled": {
      boxShadow: "0 5px 11px 0 rgba(0,0,0,.18), 0 4px 15px 0 rgba(0,0,0,.15)"
    },
    ":disabled": {
      cursor: "auto"
    }
  },
  space,
  width,
  fontSize,
  color,
  fontWeight,
  textAlign,
  fontFamily,
  buttonStyle,
  css
);

const Button: React.FC<IButton> = (props: IButton) => {
  const $button = useRef(null);
  const [animation, setAnimation] = useWaves();

  const handleMouseDown = event => {
    setAnimation($button, event);
  };

  return (
    <ButtonStyled {...props} ref={$button} onMouseDown={handleMouseDown}>
      {props.children}
      {animation.map(el => {
        return <WavesContainer left={el.left} top={el.top} scale={el.scale} />;
      })}
    </ButtonStyled>
  );
};

Button.defaultProps = {
  fontSize: 1,
  fontWeight: "bold",
  m: 0,
  px: 3,
  py: 2,
  borderRadius: 2,
  variant: "outline"
};

export default Button;
