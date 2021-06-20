import React,{Component} from 'react';
import { CardList } from './component/card-list/card-list.component';
import { SearchBox } from './component/search/search.component';

import './App.css';

class App extends Component{

  constructor(){

    super();

    this.state={
      monsters:[],
      SearchField:''
      
    }

    
  }
  componentDidMount(){
   fetch('https://jsonplaceholder.typicode.com/users')
   .then(response=>response.json())
   .then(users=> this.setState({monsters:users}))

   
  }


  handleChange=(e)=> {

    this.setState({SearchField: e.target.value})

  }
 
  render(){

    const { monsters,SearchField }=this.state;
    const filteredMonsters=monsters.filter(
      monster=> monster.name.toLowerCase().includes(SearchField.toLowerCase())
    )
    //Above is euivalent to the following
    //const monsters=this.state.monsters;
    //const SearchField=this.state.SearchField;

    return(
      <div className='App'>
      <h1> Monsters Rolodex</h1>
      <SearchBox
      placeholder='search monsters'
      changeHandler={this.handleChange}/>
       
      <CardList monsters={filteredMonsters}> 
     
     
      </CardList>
      
      </div>
    );
  }
}


export default App;
