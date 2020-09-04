import React from 'react'
import {fetchUser} from '../../actions/action'
import {connect} from 'react-redux'
import PageDevider from '../layout/page-devider.jsx'
import Header from '../layout/header.jsx'
class CustormerManager extends React.Component {
    componentDidMount() {
        let page = 1
        this.props.dispatch(fetchUser(page))
    }

    reload() {
        console.log(this.props)
    }

    render() {
        return (
            <div>
                <Header />
                <button onClick={e => this.reload()}>hello</button>
                <table className="ui compact celled definition table">
                    <thead>
                    <tr>
                        <th></th>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Address</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.props.list_user.map((user, i) => {
                            return <tr key={i} id={"row-" + user.id}>
                                <td className="collapsing">
                                    <div className="ui fitted slider checkbox">
                                        <input type="checkbox"/> <label></label>
                                    </div>
                                </td>
                                <td>{user.id}</td>
                                <td>{user.full_name}</td>
                                <td>{user.phone}</td>
                                <td>{user.email}</td>
                                <td>{user.address}</td>
                            </tr>
                        })
                    }

                    </tbody>
                    <tfoot className="full-width">
                    <PageDevider count={this.props.count} page={this.props.page}/>
                    </tfoot>
                </table>
            </div>
        )
    }

}

CustormerManager.defaultProps = {
    list_user: [],
    page: 1
}

export default connect((state, props) => state.users)(CustormerManager)