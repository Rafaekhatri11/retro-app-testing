import React, { Component } from 'react';
import Landingpage from './components/landingpage/landing';
import Createretro from './components/createretro/createretro';
import {
  BrowserRouter as Router, Route,
  Link, Switch,
  Redirect,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../src/store/index';
import history from './History';



// function PrivateRoute({ Component, authed, ...rest }) {
//   console.log(authed)
//   return (
//     <Route
//       {...rest}
//       render={(props) => authed
//         ? (<Component {...props} />)
//         : (<Redirect to={{ pathname: '/', state: { from: props.location } }} />)}
//     />
//   )
// }



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authed: false
    }
  }

  //  async componentWillMount() {
  //   let data = await localStorage.getItem('userdata');
  //   // console.log(JSON.parse(data).token);
  //   if (JSON.parse(data).token) {
  //     this.setState({ authed: true });
  //   }
  //   else {
  //     this.setState({ authed: false })
  //   }
  // }


  render() {
    console.log(this.state.authed);
    return (


      //  <Createretro />
      <Provider store={store}>

        <Router history={history} >
          <Switch>
            {/* <PrivateRoute component={Createretro} authed={this.state.authed} path="/createretro" /> */}
            {/* <Createretro />   */}
            <Route exact path="/" component={Landingpage} />
            <Route path="/createretro" component={Createretro} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
