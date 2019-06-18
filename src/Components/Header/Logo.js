import React, { Component } from 'react';
import styled from 'styled-components';
import box from '../../Misc/box.jpg';

const StyTitle = styled.img`
    color: #FFFFFF;
    font-family: "Lato","Segoe UI";
    width: 100px;
    background-color: grey;
    padding-top: 8px;
    text-align: center;
    cursor: pointer;
    flex: 0.3;
`;

class Logo extends Component {
    render() {
        return (
            <StyTitle src={box} onClick={() => this.props.updatePage(this.props.name)}/>
        );
    }
}

export default Logo;