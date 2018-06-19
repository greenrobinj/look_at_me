import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getApps } from '../actions/apps';
import { Container, Grid, Header, Card, Image } 
  from 'semantic-ui-react';

class Apps extends React.Component {

  componentDidMount () {
    this.props.dispatch(getApps() )
  }
  

  
    apps = ( ) =>{
      return this.props.apps.map( app =>
      <Card key={app.id}>
        <Card.Content>
          <Card.Header>
            {app.post}
          </Card.Header>
          <Card.Meta>
            <span>
              {app.author}
            </span>
          </Card.Meta>
          
        </Card.Content>
        <Card.Content extra>
          <Link to={`/apps/${app.id}`}>
            View Post
          </Link>
        </Card.Content>
      </Card>
    )
  }

  render() {
    return (
      <Container>
        <Header as="h3" textAlign="center">Posts</Header>
          <Card.Group itemsPerRow={3}>
           { this.apps() }
          </Card.Group>
        </Container>
      )
    }
  }

  const mapStateToProps = (state) => {
    return { apps: state.apps }
  }

export default connect(mapStateToProps)(Apps);