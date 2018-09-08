import React, {Component} from 'react';
import SpotifyPlayer from 'react-spotify-player';

export default class Media extends Component{
  constructor() {
    super()
    this.state = {
      choice: 1
    }
  }

  render(){
    return(
      <div className="bigmedia">
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
                  <img src="https://s3.us-east-2.amazonaws.com/thebandavd/AD-023-Whisky-Sherbert-Album-Cover-iTunes.jpg" alt="" className="lilcover" />
                  <img src="https://s3.us-east-2.amazonaws.com/thebandavd/AD-023-Whisky-Sherbert-Album-Cover-iTunes.jpg" alt="" className="lilcover" />
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
                        src="https://www.youtube.com/embed/J43FbO07d6Y?autoplay=0"
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
                        src="https://www.youtube.com/embed/J43FbO07d6Y?autoplay=0"
                        frameborder="0">
                </iframe>
              </div>
              <div className="video2">
                <iframe id="ytplayer" 
                        type="text/html" 
                        width="640" 
                        height="360"
                        src="https://www.youtube.com/embed/J43FbO07d6Y?autoplay=0"
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

{/*       <div className="mediavideos">
            <div className="video1">
              <iframe id="ytplayer" 
                      type="text/html" 
                      width="640" 
                      height="360"
                      src="https://www.youtube.com/embed/J43FbO07d6Y?autoplay=0"
                      frameborder="0">
              </iframe>
            </div>
            <div className="video2">
              <iframe id="ytplayer" 
                      type="text/html" 
                      width="640" 
                      height="360"
                      src="https://www.youtube.com/embed/J43FbO07d6Y?autoplay=0"
                      frameborder="0">
              </iframe>
            </div>
            <div className="video3">
              <iframe id="ytplayer" 
                      type="text/html" 
                      width="640" 
                      height="360"
                      src="https://www.youtube.com/embed/J43FbO07d6Y?autoplay=0"
                      frameborder="0">
              </iframe>
            </div>
          </div> */}