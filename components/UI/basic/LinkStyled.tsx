import * as React from "react";
import styled from "styled-components";
import {
  space,
  width,
  fontSize,
  color,
  fontWeight,
  textAlign,
  lineHeight,
  fontFamily,
  textStyle
} from "styled-system";
import Link, { UrlLike } from "next/link";

import { IText } from "./Text";

export interface ILinkStyled extends IText {
  prefetch?: boolean;
  shallow?: boolean;
  scroll?: boolean;
  replace?: boolean;
  onError?(error: any): void;
  href?: string | UrlLike;
  as?: string;
  passHref?: boolean;
  className?: string;
}

const css = props => props.css;

const LinkStyled2 = styled.a(
  {
    display: "block",
    textDecoration: "none",
    color: "inherit",
    cursor: "pointer"
  },
  space,
  width,
  fontSize,
  color,
  fontWeight,
  textAlign,
  lineHeight,
  fontFamily,
  textStyle,
  css
);

const LinkStyled = (props: ILinkStyled) => {
  const {
    prefetch,
    shallow,
    scroll,
    replace,
    onError,
    href,
    as,
    passHref,
    ...otherProps
  } = props;
  return (
    <Link
      prefetch={prefetch}
      shallow={shallow}
      scroll={scroll}
      replace={replace}
      onError={onError}
      href={href}
      as={as}
      passHref={passHref}
    >
      <LinkStyled2 href={href} {...otherProps} />
    </Link>
  );
};

export default LinkStyled;
