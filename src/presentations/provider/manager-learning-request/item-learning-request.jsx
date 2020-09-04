import React from 'react'
import {Link} from 'react-router'
import {Popconfirm} from 'antd';

const classLevel = [
    "Mẫu giáo",
    "Cấp 1",
    "Cấp 2",
    "Cấp 3"
]

const arrSubject = [
    'Toán', 'Lý', 'Hóa', 'Anh', 'Văn', 'Sử', 'Địa', 'Tiếng Trung',
    'Tiếng Pháp', 'Tiếng Nga', 'Âm nhạc', 'Mỹ thuật'
]

export default class ItemLearningRequest extends React.Component {
    printLeftFooter() {
        if (this.props.item.status === 1)
            return <div><strong>Phone: </strong><br />{ this.props.item.enduser.phone }
            </div>
        else if (this.props.item.status === 2)
            return (
                <button className="btn m-b-xs w-xs btn-default btn-rounded disabled">Nhận lớp</button>
            )
        else
            return (
                <Popconfirm title="Bạn chắc chắn nhận lớp?"
                            onConfirm={e => this.props.acceptRequest(this.props.item.id)} okText="Yes"
                            cancelText="No">
                    <button className="btn m-b-xs w-xs btn-success btn-rounded">Nhận lớp</button>
                </Popconfirm>
            )
    }

    printRightFooter() {
        if (this.props.item.status === 1)
            return (
                <div><strong>Email: </strong><br />{ this.props.item.enduser.email }
                </div>
            )
        else if (this.props.item.status === 2)
            return (
                <button className="btn m-b-xs w-xs btn-default btn-rounded disabled">Hủy lớp</button>
            )
        else
            return (
                <Popconfirm title="Bạn chắc chắn huy lớp?"
                            onConfirm={e => this.props.rejectRequest(this.props.item.id)} okText="Yes"
                            cancelText="No">
                    <button className="btn m-b-xs w-xs btn-danger btn-rounded">Hủy lớp</button>
                </Popconfirm>
            )
    }

    render() {
        return (
            <div className="col-md-4">
                <div className="panel b-a">
                    <div className="panel-heading bg-info dk no-border wrapper-lg">
                        <Link to={'/message/' + this.props.item.enduser.id + '/' + this.props.item.enduser.name}>
                            <button className="btn btn-sm btn-icon btn-rounded btn-info pull-right m-r"><i
                                className="fa fa-phone"/></button>
                        </Link>
                    </div>
                    <Link
                        to="">
                        <div className="text-center m-b clearfix">
                            <div className="thumb-lg avatar m-t-n-xxl">
                                <img src={this.props.item.enduser.avatar} alt="..."
                                     className="b b-3x b-white"/>
                                <div className="h4 font-thin m-t-sm">{this.props.item.enduser.name}</div>
                                <br />
                                Môn học: {arrSubject[this.props.item.subject]} <br />
                                {classLevel[this.props.item.class_level]}
                            </div>
                        </div>
                    </Link>
                    <div className="padder-v b-t b-light bg-light lter row text-center no-gutter">
                        Địa điểm:
                        <div className="h4 font-thin m-t-sm">{this.props.item.enduser.address}</div>
                        <hr />
                        Lương:
                        <div className="h4 font-thin m-t-sm">{this.props.item.salary} VNĐ</div>
                    </div>
                    <div className="hbox text-center b-t b-light">
                        <div className="col padder-v text-muted b-r b-light">
                            {this.printLeftFooter()}
                        </div>
                        <div className="col padder-v text-muted">
                            {this.printRightFooter()}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

