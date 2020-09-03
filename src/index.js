import React, {Component} from 'react';
import ReactDOM from 'react-dom';

//components
import Header from './header';
import Forms from './forms';
import '../src/style.css';

class App extends Component {
  
  render(){
    return (
            <div className="all">
              <Header/>
              <Forms/>
              
            </div>);
  }
} 

ReactDOM.render(<App/>,document.querySelector('#root'));
