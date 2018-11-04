import ReactDOM from 'react-dom';
import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

// Custom components
import Home from './components/pages/Home';
import CitiesIndex from './components/cities/CitiesIndex';
import CitiesShow from './components/cities/CitiesShow';

class App extends React.Component {
  render() {
    return(
      <div className="container">
        <Route exact path="/" component={Home}/>
        <Route exact path="/cities" component={CitiesIndex}/>
        <Route path="/cities/:cityId" component={CitiesShow} />
      </div>
    );
  }
}

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
