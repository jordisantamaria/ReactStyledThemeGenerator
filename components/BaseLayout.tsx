import * as React from 'react';
import Head, {IHeadProps} from "./Head";
import Nav from './UI/Nav';
import Container from './UI/Container';

interface ILayoutProps extends IHeadProps{
  children?: any
}

const BaseLayout = (props: ILayoutProps) =>
<React.Fragment>
  <Head title={props.title} description={props.description}/>
  <Nav/>
  <Container>
    {props.children}
  </Container>
</React.Fragment>

export default BaseLayout