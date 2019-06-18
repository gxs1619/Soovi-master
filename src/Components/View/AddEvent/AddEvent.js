import React, { Component } from 'react';
import styled from 'styled-components';
import { withToastManager } from 'react-toast-notifications';
import Events from "../../../Misc/Events";


//CSS goes here
const StyAddEvent = styled.div`
    text-align: center;
`;

const StyHeader = styled.div`
    text-align: center;
    background-color: rgba(150,159,170,0.34);
    font-size: 35px;
    width: 84%;
    height: 110px;
    margin-left: 16%;
    margin-top: 1%;
    flex: 2;
`;

class AddEvent extends Component {
    constructor(props) {
        super(props);
        this.state = {eventName:'', day:'', group:''};

        this.onClickB = this.onClickB.bind(this);
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeDay = this.handleChangeDay.bind(this);
    }

    handleChangeName(event) {
        this.setState({eventName: event.target.value});
    }

    handleChangeDay(event) {
        this.setState({day: event.target.value});
        Events.items[0].day = event.target.value;
    }

    onClickB(){
        const {toastManager} = this.props;
        if (this.state.eventName !== "" && this.state.day !== ''){
            Events.addEvent(this.state.eventName, this.state.day, "School Buddies");
            toastManager.add(`Successfully created new event: ${this.state.eventName}!`, {
                appearance: 'success',
                autoDismiss: true,
            });
        } else {
            toastManager.add("Failed to create event.", {
                appearance: 'warning',
                autoDismiss: true,
            });
        }
    };
    render(){
        return(
            //HTML goes here
            <StyAddEvent>
                <StyHeader>
                Create an Event
                </StyHeader>
                <form id="eventForm">
                    <br/>
                    Event Name
                    <br/>
                    <input type="text" name="eventName" placeholder="Event Name" value={this.state.eventName} onChange={this.handleChangeName}/>
                    <br/>
                    Event Day
                    <br/>
                    <input type="date" name="date" onChange={this.handleChangeDay}/>
                    <br/>
                    Share with group:
                    <br/>
                    <select name="groups">
                        <option value="bffs">BFF's</option>
                        <option value="workfriends">Work Friends</option>
                        <option value="schoolbuddies">School Buddies</option>
                        <option value="everyone">Everyone</option>
                    </select>
                    <br/>
                </form> 
                <button onClick={this.onClickB}>Create Event</button>
            </StyAddEvent>
        );
    }
}
export default withToastManager(AddEvent);