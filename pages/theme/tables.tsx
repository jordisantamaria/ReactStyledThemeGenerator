import * as React from 'react';
import ThemeLayout from '../../modules/theme/ThemeLayout';
import {Heading} from '../../components/UI/basic';
import {IState} from '../../lib/redux/rootReducer';
import {withRouter} from 'next/router';
import {connect} from 'react-redux';
import {ITheme} from '../../lib/redux/ThemeActions';
import Table from '../../components/UI/advanced/Table/Table';
import TableHead from '../../components/UI/advanced/Table/TableHead';
import TableElement from '../../components/UI/advanced/Table/TableElement';
import TableBody from '../../components/UI/advanced/Table/TableBody';
import TableRow from '../../components/UI/advanced/Table/TableRow';
import TableHeadElement from '../../components/UI/advanced/Table/TabeHeadElement';

interface IProps {
  theme: ITheme;
}

const Tables = (props: IProps) => {
  return (
  <ThemeLayout>
    <Heading>Tablas</Heading>
    <Table mt={3} hover={true}>
      <TableHead>
        <TableRow>
          <TableHeadElement>First</TableHeadElement>
          <TableHeadElement>Last</TableHeadElement>
          <TableHeadElement>Handle</TableHeadElement>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableHeadElement>Jordi</TableHeadElement>
          <TableElement>Santamaria</TableElement>
          <TableElement>@jordi</TableElement>
        </TableRow>
        <TableRow>
          <TableHeadElement>First</TableHeadElement>
          <TableElement>Last</TableElement>
          <TableElement>Handle</TableElement>
        </TableRow>
        <TableRow>
          <TableHeadElement>First</TableHeadElement>
          <TableElement>Last</TableElement>
          <TableElement>Handle</TableElement>
        </TableRow>
      </TableBody>
    </Table>
  </ThemeLayout>
  );
};

const mapStateToProps = (state: IState, ownProps) => {
  return {
    ...ownProps,
    theme: state.theme
  };
};

export default connect(mapStateToProps)(withRouter(Tables));
