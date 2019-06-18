import React, { Component } from 'react';
import styled from 'styled-components';
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Events from '../../../Misc/Events';

//CSS goes here 
const StyNotifications = styled.div`
    text-align: left;
    margin-top: 1%;
    margin-left: 230px;
    color: black;
    font-family: Lato;
    font-size: 25px;
    font-weight: 400;
    line-height: 39px;
    background-color: light grey;
    display: flex;
    flex-direction: column;
`;

const StyReadNotification = styled.div`
	padding-top: 2px;
	padding-bottom: 3.5px;
	text-align: center;
    color: #47525E;
    font-family: Lato;
    font-size: 16px;
    font-weight: 400;
    line-height: 39px;
`;

const StyUnreadNotification = styled.div`
	padding-top: 2px;
	padding-bottom: 3.5px;
	text-align: center;
    color: #47525E;
    font-family: Lato;
    font-size: 16px;
    font-weight: 400;
    line-height: 39px;
    background-color: lightgrey;
`;

const StyHeader = styled.div`
    text-align: center;
    background-color: rgba(150,159,170,0.34);
    font-size: 35px;
    width: 100%;
    height: 110px;
    margin-left: 1%;
    margin-top: 1%;
    margin-bottom: 1%;
    flex: 2;
`;

class Notifications extends Component {
    constructor(){
        super();

        this.state = {
            unreadNotification: false,
            noNotification: true
        };

        this.handleChange = this.handleChange.bind(this);

        this.unreadNotification = (
            <StyUnreadNotification>
                    <span>Karen wants to add you to Office Party.</span>
                    <Button size="sm" onClick={this.handleChange}>Accept</Button>
                    <Button size="sm">Decline</Button>
            </StyUnreadNotification>
        );

        this.noNotification = (
            <StyReadNotification>
                <p>Your Notifications are empty!</p>
            </StyReadNotification>
        )
    }

    handleChange(event){
        this.setState({unreadNotification: true, noNotification: false});
        Events.karen = true;
    }

    render(){

        const style = this.state.unreadNotification ? {display: 'none'} : {};
        const styles = this.state.noNotification ? {display: 'none'} : {};

        return(
            <StyNotifications><StyHeader> Notifications</StyHeader>
                <StyUnreadNotification style={style}>
                    <span>Karen wants to add you to Office Party.</span>{' '}
                    <Button size="sm" onClick={this.handleChange}>Accept</Button>{' '}
                    <Button size="sm" onClick={this.handleChange}>Decline</Button>
                </StyUnreadNotification>
                <StyReadNotification style={styles}>
                    <p>Your Notifications are empty!</p>
                </StyReadNotification>
            	{/* <StyReadNotification>
            		<span>Nick wants to add you to Secret Santa.</span>
            		<Button size="sm" >Accept</Button>
            		<Button size="sm">Decline</Button>
            	</StyReadNotification>
                <StyReadNotification>
                    <span>Lucy wants to add you to Christmas Party.</span>
                    <Button size="sm">Accept</Button>
                    <Button size="sm">Decline</Button>
                </StyReadNotification> */}
           	</StyNotifications>
        );
    }
}

export default Notifications;