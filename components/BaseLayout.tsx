import * as React from 'react';
import Head, {IHeadProps} from "./Head";
import Nav from './UI/Nav';

interface ILayoutProps extends IHeadProps{
  children?: any
}

const BaseLayout = (props: ILayoutProps) =>
<React.Fragment>
  <Head title={props.title} description={props.description}/>
  <Nav/>
  {props.children}
</React.Fragment>

export default BaseLayout