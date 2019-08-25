import * as React from "react";
import AsideItem from "./AsideItem";
import { Box } from "../../components/UI/basic";
import { Colors } from "../../lib/Colors";
import { MediaQueries } from "../../lib/Breakpoints";
import styled from "styled-components";
import { RouterProps, withRouter } from "next/router";

interface IProps {
  router?: RouterProps;
}

const ResponsiveBox = styled(Box)`
  ${MediaQueries.lessThanSmall} {
    display: none;
  }
`;

const AsideMenu = (props: IProps) => {
  return (
    <ResponsiveBox
      bg={Colors.secondaryDark}
      width={"200px"}
      css={{ position: "absolute", height: "calc(100% - 54px)" }}
    >
      <AsideItem href={"/theme"} isActive={props.router.pathname === "/theme"}>
        Basico del tema
      </AsideItem>
      <AsideItem
        href={"/theme/buttons"}
        isActive={props.router.pathname === "/theme/buttons"}
      >
        Botones
      </AsideItem>
      <AsideItem
      href={"/theme/cards"}
      isActive={props.router.pathname === "/theme/cards"}
      >
        Cards
      </AsideItem>
      <AsideItem
      href={"/theme/nav"}
      isActive={props.router.pathname === "/theme/nav"}
      >
        Nav
      </AsideItem>
      <AsideItem
      href={"/theme/forms"}
      isActive={props.router.pathname === "/theme/forms"}
      >
        Formularios
      </AsideItem>
    </ResponsiveBox>
  );
};

export default withRouter(AsideMenu);
