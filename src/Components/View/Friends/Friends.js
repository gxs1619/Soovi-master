import React, { Component } from 'react';
import styled from 'styled-components';

//CSS goes here
const StyFriends = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
`;

const StyHeader = styled.div`
    text-align: center;
    background-color: rgba(150, 159, 170, 0.34);
    font-size: 35px;
    width: 100%;
    height: 110px;
    margin-left: 1%;
    margin-top: 1%;
    flex: 2;
`;

class Friends extends Component {
    render(){
        return(
            //HTML goes here
            <StyFriends>
                <StyHeader>Friends</StyHeader>
                You have no friends.
            </StyFriends>
        );
    }
}

export default Friends;