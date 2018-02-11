import React, {Component} from 'react';

class SongsList extends Component {

    songs= this.props.songs
    setSong= this.props.setSong
    

    render() {
    let songListJSX=this.props.songs.map((song, i)=>{
        let link="/songdetails/" + (parseInt(song.id, [10])+1)
        return (
        <li key={i} className="song">
          <button onClick={this.setSong.bind(this, song.source)} className="btn-xs">play</button>
          {"   "} {song.id} {"-"} {song.title} 
          {"   "} <a href={link}>Detail</a>
        </li>)
    });

        return (
            <ul>
                {songListJSX}          
            </ul>
        )
    }
}

export default SongsList;