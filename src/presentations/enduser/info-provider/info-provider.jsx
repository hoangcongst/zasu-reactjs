import React from 'react'
import {Link} from 'react-router'
import { Popconfirm } from 'antd';

const arrSubject = [
    'Toán', 'Lý', 'Hóa', 'Anh', 'Văn', 'Sử', 'Địa', 'Tiếng Trung',
    'Tiếng Pháp', 'Tiếng Nga', 'Âm nhạc', 'Mỹ thuật'
]

const classLevel = [
    "Mẫu giáo",
    "Cấp 1",
    "Cấp 2",
    "Cấp 3"
]
export default class InfoProvider extends React.Component {
    linktoFullInfo() {
        if (this.props.provider.target_class == null)
            return "/enduser/info-provider/profile?provider_id=" + this.props.provider.id
        return "/enduser/info-provider/profile?provider_id=" + this.props.provider.id +
            "&target_class=" + this.props.provider.target_class._id
    }

    linktoReview() {
        if (this.props.provider.target_class == null)
            return "/enduser/info-provider/reviews?provider_id=" + this.props.provider.id;
        return "/enduser/info-provider/reviews?provider_id=" + this.props.provider.id +
            "&target_class=" + this.props.provider.target_class._id
    }

    infoCrrTargetClass() {
        if (this.props.provider.target_class != null) {
            return (
                <div className="m-b m-t-sm">
                    <span
                        className="h5 text-black">Môn học: {arrSubject[this.props.provider.target_class.subject]}</span><br />
                    <span
                        className="h5 text-black">Cấp học: {classLevel[this.props.provider.target_class.class_level]}</span><br />
                    <span
                        className="h5 text-black">Lương: {this.props.provider.target_class.salary} VNĐ</span>
                </div>)
        }
    }

    buttonRequest() {
        if (this.props.provider.target_class != null) {
            if (this.props.provider.target_class.isRequested === false) {
                return <Popconfirm title="Bạn chắc chắn yêu cầu dạy?" onConfirm={e => this.props.requestProvider(this.props.provider.target_class._id)} okText="Yes"
                                   cancelText="No">
                    <button className="btn btn-sm btn-success btn-rounded">Gửi yêu cầu dạy
                    </button>
                </Popconfirm>
            }
            else
                return <Popconfirm title="Bạn chắc chắn muốn hủy yêu cầu?" onConfirm={e => this.props.requestProvider(this.props.provider.target_class._id)} okText="Yes"
                                   cancelText="No">
                    <button className="btn btn-sm btn-danger btn-rounded">Hủy yêu cầu dạy
                    </button>
                </Popconfirm>
        }
    }

    render() {
        return (
            <div className="app-content-body ">
                <div className="hbox hbox-auto-xs hbox-auto-sm">
                    <div className="col">
                        <div style={{
                            background: 'url(http://flatfull.com/themes/angulr/html/img/c4.jpg) center center',
                            backgroundSize: 'cover'
                        }}>
                            <div className="wrapper-lg bg-white-opacity">
                                <div className="row m-t">
                                    <div className="col-sm-7">
                                        <a href className="thumb-lg pull-left m-r">
                                            <img src={this.props.provider.avatar} className="img-circle" alt=""/>
                                        </a>
                                        <div className="clear m-b">
                                            <div className="m-b m-t-sm">
                                                <span className="h3 text-black">{this.props.provider.name}</span>
                                                <small className="m-l">{this.props.provider.address}</small>
                                            </div>
                                            {/*<p className="m-b">*/}
                                            {/*<a href*/}
                                            {/*className="btn btn-sm btn-bg btn-rounded btn-default btn-icon"><i*/}
                                            {/*className="fa fa-twitter"/></a>*/}
                                            {/*<a href*/}
                                            {/*className="btn btn-sm btn-bg btn-rounded btn-default btn-icon"><i*/}
                                            {/*className="fa fa-facebook"/></a>*/}
                                            {/*<a href*/}
                                            {/*className="btn btn-sm btn-bg btn-rounded btn-default btn-icon"><i*/}
                                            {/*className="fa fa-google-plus"/></a>*/}
                                            {/*</p>*/}
                                            {this.infoCrrTargetClass()}
                                        </div>
                                    </div>
                                    <div className="col-sm-5">
                                        <div className="pull-right pull-none-xs text-center">
                                            <p className="m-b-md inline m">
                                                <span className="h3 block font-bold">{this.props.provider.review_point}</span>
                                                <small>{this.props.provider.review_count} đánh giá</small>
                                            </p>
                                            <p className="m-b-md inline m">
                                                <span className="h3 block font-bold">{this.props.provider.follower}</span>
                                                <small>Người quan tâm</small>
                                            </p><br />
                                            {this.buttonRequest()}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="wrapper bg-white b-b">
                            <ul className="nav nav-pills nav-sm">
                                <li><Link activeClassName="active"
                                          to={this.linktoReview()}>Review</Link>
                                </li>
                                <li><Link activeClassName="active"
                                          to={this.linktoFullInfo()}>Profile</Link>
                                </li>
                                <li><Link activeClassName="active"
                                          to={'/message/' + this.props.provider.id + '/' + this.props.provider.name}>Messages</Link>
                                </li>
                            </ul>
                        </div>

                        {this.props.children}
                    </div>
                    <div className="col w-lg bg-light lter b-l bg-auto">
                        <div className="wrapper">
                            <h4 className="m-t-xs m-b-xs">Danh sách lớp dạy</h4>
                            <hr/>

                            <div className="panel b-light clearfix">
                                {this.props.provider.list_target_class.map((item, i) => {
                                    if (this.props.provider.target_class != null) {
                                        if (item._id !== this.props.provider.target_class._id ||
                                            this.props.provider.target_class.isRequested === false) {
                                            return (
                                                <div key={i} className="panel-body">
                                                    {/*<a href className="thumb pull-left m-r">*/}
                                                    {/*<img src="img/a0.jpg" className="img-circle" />*/}
                                                    {/*</a>*/}
                                                    <a
                                                        href={"/enduser/info-provider/reviews?provider_id=" + this.props.provider.id
                                                        + "&target_class=" + item._id}>
                                                        <div className="clear">
                                                            <p className="text-info">Môn
                                                                học: {arrSubject[item.subject]}</p>
                                                            <small
                                                                className="block text-muted">{classLevel[item.class_level]}
                                                                / {item.salary} VNĐ
                                                            </small>
                                                        </div>
                                                    </a>
                                                </div>
                                            )
                                        } else return null
                                    } else
                                        return ( <div key={i} className="panel-body">
                                            {/*<a href className="thumb pull-left m-r">*/}
                                            {/*<img src="img/a0.jpg" className="img-circle" />*/}
                                            {/*</a>*/}
                                            <a
                                                href={"/enduser/info-provider/reviews?provider_id=" + this.props.provider.id
                                                + "&target_class=" + item._id}>
                                                <div className="clear">
                                                    <p className="text-info">Môn
                                                        học: {arrSubject[item.subject]}</p>
                                                    <small
                                                        className="block text-muted">{classLevel[item.class_level]}
                                                        / {item.salary} VNĐ
                                                    </small>
                                                </div>
                                            </a>
                                        </div> )
                                })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

