import React, {Component} from 'react'

export default class SubscribePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
        emailValue: '',
        fNameValue: '',
        lNameValue: '',
    };
  }

    render() {
        return (
            <form action="https://cool.us8.list-manage.com/subscribe/post" method="POST" noValidate className="emailform">
                <input type="hidden" name="u" value="e5e3fec5ea23fc095decf064a"/>
                <input type="hidden" name="id" value="49cb96b476"/>
                <div className="nameinputholder">
                    <label htmlFor='MMERGE1'>
                        <input 
                            type="text" 
                            name="FNAME" 
                            id="MMERGE1" 
                            value={this.state.fNameValue} 
                            onChange={(e)=>{this.setState({fNameValue: e.target.value});}}
                            placeholder="your first name"
                            className="nameinput"
                        />
                    </label>
                    <label htmlFor='MMERGE2'>
                        <input 
                            type="text" 
                            name="LNAME" 
                            id="MMERGE2" 
                            value={this.state.lNameValue} 
                            onChange={(e)=>{this.setState({lNameValue: e.target.value});}}
                            placeholder="your last name"
                            className="nameinput"
                        />
                    </label>
                </div>
                <label htmlFor='MMERGE0'>
                    <input 
                        type="email" 
                        name="EMAIL" 
                        id="MMERGE0"
                        value={this.state.emailValue} 
                        onChange={ (e)=>{this.setState({emailValue: e.target.value});} } 
                        autoCapitalize="off" 
                        autoCorrect="off"
                        placeholder="your@email.com"
                        className="emailinput"
                        /> 
                </label>
                    <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="subscribebutton" />

                <div style={{position: 'absolute', left: '-5000px'}} aria-hidden='true' aria-label="Please leave the following three fields empty">
                    <label htmlFor="b_name">Name: </label>
                    <input type="text" name="b_name" tabIndex="-1" value="" placeholder="Freddie" id="b_name"/>

                    <label htmlFor="b_email">Email: </label>
                    <input type="email" name="b_email" tabIndex="-1" value="" placeholder="youremail@gmail.com" id="b_email"/>

                    <label htmlFor="b_comment">Comment: </label>
                    <textarea name="b_comment" tabIndex="-1" placeholder="Please comment" id="b_comment"></textarea>
                </div>
            </form>
        )
    }
}
