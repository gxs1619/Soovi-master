import React, { Component } from 'react';
import styled from 'styled-components';


//CSS goes here
const StyindEvent = styled.div`
    text-align: center;
    margin-left: 1%;
    margin-top: 1%;
    width: 100%;
    display: flex;
`;

const StyName = styled.div`
    background-color: #CED4DB;
    flex: 1;
    `;

const StyDate = styled.div`
    background-color: rgba(150,159,170,0.34);
    flex: 1;
    `;

const StyGroup = styled.div`
    background-color: #CED4DB;
    flex: 1;
    `;


class indEvent extends Component {
    render(){
        return(
            //HTML goes here
            <StyindEvent>
                <StyName>{this.props.name}</StyName>
                <StyDate>{this.props.day}</StyDate>
                <StyGroup>{this.props.group}</StyGroup>
            </StyindEvent>
        );
    }
}

export default indEvent;