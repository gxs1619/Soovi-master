import React, { Component } from 'react';
import styled from 'styled-components';
import backEvents from '../../../Misc/Events';
import IndEv from './IndEvent.js';


//CSS goes here
const StyEvents = styled.div`
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

class Events extends Component {
    render(){
        return(
            //HTML goes here
            <StyEvents>
                <StyHeader>Events</StyHeader>
                {backEvents.karen ?
                    <IndEv name="Office Party" day="05-06-19" group="Work Friends"/> : "You have no events"
                }
                {backEvents.added ?
                    <IndEv name={backEvents.items[0].name} day={backEvents.items[0].day} group={backEvents.items[0].group}/> : ""
                }
            </StyEvents>
        );
    }
}

export default Events;