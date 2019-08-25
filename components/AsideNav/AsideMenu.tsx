import * as React from 'react';
import AsideItem from './AsideItem';
import {Box, Heading} from '../../components/UI/basic';
import {Colors} from '../../lib/Colors';
import {MediaQueries} from '../../lib/Breakpoints';
import styled from 'styled-components';
import {RouterProps, withRouter} from 'next/router';

interface IProps {
  router?: RouterProps;
}

const ResponsiveBox = styled(Box)`
  ${MediaQueries.lessThanSmall} {
    display: block;
  }
`;

const AsideMenu = (props: IProps) => {
  return (
    <ResponsiveBox
      bg={Colors.primary}
      width={"200px"}
      css={{ position: "fixed", height: "100%", top: 0 }}
    >
      <Heading  p={"12px 10px 12px 20px"} mb={2} color={'white'} borderBottom={'1px solid #ffffff47'} css={{height: '52px'}}>
        Styled Theme
      </Heading>

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
        Cards & Panels
      </AsideItem>
      <AsideItem
        href={"/theme/nav"}
        isActive={props.router.pathname === "/theme/nav"}
      >
        Navs & Tabs
      </AsideItem>
      <AsideItem
        href={"/theme/forms"}
        isActive={props.router.pathname === "/theme/forms"}
      >
        Formularios
      </AsideItem>
      <AsideItem
      href={"/theme/forms"}
      isActive={props.router.pathname === "/theme/forms"}
      >
        Tablas
      </AsideItem>
      <AsideItem
      href={"/theme/forms"}
      isActive={props.router.pathname === "/theme/forms"}
      >
        Modals
      </AsideItem>
    </ResponsiveBox>
  );
};

export default withRouter(AsideMenu);
