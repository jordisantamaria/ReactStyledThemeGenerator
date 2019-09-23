import * as React from 'react';
import {Box, Flex, Heading} from '../components/UI/basic';
import AsideMenu from '../components/AsideNav/AsideMenu';
import {connect} from 'react-redux';
import {ITheme} from '../lib/redux/ThemeActions';
import {IState} from '../lib/redux/rootReducer';
import {gql} from 'apollo-boost';
import {useQuery} from '@apollo/react-hooks';
import ThemeItem from '../modules/myTheme/ThemeItem';
import NewTheme from '../modules/myTheme/NewTheme';

interface IIndex {
  theme: ITheme;
}

export const GET_THEMES_QUERY = gql`
  {
    getAllThemes {
      id
      name
      fontSizes
      space
      breakpoints
    }
  }
`;

const Theme = (props: IIndex) => {

  const {loading, error, data} = useQuery(GET_THEMES_QUERY);
  console.log('data = ', data);
  return (
  <>
    <AsideMenu />
    <Box
    pt={3}
    width={[1, "calc(100% - 200px)"]}
    ml={[0, "200px"]}
    px={[3, 4]}
    >
      <Heading as={"h5"} textAlign={"center"} mt={2} mb={4}>
        Mis temas
      </Heading>
      <Flex>
        {data.getAllThemes ? data.getAllThemes.map((themeItem) => {
          //completamos lo que no llega del servidor con el theme x defecto de redux
          const fullTheme: ITheme = {
          ...props.theme,
          ...themeItem
          }
          return <ThemeItem theme={fullTheme}/>

        })
        :
          <ThemeItem theme={props.theme}/>
        }
        <NewTheme/>
      </Flex>
    </Box>
  </>
  );
};

const mapStateToProps = (state: IState, ownProps) => {
  return {
    ...ownProps,
    theme: state.theme
  };
};

export default connect(
mapStateToProps
)(Theme);
