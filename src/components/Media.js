import React, {Component} from 'react';
import SpotifyPlayer from 'react-spotify-player';

export default class Media extends Component{
  constructor() {
    super()
    this.state = {
      choice: 1
    }
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }
  
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }
  
  updateWindowDimensions() {
    console.log( window.innerWidth, window.innerHeight );
  }

  render(){
    console.log(window.innerWidth);
    return(
      <div className="bigmedia" id="mediael">
        <h1 className="title">MEDIA</h1>
        <div className='toggles'>
          <h3 className={this.state.choice === 1 ? "togglebuttonselected" : "togglebutton"} onClick={() => this.setState({choice : 1})}>Music</h3><h3 className={this.state.choice === 2 ? "togglebuttonselected" : "togglebutton"} onClick={() => this.setState({choice : 2})}>Videos</h3><h3 className={this.state.choice === 3 ? "togglebuttonselected" : "togglebutton"} onClick={() => this.setState({choice : 3})}>Photographs</h3>
        </div>
        <div className="mediaholder">
          {this.state.choice === 1 ? 
          <div className="mediamusic">
            <div className="newmusic">
              <h2 className="covertitle" >Newest shizzzzz by THE BAND</h2>
              <div className="newmusicholder">
                <div className="coverholder">
                  <img src="https://s3.us-east-2.amazonaws.com/thebandavd/AD-023-Whisky-Sherbert-Album-Cover-iTunes.jpg" alt="" className="cover" />
                </div>
                <SpotifyPlayer
                  uri="spotify:album:6hPkbAV3ZXpGZBGUvL6jVM"
                  size={{width: 400, height: 520}}
                  view="coverart"
                  theme="black"
                />
              </div>
            </div>
            <div className="oldmusic">
              <h2 className="covertitle" >Don't forget about the old tunes</h2>
              <div className="oldmusicholder">
                <div className="coverholder">
                  <a href="https://open.spotify.com/album/4zqVUK5Au5qdNXk60ZEBD6" target="_blank" rel="noopener noreferrer" ><img src="https://s3.us-east-2.amazonaws.com/thebandavd/ditty.jpg" alt="" className="lilcover" /></a>
                  <a href="https://open.spotify.com/album/3xczDGDNkkqWHXKBzgX7lZ" target="_blank" rel="noopener noreferrer" ><img src="https://s3.us-east-2.amazonaws.com/thebandavd/dress+it+up.jpg" alt="" className="lilcover" /></a>
                </div>
                <SpotifyPlayer
                  uri="spotify:artist:1s6Fgx0rDx46sATrAURbq5"
                  size={{width: 400, height: 420}}
                  view="coverart"
                  theme="black"
                />
              </div>
            </div>
          </div> : null }
          {this.state.choice === 2 ? 
          <div className="mediavideos">
            <div className="videorow">
              <div className="video1">
                <iframe id="ytplayer" 
                        type="text/html" 
                        width="640" 
                        height="360"
                        src="https://www.youtube.com/embed/eS2UhKFnaPc?autoplay=0"
                        frameborder="0">
                </iframe>
              </div>
              <div className="video1">
                <iframe id="ytplayer" 
                        type="text/html" 
                        width="640" 
                        height="360"
                        src="https://www.youtube.com/embed/J43FbO07d6Y?autoplay=0"
                        frameborder="0">
                </iframe>
              </div>
            </div>
            <div className="videorow">
              <div className="video2">
                <iframe id="ytplayer" 
                        type="text/html" 
                        width="640" 
                        height="360"
                        src="https://www.youtube.com/embed/w9JmEtFm83s?autoplay=0"
                        frameborder="0">
                </iframe>
              </div>
              <div className="video2">
                <iframe id="ytplayer" 
                        type="text/html" 
                        width="640" 
                        height="360"
                        src="https://www.youtube.com/embed/HM8cKb6yLa0?autoplay=0"
                        frameborder="0">
                </iframe>
              </div>
            </div>
          </div> : null }
          {this.state.choice === 3 ? 
          <div>
            PHOTOS
          </div> : null }
        </div>
      </div>
    )
  }
}
