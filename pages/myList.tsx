import * as React from "react";
import Heading from "../components/UI/basic/Heading";
import BaseLayout from "../components/BaseLayout";
import { withRouter } from "next/router";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";

interface IState {}
interface Iprops {
  router: any;
}

export const GET_LIST_ITEMS_BY_LISTNAME_QUERY = gql`
  query VocabListByListName($listName: String!) {
    vocabListByListName(listName: $listName) {
      listName
      id
      VocabItems {
        word
      }
    }
  }
`;
class MyList extends React.Component<Iprops, IState> {
  constructor(props) {
    super(props);
    this.state = {};
  }

  public render() {
    return (
      <BaseLayout title="My list" description="My personal list">
        <Heading>
          Mi lista de vocab favorita {this.props.router.query.listName}
        </Heading>
        <Query
          query={GET_LIST_ITEMS_BY_LISTNAME_QUERY}
          variables={{ listName: this.props.router.query.listName }}
        >
          {({ loading, error, data }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error :(</p>;
            console.log("vocabaLists query data = ", data);
            const vocabItems = data.vocabListByListName.VocabItems;
            return vocabItems.map(item => <div>{item.word}</div>);
          }}
        </Query>
      </BaseLayout>
    );
  }
}

export default withRouter(MyList);
