import React from 'react'
import {connect} from 'react-redux'
import moment from 'moment'
import mFirebase from '../../api/firebase'
import Message from '../../presentations/users/message.jsx'
import Header from '../../presentations/layout/header.jsx'
import {refreshToken} from '../../actions/action'

class MessageContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
            database: null,
            curUserMessages: [],
            allMessages: [],
            messageTo: '',
            messageNameTo: ''
        }
    }

    componentDidMount() {
        this.props.dispatch(refreshToken(this.props.user.api_token))

        if (this.props.params.messageTo !== undefined)
            this.setState({
                messageTo: this.props.params.messageTo,
                messageNameTo: this.props.params.messageNameTo
            })

        if (this.state.database === null) {
            let fbApp = mFirebase
            fbApp.auth().signInWithCustomToken(this.props.user.api_token).catch(function (error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorCode + errorMessage)
                // ...
            });

            this.setState({database: fbApp.database()});

            //get all messages
            fbApp.database().ref('/messages/' + this.props.user._id).once('value').then((snapshot) => {
                let items = []
                let snapVal = snapshot.val()
                for (let key in snapVal) {
                    items.push(snapVal[key])
                }
                this.setState({
                    allMessages: items
                })

                //set messageNameTo
                if(this.props.params.messageTo !== undefined) {
                    //create node of current chat in firebase
                    let updates = {
                        messageNameTo: this.props.params.messageNameTo,
                        messageTo: this.props.params.messageTo,
                    };

                    fbApp.database().ref().child('messages/' + this.props.user._id + '/' + this.props.params.messageTo + '/').update(updates)
                    this.setState({
                        curUserMessages: snapVal[this.props.params.messageTo],
                    })
                } else {
                    if(items.length > 0) {
                        this.setState({
                            curUserMessages: items[0],
                            messageTo: items[0].messageTo,
                            messageNameTo: items[0].messageNameTo
                        })
                    }
                }
            });

            //add listener when value change = realtime
            let messages = fbApp.database().ref('/messages/' + this.props.user._id);
            messages.on('value', (snapshot) => {
                let items = []
                let snapVal = snapshot.val()
                for (let key in snapVal) {
                    items.push(snapVal[key])
                }
                this.setState({
                    allMessages: items,
                    curUserMessages: snapVal[this.state.messageTo],
                })
            });
        }
    }

    handleInput(e) {
        this.setState(Object.assign({}, this.state, {
            input: e.target.value
        }))
    }

    handleClickInto(i) {
        this.setState(Object.assign({}, this.state, {
            curUserMessages: this.state.allMessages[i],
            messageNameTo: this.state.allMessages[i].messageNameTo,
            messageTo: '',
        }))
    }


    onSubmit(e) {
        e.preventDefault()
        if (this.state.input !== '') {
            //create user message
            let message = {
                message: this.state.input,
                time: moment().format('YYYY-MM-DD h:mm:ss a'),
                isSend: true
            }

            //create client message
            let messageClient = {
                message: this.state.input,
                time: moment().format('YYYY-MM-DD h:mm:ss a'),
                isSend: false
            }
            // Get a key for a new Post.
            //link = messages/currentuser/touser
            let newMessageKey = this.state.database.ref().child('messages/' + this.props.user._id + '/' + this.state.messageTo + '/').push().key;

            // Write the new post's data simultaneously in the posts list and the user's post list.
            let updates = {};

            updates['/' + this.props.user._id + '/' + this.state.messageTo + '/messageNameTo'] = this.state.messageNameTo
            updates['/' + this.props.user._id + '/' + this.state.messageTo + '/messageTo'] = this.state.messageTo
            updates['/' + this.props.user._id + '/' + this.state.messageTo + '/' + newMessageKey] = message

            //update client
            updates['/' + this.state.messageTo + '/' + this.props.user._id + '/messageNameTo'] = this.props.user.name
            updates['/' + this.state.messageTo + '/' + this.props.user._id + '/messageTo'] = this.props.user._id
            updates['/' + this.state.messageTo + '/' + this.props.user._id + '/' + newMessageKey] = messageClient

            this.state.database.ref().child('messages').update(updates)
        }
        this.setState({
            input: ''
        })
    }

    render() {
        if (this.state.allMessages.length !== 0 || this.state.messageTo !== '')
            return (
                <Message user={this.props.user} messageTo={this.state.messageTo} messageNameTo={this.state.messageNameTo}
                         onSubmit={this.onSubmit.bind(this)} handleClickInto={this.handleClickInto.bind(this)}
                         handleInput={this.handleInput.bind(this)} allMessages={this.state.allMessages}
                         input={this.state.input} curUserMessages={this.state.curUserMessages}/>
            )
        else
            return (
                <div>
                    <Header />
                    <br />
                    No messages
                </div>
            )
    }
}

export default connect((state, props) => {
    return {
        user: state.auth.user
    }
})(MessageContainer)