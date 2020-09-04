import React from 'react'
import TargetClassItem from './target-class-item'
import Notification from '../layout/noti'
import ErrorNoti from '../layout/error-noti'
export default class TargetClass extends React.Component {
    render() {
        return (
            <div className="panel panel-default">
                <div className="panel-heading font-bold">Quản lý môn học:</div>
                <div className="panel-body">
                    <Notification notifications={this.props.notifications}/>
                    <ErrorNoti errors={this.props.errors}/>

                    <form role="form" onSubmit={this.props.onSubmit}>
                        <button type="button" onClick={this.props.addNewTarget} className="btn btn-sm btn-info"
                                style={{"marginRight": "10px"}}>Thêm
                            mục tiêu
                        </button>
                        <button type="submit" className="btn btn-sm btn-primary">Submit</button>
                        {
                            this.props.data.map((item, i) => (
                                <TargetClassItem key={i} posKey={i} data={item}
                                                 removeSubject={this.props.removeSubject}
                                                 handleChange={this.props.handleChange}/>
                            ))
                        }
                    </form>
                </div>
            </div>
        )
    }
}