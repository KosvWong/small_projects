import React, { Component } from 'react';
import {Route, Switch, Link} from 'react-router-dom';
import SongsList from './components/SongsList';
import SongDetails from './components/SongDetails';
import Home from './components/Home';



export default class App extends Component {
 
    //This state needs to be passed to child components as a prop
 


    constructor(props){
      super(props)

      this.state={
      list:['olympian.mp3', 'transmission.mp3', 'upstep.mp3'],
      playIndex: 0,
      playOnline:'olympian.mp3'
    }   
}

musicChange(i){
  let playIndex=this.state.playIndex;
  playIndex += i
  this.setState(
                {playIndex: Math.abs(playIndex%(this.state.list.length)), 
                playOnline: this.state.list[this.state.playIndex]},
                ()=> {this.audioPlay()}
              ); 
} 

setSong(i){
  this.setState({playOnline: i},
  ()=> {this.audioPlay()}
  )
}

audioPause(){
  this.audioPlayer.pause();
}

audioPlay(){
  this.audioPlayer.load();
  this.audioPlayer.play();
}

  render() {
    console.log(this.state.playIndex +" ... " + this.state.list[this.state.playIndex])
    return (
      <div className="App">
        <div>
          <nav className="navbar navbar-inverse">
            <div className="container-fluid">
              <div className="navbar-header">
                <a className="navbar-brand" href="#">Audio Player Demo</a>
              </div>
                <ul className="nav navbar-nav">
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/songslist">SongsList</Link></li>
                  {/* <li><Link to="/songdetails">Song Details</Link></li> */}
                </ul>
            </div>
          </nav>
         </div>
          <div>
            <Switch>
              <Route exact path="/" component={Home} /> 
              <Route exact path="/songdetails/:songId" render={(props)=><SongDetails songs={this.props.songs} setSong={this.setSong.bind(this)} {...props}/>}/>
              <Route path="/songslist" render={ () => (
                <SongsList 
                  songs={this.props.songs}
                  setSong={this.setSong.bind(this)}
                  />  
                 )} />
            </Switch>
          </div>        
          <div className="container">
            <audio controls className="audio" ref={self=> this.audioPlayer = self}>
              <source src={this.state.playOnline} type="audio/mpeg" />   
            </audio> <br/>
            <a href="#" className="previous round btn-sm" onClick={this.musicChange.bind(this, -1)}>&#8249;</a>
            <a href="#" className="next round btn-sm" onClick={this.musicChange.bind(this, 1)}>&#8250;</a>
            
          </div>
      </div>
    )
  };
}

