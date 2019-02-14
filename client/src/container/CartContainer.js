import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUser } from "../redux/actions/user";

class CartContainer extends Component {
    constructor(props) {
        super(props);
        this.props.fetchUser();
    }

    render() {
        return (
            <div>

            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.user.user
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchUser: () => dispatch(fetchUser(dispatch))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);