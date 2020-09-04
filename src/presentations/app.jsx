import React from 'react'

export default class App extends React.Component {
    render() {
        return (
            //this div is data-reactroot
            <div id="root">
                {this.props.children}
            </div>
        )
    }
}