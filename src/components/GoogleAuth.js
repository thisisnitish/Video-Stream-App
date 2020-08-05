import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

class GoogleAuth extends React.Component {

    //initializing the google authentication library
    componentDidMount(){
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '843648098005-hedvte93t5po46vf4r0187irunss56te.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                //attempt to know whether the user is signedin or not
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }

    //updating the state for signin and signout
    //call back functions
    onAuthChange = (isSignedIn) => {
        if(isSignedIn){
            this.props.signIn(this.auth.currentUser.get().getId());
        }
        else{
            this.props.signOut();
        }
    };

    onSignInClick = () => {
        this.auth.signIn();
    };

    onSignOutClick = () => {
        this.auth.signOut();
    };

    renderAuthButton(){
        if(this.props.isSignedIn === null){
            return null;
        }
        else if(this.props.isSignedIn) {
            return (
                <button onClick={this.onSignOutClick} className="ui red google button">
                    <i className="google icon"/>
                    Sign Out
                </button>
            );
        }
        else{
            return (
                <button onClick={this.onSignInClick} className="ui red google button">
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

const mapStateToPorps = (state) => {
    return { isSignedIn: state.auth.isSignedIn };         //this is going to be either true or false
};

export default connect(mapStateToPorps, { signIn, signOut })(GoogleAuth);