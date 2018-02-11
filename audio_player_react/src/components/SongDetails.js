import React, {Component} from 'react';

 //const songs = this.props.songs; 

class SongDetails extends Component {
    
    songs= this.props.songs
    setSong= this.props.setSong
    id=parseInt(this.props.match.params.songId, [10])-1
    render() {
        return (
            <ul>
                <li>
                    {this.songs[this.id].description} 
                    <br/><br/>
                    <button className="play" onClick={this.setSong.bind(this, this.songs[this.id].source)}>play</button> 
                </li>
            </ul>
        )
    }
}

export default SongDetails;