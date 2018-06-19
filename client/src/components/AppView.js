import React from 'react';
import { connect } from 'react-redux';
import { Divider, Header, Image, Container, Table } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const AppView = ({ app = {} }) => (
  <Container>
    <Link to="/apps">View All Posts</Link>
    <Header as="h3" textAlign="center">{app.name}</Header>
    

      <Table.Body>
        <Table.Row>
            <Table.Cell>Posts</Table.Cell>
            <Table.Cell>{app.post}</Table.Cell>}
          </Table.Row>


        
        <Table.Row>
          <Table.Cell>Author</Table.Cell>
          <Table.Cell>{app.author}</Table.Cell>
        </Table.Row>
        
        
        
      </Table.Body>
  </Container>
)

const mapStateToProps = (state, props) => {
  return { app: state.apps.find( a => a.id === parseInt(props.match.params.id )) }
}

export default connect(mapStateToProps)(AppView);
