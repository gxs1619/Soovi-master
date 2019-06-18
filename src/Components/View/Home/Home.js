import React, { Component } from 'react';
import styled from 'styled-components';

import Userlist from './Userlist';
//CSS goes here
const StyHome = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
`;

class Home extends Component {
    render(){
        return(
            //HTML goes here
            <StyHome>
                <Userlist name="Lynn" index={0}/>
                <Userlist name="Eli" index={1}/>
                <Userlist name="Greg" index={2}/>
            </StyHome>
        );
    }
}

export default Home;