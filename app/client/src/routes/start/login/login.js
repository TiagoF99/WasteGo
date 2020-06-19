import React from 'react'
import { gql } from 'apollo-boost';
import { graphql} from 'react-apollo';// example of a graphql query
import * as compose from 'lodash.flowright';

const query = gql`
  query GetUsers{
    getUsers {
      username
      password
    }
  }
`

// example of a graphql mutation
const mutation = gql`
  mutation CreateUser($username: String, $password: String) {
    createUser(username: $username, password: $password) {
      username
      password
    }
  }
`
@compose(
  graphql(query),
  graphql(mutation)
)
class Login extends React.Component {
    constructor(props) {
      super(props)
      
      this.state = {
        username: '',
        password: ''
      }
    }  
    
    onChange = event => {
      this.setState({ [event.target.name]: event.target.value})
    }
    save = () => {
      this.props.mutate({
        variables: {
          username: this.state.username,
          password: this.state.password
        },
        refetchQueries: ['GetUsers']
      })
    }  
    render() {
      const { getUsers = [] } = this.props.data
      return (
        <div style={{display: 'flex', justifyContent:'center', marginTop: '10%'}} >      
            <div style={{display: 'flex', flexDirection:'column'}}>
                <h3 style={{margin: '0px'}}>Login!</h3>
                <input placeholder='Username' name='username' onChange={this.onChange} />
                <input placeholder='password' name='password' onChange={this.onChange} />
                <button onClick={this.save}>Save</button>
            </div>      
            <table style={{border:'1px solid black', margin:'20px'}}>
              <tbody>
                <tr>
                    <th style={{border:'1px solid black'}}>name</th>
                    <th style={{border:'1px solid black'}}>description</th>
                </tr>       
                {
                    getUsers.map(user => (
                    <tr>
                        <td style={{border:'1px solid black'}}>{user.username}</td>
                        <td style={{border:'1px solid black'}}>{user.password}</td>
                    </tr>
                    ))
                }
              </tbody>
            </table>
       </div>
      )
    }
  }

export default Login