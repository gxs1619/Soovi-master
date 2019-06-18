import React, { Component } from 'react';
import styled from 'styled-components';

import RadioContainer from "./CustomRadio/RadioContainer"

//CSS goes here
const StySingleSettingContainer = styled.div`
    width: 100%;
`;

const StySingleSettingHeader = styled.div`
    vertical-align: center;
    background-color: #F95F62;
    margin-top: 20px;
    height: 40px;
    margin-left: 17vw;
    margin-right: 3vw;
    width: 80vw;
`;

const StySingleSettingHeaderText = styled.div`
    color: #47525E;
    text-align: left;
    vertical-align: middle;
    position: relative;
    top: 10px;
    margin-left: 10px;
`;

const StySingleSettingBodyContainer = styled.div`
    background-color: rgba(150, 159, 170, 0.34);
    vertical-align: middle;
    text-align: left;
    margin-left: 17vw;
    margin-right: 3vw;
    width: 80vw;
    height: 60px;
`;

class SingleSetting extends Component {
    render(){
        //this.props.tm(this.props.settingInfo.name);
        return(
            <StySingleSettingContainer>
                <StySingleSettingHeader>
                    <StySingleSettingHeaderText>{this.props.settingInfo.name}</StySingleSettingHeaderText>
                </StySingleSettingHeader>
                <StySingleSettingBodyContainer>
                    <RadioContainer settingInfo={this.props.settingInfo} tm={this.props.tm}/> 
                </StySingleSettingBodyContainer>
            </StySingleSettingContainer>
        );
    }
}

export default SingleSetting;