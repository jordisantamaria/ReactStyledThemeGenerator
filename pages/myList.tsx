import * as React from "react";
import Heading from "../components/UI/basic/Heading";
import BaseLayout from "../components/BaseLayout";
import { withRouter } from "next/router";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";
import { Box, Text } from "../components/UI/basic";
import { IVocabItem } from "../modules/VocabListPage/model";
import Container from "../components/UI/Container";
import { WordItem } from "../modules/MyListPage/WordItem";

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
        id
        word
        translation
        pronunciation
        association
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
        <Box
          css={{
            background:
              "linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(129,224,255,1) 150%);"
          }}
        >
          <Heading
            fontSize={22}
            px={3}
            py={2}
            color={"primaryDark"}
            mb={2}
            m={"auto"}
            css={{ maxWidth: "1000px" }}
          >
            Lista {this.props.router.query.listName}
          </Heading>
        </Box>
        <Container>
          <Text mb={3}>
            Clica una palabra para ver su significado, si ya la aprendiste, dale
            click a Aprendido
          </Text>
          <Query
            query={GET_LIST_ITEMS_BY_LISTNAME_QUERY}
            variables={{ listName: this.props.router.query.listName }}
          >
            {({ loading, error, data }) => {
              if (loading) return <p>Loading...</p>;
              if (error) return <p>Error :(</p>;
              const vocabItems = data.vocabListByListName.VocabItems;
              console.log("vocab items = ", vocabItems);
              return vocabItems.map((item: IVocabItem, index) => (
                <WordItem
                  index={index}
                  item={item}
                  key={item.id}
                  listName={this.props.router.query.listName}
                />
              ));
            }}
          </Query>
        </Container>
      </BaseLayout>
    );
  }
}

export default withRouter(MyList);
