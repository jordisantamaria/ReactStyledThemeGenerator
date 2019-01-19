import * as React from "react";
import { IBox } from "./Box";
import sys from "system-components";
import { variant } from "styled-system";

interface IButton extends IBox {
  fontWeight?: string;
  border?: string;
  borderColor?: string;
  borderRadius?: string;
  variant?: string;
  onClick?: () => void;
}

const buttonVariants = variant({
  key: "buttons"
});

const css = props => props.css;

const ButtonStyled = sys(
  {
    is: "button",
    fontSize: 1,
    fontWeight: "bold",
    lineHeight: 16 / 14,
    m: 0,
    px: 3,
    py: 2,
    borderRadius: 2,
    border: 0,
    verticalAlign: "middle",
    textAlign: "center",
    textDecoration: "none",
    appearance: "none",
    "&:disabled": {
      opacity: 1 / 4
    },
    variant: "outline"
  },
  () => ({
    "&:focus": {
      outline: "none"
    },
    cursor: "pointer"
  }),
  buttonVariants,
  "color",
  "width",
  css
);

const Button = (props: IButton) => {
  return <ButtonStyled {...props} />;
};

export default Button;
