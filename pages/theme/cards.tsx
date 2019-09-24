import * as React from 'react';
import ThemeLayout from '../../modules/theme/ThemeLayout';
import {Box, Flex, Heading} from '../../components/UI/basic';
import {IState} from '../../lib/redux/rootReducer';
import {withRouter} from 'next/router';
import {connect} from 'react-redux';
import {ITheme} from '../../lib/redux/ThemeActions';
import Card from '../../components/UI/advanced/Card/Card';
import PanelHeader from '../../components/UI/advanced/Card/PanelHeader';
import Image from '../../components/UI/advanced/Image';
import CardBody from '../../components/UI/advanced/Card/CardBody';
import CardHeader from '../../components/UI/advanced/Card/CardHeader';
import CardFooter from '../../components/UI/advanced/Card/CardFooter';
import CardImage from '../../components/UI/advanced/Card/CardImage';
import TextStyled from '../../components/UI/basic/Text';

interface IProps {
  theme: ITheme;
}

const Cards = (props: IProps) => {
  return (
  <ThemeLayout>
    <Heading>Cards</Heading>
    <Flex flexWrap={"wrap"} my={3}>
      <Card width={200}>
        <CardImage src={'/static/sakuratrick.jpg'}/>
        <CardBody>
          <Box>Panel body</Box>
        </CardBody>
      </Card>
    </Flex>

    <Heading>Panels</Heading>
    <Flex flexWrap={"wrap"} my={3}>
      <Card width={200}>
        <CardHeader>Panel Header</CardHeader>
        <CardBody>
          <TextStyled>Panel body</TextStyled>
        </CardBody>
        <CardFooter>
          Panel Footer
        </CardFooter>
      </Card>
    </Flex>
  </ThemeLayout>
  );
};

const mapStateToProps = (state: IState, ownProps) => {
  return {
    ...ownProps,
    theme: state.theme
  };
};

export default connect(mapStateToProps)(withRouter(Cards));
