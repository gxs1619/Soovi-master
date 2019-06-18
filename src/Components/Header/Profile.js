import React, { Component } from 'react';
import styled from 'styled-components';

import ProfilePic from '../../Misc/profile.png';

const StyProfile = styled.div`
  background-color: #FFFFFF;
  width: 82px;
  height: 82px;
  border-radius: 100%;
  margin-top: 9px;
  margin-right: 10px;
  cursor: pointer;
  flex: 0.3;
`;

const StyImg = styled.img`
    border-radius: 100%;
`;

class Profile extends Component {
    render() {
        return (
            <StyProfile onClick={() => this.props.updatePage(this.props.name)}><StyImg src={ProfilePic} alt={"Profile"}/></StyProfile>
        );
    }
}

export default Profile;