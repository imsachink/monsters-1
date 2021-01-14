import React,{Component} from "react";
import './App.css';
import SearchBox from "./components/search-box/search-box.jsx";
import {CardList} from "./components/card-list/card-list.jsx";


class App extends Component
{
  constructor(){
    super();
    this.state = {
      monsters: [],
      searchField: ''
    }
  }
  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response=> response.json())
    .then(users=> this.setState({monsters: users}) )
  }
  render() {
    const {monsters,searchField}= this.state;
    const searchedMonster= monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

return(
  <div className="App">    
  <input placeholder="search monster" type="search" onChange={e => 
   this.setState({searchField:e.target.value})
  } />
    <CardList monsters={searchedMonster} />

  </div>
)
    
  }

}

export default App;
