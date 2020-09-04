import React from 'react'
import Header from '../layout/header.jsx'
import Scrollbars from 'react-custom-scrollbars';
import {Grid, Row, Col} from 'react-bootstrap'

class MessageItem extends React.Component {
    render() {
        if (this.props.message.isSend === false)
            return (
                <div className="m-b" key={this.props.keyProps}>
                    <a href className="pull-left thumb-sm avatar"><img
                        src="http://flatfull.com/themes/angulr/html/img/a9.jpg" alt="..."/></a>
                    <div className="m-l-xxl">
                        <div className="pos-rlt wrapper b b-light r r-2x">
                            <span className="arrow left pull-up"/>
                            <p className="m-b-none">{this.props.message.message}</p>
                        </div>
                        <small className="text-muted"><i className="fa fa-ok text-success"/> {this.props.message.time}
                        </small>
                    </div>
                </div>
            )
        else
            return (
                <div className="m-b" key={this.props.keyProps}>
                    <a href className="pull-right thumb-sm avatar"><img src={this.props.user.avatar}
                                                                        className="img-circle" alt="..."/></a>
                    <div className="m-r-xxl">
                        <div className="pos-rlt wrapper bg-primary r r-2x">
                            <span className="arrow right pull-up arrow-primary"/>
                            <p className="m-b-none">{this.props.message.message}</p>
                        </div>
                        <small className="text-muted">{this.props.message.time}</small>
                    </div>
                </div>
            )
    }
}

export default class Message extends React.Component {
    componentDidUpdate() {
        this.refs.scrollbars.scrollToBottom()
    }

    printMessageCrrUser() {
        let items = []
        for (let key in this.props.curUserMessages) {
            if (key !== 'messageNameTo' && key !== 'messageTo') {
                items.push(<MessageItem user={this.props.user} key={key}
                                        message={this.props.curUserMessages[key]}/>)
            }
        }
        return items
    }

    render() {
        return (
            <div id="message-container">
                <Header />
                <br />
                <Grid>
                    <Row>
                        <Col md={3}>
                            <div className="panel panel-info" draggable="true">
                                <div className="panel-heading">
                                    Connection
                                </div>

                                <ul className="list-group alt">
                                    { this.props.allMessages.map((user, i) => {
                                        return (
                                            <li className="list-group-item" key={i}
                                                onClick={e => this.props.handleClickInto(i)}>
                                                <div className="media">
                                            <span className="pull-left thumb-sm"><img
                                                src="http://react.semantic-ui.com/assets/images/avatar/small/matt.jpg"
                                                alt="..."
                                                className="img-circle"/></span>
                                                    <div className="pull-right text-danger m-t-sm">
                                                        <i className="fa fa-circle"/>
                                                    </div>
                                                    <div className="media-body">
                                                        <div>{user.messageNameTo}</div>
                                                        <small className="text-muted">about 2 minutes ago</small>
                                                    </div>
                                                </div>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </Col>
                        <Col md={9}>
                            <div className="panel panel-default">
                                <div className="panel-heading">Chat to {this.props.messageNameTo}</div>
                                <div className="panel-body">
                                    <Scrollbars ref="scrollbars" style={{height: 500}}>
                                        <div style={{padding: '20px'}}>
                                            {this.printMessageCrrUser()}
                                        </div>
                                    </Scrollbars>
                                </div>
                                <footer className="panel-footer">
                                    <div>
                                        <a className="pull-left thumb-xs avatar"><img src={this.props.user.avatar}
                                                                                      className="img-circle" alt="..."/></a>
                                        <form className="m-b-none m-l-xl" onSubmit={this.props.onSubmit}>
                                            <div className="input-group">
                                                <input onChange={this.props.handleInput} type="text"
                                                       value={this.props.input} className="form-control"
                                                       placeholder="Say something"/>
                                                <span className="input-group-btn">
                                                <button className="btn btn-default" type="submit">SEND</button></span>
                                            </div>
                                        </form>
                                    </div>
                                </footer>
                            </div>
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}