import React from 'react';
import { connect } from 'react-redux';

import Banner from "../components/Banner";

class ProfileBanner extends React.Component {
    render() {
        const { user, isLogged } = this.props;
        return <Banner content={isLogged ? user.token : 'Not connected'}/>
    }
}

const mapStateToProps = (state) => {
    const { security: { user, isLogged } } = state;

    return {
        user,
        isLogged,
    }
};

const ConnectedProfileBanner = connect(mapStateToProps)(ProfileBanner);

export default ConnectedProfileBanner;
