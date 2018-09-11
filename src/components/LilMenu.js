import React, {Component} from 'react';

export default class LilMenu extends Component {
    constructor(props){
        super(props)
        this.state = {
            show: false,
        }
    }

    render(){
        return(
            <div className={this.props.show ? "lilmenuwrap" : "gone"}>
                {this.state.show ? <div className="lilmenuitems">
                <a href='/'><span className="lilnav">Home</span></a>
                <a href="/band"><span className="lilnav">The Band</span></a>
                <a href="/tour"><span className="lilnav">Tour</span></a>
                <a href="/media"><span className="lilnav">Media</span></a>
                <a href="/store"><span className="lilnav">Store</span></a>
                <a href="/contact"><span className="lilnav">Contact</span></a>
                </div> : null}
                <div className={this.props.show ? "biglilmenu" : "hidebiglilmenu"} onClick={()=> this.setState(state => ({show: !state.show}))}>
                    {this.state.show ? <i class="fas fa-times"></i> : <i class="fas fa-bars"></i>}
                </div>
            </div>
        )
    }
}