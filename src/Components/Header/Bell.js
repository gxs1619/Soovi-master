import React, { Component } from 'react';
import styled from 'styled-components';

import BellImg from '../../Misc/bell.png';

const StyBell = styled.div`
    width: 82px;
    height: 75px;
    padding-top: 18px;
    padding-right: 20px;
    cursor: pointer;
    flex: 0.3;
`;

const StyImg = styled.img`
    max-height: 64px;
    max-width: 64px;
`;

class Bell extends Component {
    render() {
        return (
            <StyBell onClick={() => this.props.updatePage(this.props.name)}><StyImg src={BellImg} alt={"No Notifications"}/></StyBell>
        );
    }
}

export default Bell;