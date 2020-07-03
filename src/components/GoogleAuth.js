import React from 'react';

class GoogleAuth extends React.Component {

    state = { isSignedIn: null };

    //initializing the google authentication library
    componentDidMount(){
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '843648098005-hedvte93t5po46vf4r0187irunss56te.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.setState({ isSignedIn: this.auth.isSignedIn.get() })     // updating the component level state
            });
        });
    }

    renderAuthButton(){
        if(this.state.isSignedIn === null){
            return<div>I don't know if we are signed in</div>;
        }
        else if(this.state.isSignedIn) {
            return <div>I am Signed in!!</div>;
        }
        else{
            return <div>I am not Signed</div>;
        }
    }

    render(){
        return <div>{ this.renderAuthButton() }</div>;
    }
}

export default GoogleAuth;