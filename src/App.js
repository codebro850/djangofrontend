// import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
// import {robots} from './robots'
import Scroll from './scroll'
import 'tachyons';
import Searchbox from './searchbox';
import CardList from './cardList';
import ErrorBoundry from './Errorboundry';

class App  extends Component
 {
   constructor(){
     super()
     this.state={
       robots:[],
       Searchfiels:''
     }
   }
   componentDidMount()
   {
     fetch("http://127.0.0.1:8000/robotslist/").then(Response=>{
       return Response.json();
     })
     .then(user=>{
       this.setState({robots:user});
     })
   }
   onsearchchanged=(event)=>{
     this.setState({Searchfiels:event.target.value})
    
   }
   render(){
    const filterrobots=this.state.robots.filter(robots=>{
      return robots.name.toLowerCase().includes(this.state.Searchfiels.toLowerCase());
      })
      if(this.state.robots ==0){
        return(<h2 className='tc'>LOading the content pls wait</h2>);
      }
      else{

        if(filterrobots== 0){
          return (
    
            <div className='tc'>
           <h1 className='f1'>RoboFriends</h1>
            <Searchbox onsearchchanged={this.onsearchchanged}/> 
            <h2>{this.state.Searchfiels} not found !</h2>
        
           </div>
                );
        }
          else { return (
    
      <div className='tc'>
     <h1 className='f1'>RoboFriends</h1>
      <Searchbox onsearchchanged={this.onsearchchanged}/> 
      <Scroll>
        <ErrorBoundry><CardList robots={filterrobots}/></ErrorBoundry>
        </Scroll>
      
  
     </div>
          );
    }
  
      }
    
    }

}

export default App;
