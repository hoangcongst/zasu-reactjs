import React from 'react'
export default class History extends React.Component {
    type(type) {
        if (type === 0)
            return <b className="badge bg-success">Nạp tiền</b>
        else if(type === 1)
            return <b className="badge bg-danger">Trừ tiền</b>
        else
            return <b className="badge bg-info">Hoàn tiền</b>
    }

    status(status) {
        if (status === 2)
            return <b className="badge bg-success">Thành công</b>
        else
            return <b className="badge bg-danger">Thất bại</b>
    }

    render() {
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    Lịch sử giao dịch
                </div>
                <div>
                    <table className="table">
                        <thead>
                        <tr>
                            <th data-breakpoints="xs">Mã giao dịch</th>
                            <th>Loại giao dịch</th>
                            <th>Số tiền</th>
                            <th data-breakpoints="xs">Mô tả</th>
                            <th data-breakpoints="xs sm">Status</th>
                            <th data-breakpoints="xs sm md" data-title="DOB">Thời gian</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.props.items.map((item, i) => {
                                return <tr data-expanded="true" key={i}>
                                    <td>{item._id}</td>
                                    <td>{this.type(item.type)}</td>
                                    <td>{item.amount}</td>
                                    <td>{item.description}</td>
                                    <td>{this.status(item.status)}</td>
                                    <td>{item.created_at}</td>
                                </tr>
                            })
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}