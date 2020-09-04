import React from 'react';

export default class ErrorNoti extends React.Component {
    render() {
        if (this.props.errors !== undefined)
            if (this.props.errors.length !== 0)
                return (
                    <div className="alert alert-danger">
                        <i className="close icon"></i>
                        <div className="header">
                            There were some errors
                        </div>
                        <ul className="list">
                            {
                                this.props.errors.map((error, i) => {
                                    return <li key={i}>{error}</li>
                                })
                            }
                        </ul>
                    </div>
                )
            else return null
        else return null
    }
}
