import React from 'react';
import { Link } from 'react-router-dom';
import AuthForm from './AuthForm';


const Home = props => (
  <div>
    <h1> Home </h1>
    <Link to="/ramen"> Ramen </Link>
    <Link to="/sushi"> Sushi </Link>
  </div>
)
const App = props => (
  <div>
    {props.auth.loggedIn? <Home {...props} />: <AuthForm {...props}/>}
  </div>
)

export default App;
