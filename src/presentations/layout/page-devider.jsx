import React from 'react'
import { fetchUser } from '../../actions/action'
import { connect } from 'react-redux'
class PageDevider extends React.Component {
    actionPage(action) {
        let page = this.props.page
        if (action === 1) {
            page = page > 1 ? --page : 1
        } else {
            page = page * 20 < this.props.count ? ++page : page
        }
        this.props.dispatch(fetchUser(page))
    }

    render() {
        return (
            <tr>
                <th></th>
                <th colSpan="12">
                    <button onClick={e => this.actionPage(2)} className="ui right floated button">Next</button>
                    <button onClick={e => this.actionPage(1)} className="ui left floated button">Back</button>
                </th>
            </tr>
        )
    }
}

export default connect()(PageDevider)