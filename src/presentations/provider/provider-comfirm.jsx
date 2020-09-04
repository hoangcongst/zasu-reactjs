import React from 'react'
import Notification from '../layout/noti'
import ErrorNoti from '../layout/error-noti'
export default class ProviderComfirm extends React.Component {
    render() {
        if (this.props.status !== 1)
            return (
                <div className="panel panel-default">
                    <div className="panel-heading font-bold">Yêu cầu chứng thực:</div>
                    <div className="panel-body">
                        <Notification notifications={this.props.notifications}/>
                        <ErrorNoti errors={this.props.errors}/>

                        <form role="form" onSubmit={this.props.onSubmit}>
                            <div className="form-group">
                                <label>Số CMND</label>
                                <input type="text" name="national_id" className="form-control" placeholder="Số CMND"
                                       onChange={this.props.handleChange}/>
                            </div>

                            <div className="form-group">
                                <label>Mặt trước CMND: </label>
                                <input type="file" name="front_national_id" onChange={this.props.onImageDrop}/>
                            </div>
                            <div className="form-group">
                                <label>Mặt sau CMND: </label>
                                <input type="file" name="backside_national_id" onChange={this.props.onImageDrop}/>
                            </div>
                            <div className="form-group">
                                <label>Chứng chỉ khác: </label>
                                <label className="radio-inline i-checks"><input type="radio"
                                                                                name="type_qualification" value="0"
                                                                                onChange={this.props.handleChange}/><i></i>Thẻ
                                    sinh viên</label>
                                <label className="radio-inline i-checks"><input type="radio"
                                                                                name="type_qualification" value="1"
                                                                                onChange={this.props.handleChange}/><i></i>Bằng
                                    cao đẳng</label>
                                <label className="radio-inline i-checks"><input type="radio"
                                                                                name="type_qualification" value="2"
                                                                                onChange={this.props.handleChange}/><i></i>Bằng
                                    đại học</label>
                                <label className="radio-inline i-checks"><input type="radio" name="type_qualification"
                                                                                value="3"
                                                                                onChange={this.props.handleChange}/><i></i>Full
                                    Bằng cao học</label>
                            </div>
                            <div className="form-group">
                                <label>Ảnh chứng chỉ: </label>
                                <input type="file" name="provider_qualification" onChange={this.props.onImageDrop}/>
                            </div>

                            <button type="submit" className="btn btn-sm btn-primary">Submit</button>
                        </form>
                    </div>
                </div>                    )

        else {
            return (
                <div className="panel panel-default">
                    <div className="panel-heading font-bold">Yêu cầu chứng thực:</div>
                    <div className="panel-body">
                        <Notification notifications={this.props.notifications}/>
                        <ErrorNoti errors={this.props.errors}/>

                        <form role="form">
                            <div className="form-group">
                                <label><strong>Số CMND: {this.props.national_id}</strong></label>
                            </div>
                        </form>
                    </div>
                </div>
            )
        }
    }
}