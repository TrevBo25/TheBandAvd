import React, {Component} from 'react';
import SpotifyPlayer from 'react-spotify-player';
import SmartGallery from 'react-smart-gallery';

export default class Media extends Component{
  constructor() {
    super()
    this.state = {
      choice: 1,
      vwidth: "640",
      vheight: "360"
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
    if (window.innerWidth < 1350 && window.innerWidth > 1015) {
      this.setState({vwidth: "480", vheight: "270"})
    } else if (window.innerWidth < 670 && window.innerWidth > 510) {
      this.setState({vwidth: "480", vheight: "270"})
    } else if (window.innerWidth < 511) {
      this.setState({vwidth: "300", vheight: "170"})
    } else {
      this.setState({vwidth: "640", vheight: "360"})
    }
  }

  render(){
    return(
      <div className="bigmedia" id="mediael">
        <h1 className="title">MEDIA</h1>
        <div className='toggles'>
          <h3 className={this.state.choice === 1 ? "togglebuttonselected" : "togglebutton"} onClick={() => this.setState({choice : 1})}>Music.</h3><h3 className={this.state.choice === 2 ? "togglebuttonselected" : "togglebutton"} onClick={() => this.setState({choice : 2})}>Videos.</h3><h3 className={this.state.choice === 3 ? "togglebuttonselected" : "togglebutton"} onClick={() => this.setState({choice : 3})}>Photographs.</h3>
        </div>
        <div className="mediaholder">
          {this.state.choice === 1 ? 
          <div className="mediamusic">
            <div className="newmusic">
              <h2 className="covertitle" >Whiskey & Sherbet Coming Soon!</h2>
              <div className="newmusicholder">
                <div className="coverholder">
                  <img src="https://s3.us-east-2.amazonaws.com/thebandavd/AD-023-Whisky-Sherbert-Album-Cover-iTunes.jpg" alt="" className="cover" />
                </div>
                <SpotifyPlayer
                  uri="spotify:album:4zqVUK5Au5qdNXk60ZEBD6"
                  size={{width: 250, height: 480}}
                  view="coverart"
                  theme="black"
                />
              </div>
            </div>
            <div className="oldmusic">
              <h2 className="covertitle" >Top tracks</h2>
              <div className="oldmusicholder">
                <div className="coverholder">
                  <a href="https://open.spotify.com/album/4zqVUK5Au5qdNXk60ZEBD6" target="_blank" rel="noopener noreferrer" ><img src="https://s3.us-east-2.amazonaws.com/thebandavd/ditty.jpg" alt="" className="lilcover" /></a>
                  <a href="https://open.spotify.com/album/3xczDGDNkkqWHXKBzgX7lZ" target="_blank" rel="noopener noreferrer" ><img src="https://s3.us-east-2.amazonaws.com/thebandavd/dress+it+up.jpg" alt="" className="lilcover" /></a>
                </div>
                <SpotifyPlayer
                  uri="spotify:artist:1s6Fgx0rDx46sATrAURbq5"
                  size={{width: 250, height: 480}}
                  view="coverart"
                  theme="black"
                />
              </div>
            </div>
          </div> : null }
          {this.state.choice === 2 ? 
          <div className="mediavideos">
            <div className="video">
              <iframe id="ytplayer" 
                      type="text/html" 
                      width={this.state.vwidth} 
                      height={this.state.vheight}
                      src="https://www.youtube.com/embed/eS2UhKFnaPc?autoplay=0"
                      frameborder="0">
              </iframe>
            </div>
            <div className="video">
              <iframe id="ytplayer" 
                      type="text/html" 
                      width={this.state.vwidth} 
                      height={this.state.vheight}
                      src="https://www.youtube.com/embed/J43FbO07d6Y?autoplay=0"
                      frameborder="0">
              </iframe>
            </div>
            <div className="video">
              <iframe id="ytplayer" 
                      type="text/html" 
                      width={this.state.vwidth} 
                      height={this.state.vheight}
                      src="https://www.youtube.com/embed/w9JmEtFm83s?autoplay=0"
                      frameborder="0">
              </iframe>
            </div>
            <div className="video">
              <iframe id="ytplayer" 
                      type="text/html" 
                      width={this.state.vwidth} 
                      height={this.state.vheight}
                      src="https://www.youtube.com/embed/HM8cKb6yLa0?autoplay=0"
                      frameborder="0">
              </iframe>
            </div>
          </div> : null }
          {this.state.choice === 3 ? 
          <div className="photoholder">
            <SmartGallery 
              images={images1}
              onImageSelect={(e, src) => window.open(src)}
              width={500} height={500}
            />
            <SmartGallery 
              images={images3}
              onImageSelect={(e, src) => window.open(src)}
              width={500} height={500}
            />
            <SmartGallery 
              images={images4}
              onImageSelect={(e, src) => window.open(src)}
              width={500} height={500}
            />
            <SmartGallery 
              images={images2}
              onImageSelect={(e, src) => window.open(src)}
              width={500} height={500}
            />
          </div> : null }
        </div>
      </div>
    )
  }
}

const images1 = [
  "https://s3.us-east-2.amazonaws.com/thebandavd/a1.jpg",
  "https://s3.us-east-2.amazonaws.com/thebandavd/a2.JPG",
  "https://s3.us-east-2.amazonaws.com/thebandavd/a3.JPG",
  "https://s3.us-east-2.amazonaws.com/thebandavd/a4.JPG"
]

const images2 = [
  "https://s3.us-east-2.amazonaws.com/thebandavd/b107.jpg",
  "https://s3.us-east-2.amazonaws.com/thebandavd/b126.jpg",
  "https://s3.us-east-2.amazonaws.com/thebandavd/b139.jpg",
  "https://s3.us-east-2.amazonaws.com/thebandavd/b2.jpg"
]

const images3 = [
  "https://s3.us-east-2.amazonaws.com/thebandavd/b26.jpg",
  "https://s3.us-east-2.amazonaws.com/thebandavd/b51.jpg"
]

const images4 = [
  "https://s3.us-east-2.amazonaws.com/thebandavd/b88.jpg",
  "https://s3.us-east-2.amazonaws.com/thebandavd/b43.jpg"
]
