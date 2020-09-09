import React from 'react';
import { connect } from 'react-redux'
import { signOut, signIn } from '../Actions' 

class GoogleOAuth extends React.Component {

    onSignIn = () => {
        this.auth.signIn();
    }

    onSignOut = () => {
        this.auth.signOut();
    }

    componentDidMount() {
        window.gapi.load('client:auth2', ()=> {
            window.gapi.client.init({
                clientId: '521685159768-iig3heb8noi59b1sotganqvih6vmc42g.apps.googleusercontent.com',
                scope: 'email'
            }).then(()=> {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange)
            })
        })
    }

    onAuthChange = (isSignedIn) => {
        if(isSignedIn){
            this.props.signIn( this.auth.currentUser.get().getId());
        } else {
            this.props.signOut();
        }
    }

    renderAuthButton() {
        if(this.props.isSignedIn===null) {
            return null;
        } else if (this.props.isSignedIn) {
            return (
                <button 
                onClick = {this.onSignOut}
                className='ui red google button'>
                    <i className='google icon'/>
                    SignOut
                </button>
            )
        } else {
            return (
                <button
                onClick = {this.onSignIn}
                 className='ui red google button'>
                    <i className='google icon'/>
                    SignIn
                </button>
            )
        }
    }

    render() {
        return(
            <div>{this.renderAuthButton()}</div>
        )
    }
}

const mapStateToProps = (state) => {
    return { isSignedIn: state.auth.isSignedIn }
}

export default connect(mapStateToProps, {signIn, signOut})(GoogleOAuth);