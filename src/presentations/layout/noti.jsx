import React from 'react';

export default class Notification extends React.Component {
    render() {
        if (this.props.notifications.length !== 0)
            return (
                <div className="alert alert-success">
                    <ul className="list">
                        {
                            this.props.notifications.map((noti, i) => {
                                return <li key={i}>{noti}</li>
                            })
                        }
                    </ul>
                </div>
            )
        else return null
    }
}
