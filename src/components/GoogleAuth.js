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
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }

    //updating the state for signin and signout
    //call back functions
    onAuthChange = () => {
        this.setState({ isSignedIn: this.auth.isSignedIn.get() });
    };

    onSignIn = () => {
        this.auth.signIn();
    };

    onSignOut = () => {
        this.auth.signOut();
    };

    renderAuthButton(){
        if(this.state.isSignedIn === null){
            return null;
        }
        else if(this.state.isSignedIn) {
            return (
                <button onClick={this.onSignOut} className="ui red google button">
                    <i className="google icon"/>
                    Sign Out
                </button>
            );
        }
        else{
            return (
                <button onClick={this.onSignIn} className="ui red google button">
                    <i className="google icon"/>
                    Sign In with Google
                </button>
            );
        }
    }

    render(){
        return <div>{ this.renderAuthButton() }</div>;
    }
}

export default GoogleAuth;