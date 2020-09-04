import firebase from 'firebase';
import {API_GOOGLE_KEY} from './config'
// import React from 'react'
// import {connect} from 'react-redux'

let config = {
    apiKey: API_GOOGLE_KEY,
    authDomain: "localhost",
    databaseURL: "https://newpaper-68453.firebaseio.com",
    storageBucket: "newpaper-68453.appspot.com",
    messagingSenderId: "295517545774"
}

// class FirebaseDB extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             database: null
//         }
//     }
//     componentDidMount() {
    // Handle Errors here.
module.exports = firebase.initializeApp(config)

// }
//
// getDbHandler() {
//     if(this.state.database === null) {

//             this.setState({
//                 database: fbDB
//             })
//             return fbDB
//         } else {
//             return this.state.database
//         }
//     }
// }
//
// export default connect((state, props) => {
//     return {
//         user: state.auth.user
//     }
// })(FirebaseDB)
