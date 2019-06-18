import React, { Component } from 'react';
import styled from 'styled-components';
import SingleSetting from "./SingleSetting";

import { withToastManager } from 'react-toast-notifications';

import PROFILE_SETTINGS from './Settings'

//CSS goes here
const StyPreferencesContainer = styled.div`

`;

const StyPreferencesHeader = styled.div`
    vertical-align: center;
    background-color: #F95F62;
    margin-top: 20px;
    height: 40px;
    margin-left: 17vw;
    margin-right: 3vw;
    width: 80vw;
`;

const StyPreferencesHeaderText = styled.div`
    color: #47525E;
    text-align: left;
    vertical-align: middle;
    position: relative;
    top: 10px;
    margin-left: 10px;
`;


const StyPreferencesBody = styled.div`

`;

class Preferences extends Component {

    constructor(props){
        super(props);
        this.state={itemName:''};
        this.publish = this.publish.bind(this);
    }

    publish(str) {
        //console.log(str);
        const {toastManager} = this.props;
        toastManager.add(str, {
            appearance: 'success',
            autoDismiss: true,
        });
    }

    render(){

        this.profileSettings = Object.keys(PROFILE_SETTINGS).map((key) =>
            <SingleSetting settingInfo={PROFILE_SETTINGS[key]} tm={this.publish}/>
        );
        //<StyPreferencesHeaderText>User Settings for </StyPreferencesHeaderText>
        return(
            <StyPreferencesContainer>
                <StyPreferencesHeader>
                    <StyPreferencesHeaderText>Your User Settings</StyPreferencesHeaderText>
                </StyPreferencesHeader>
                <StyPreferencesBody>
                    {this.profileSettings}
                </StyPreferencesBody>
            </StyPreferencesContainer>
        );
    }
}

export default withToastManager(Preferences);