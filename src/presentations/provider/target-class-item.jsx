import React from 'react'
import {Row, Col} from 'react-bootstrap'
export default class TargetClassItem extends React.Component {
    render() {
        return (
            <div>
                <Row>
                    <Col md={4}>
                        <div className="form-group">
                            <label>Cấp học</label>
                            <select name="class_level" className="form-control m-b" value={this.props.data.class_level}
                                    onChange={e => this.props.handleChange(e, this.props.posKey)}>
                                <option value={0}>Mẫu giáo</option>
                                <option value={1}>Cấp 1</option>
                                <option value={2}>Cấp 2</option>
                                <option value={3}>Cấp 3</option>
                            </select>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="form-group">
                            <label>Môn học</label>
                            <select name="subject" className="form-control m-b" value={this.props.data.subject}
                                    onChange={e => this.props.handleChange(e, this.props.posKey)}>
                                <option value={0}>Toán</option>
                                <option value={1}>Lý</option>
                                <option value={2}>Hóa</option>
                                <option value={3}>Anh</option>
                                <option value={4}>Văn</option>
                                <option value={5}>Sử</option>
                                <option value={6}>Địa</option>
                                <option value={7}>Tiếng Trung</option>
                                <option value={8}>Tiếng Pháp</option>
                                <option value={9}>Tiếng Nga</option>
                                <option value={10}>Âm nhạc</option>
                                <option value={11}>Mỹ thuật</option>
                            </select>
                        </div>
                    </Col>
                    <Col md={2}>
                        <div className="form-group">
                            <label>Lương</label>
                            <input type="text" name="salary" className="form-control" placeholder="Lương"
                                   value={this.props.data.salary}
                                   onChange={e => this.props.handleChange(e, this.props.posKey)}/>
                        </div>
                    </Col>
                    <Col md={2}>
                        <br/>
                        <button type="button" onClick={e => this.props.removeSubject(e, this.props.posKey)}
                                className="btn btn-sm btn-danger">
                            Xóa môn học
                        </button>
                    </Col>
                </Row>
            </div>
        )
    }
}

TargetClassItem.defaultProps = {
    class_level: 0,
    subject: 0,
    salary: ''
}