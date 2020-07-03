import React from 'react';

class GoogleAuth extends React.Component {

    //initializing the google authentication library
    componentDidMount(){
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '843648098005-hedvte93t5po46vf4r0187irunss56te.apps.googleusercontent.com',
                scope: 'email'
            });
        });
    }

    render(){
        return <div>Google Auth</div>
    }
}

export default GoogleAuth;