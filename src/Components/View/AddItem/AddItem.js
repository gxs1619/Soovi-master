import React, { Component } from 'react';
import styled from 'styled-components';
import { withToastManager } from 'react-toast-notifications';
import MyList from "../../../Misc/MyList";

//CSS goes here
const StyAddItem = styled.div`
    text-align: center;
    display:flex;
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

const StyForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 50%;
    margin-left: 25%;
    margin-top: 2%;
`;

const StyFormElement = styled.div`
    flex: 1;
    margin-top: 1%;
`;

class AddItem extends Component {
    constructor(props){
        super(props);
        this.state={
            name:"",
            link:"",
            checkMark:true,
            image: "../../../Misc/box.jpg"
        };

        this.onClick = this.onClick.bind(this);
        this.handleChangeItem = this.handleChangeItem.bind(this);
        this.handleChangeLink = this.handleChangeLink.bind(this);
    }

    handleChangeItem(event) {
        this.setState({itemName: event.target.value});
        MyList.items[MyList.index].name = event.target.value;
    }

    handleChangeLink(event){
        this.setState({link : event.target.value});
        MyList.items[MyList.index].link = event.target.value;
    }

    onClick(event){
        event.preventDefault();
        const {toastManager} = this.props;
        if (this.state.itemName !== "" && this.state.link !== ""){
            toastManager.add(`Successfully added ${this.state.itemName} to your wishlist!`, {
                appearance: 'success',
                autoDismiss: true,
            });
        } else {
            toastManager.add("Failed to add item, make sure both fields are filled out!", {
                appearance: 'warning',
                autoDismiss: true,
            });
        }
    }

    render(){
        return(
            //HTML goes here
            <StyAddItem>
                <StyHeader>
                Add Item
                </StyHeader>
                <StyForm>
                    <StyFormElement>Item Name</StyFormElement>
                    <StyFormElement><input value={this.state.itemName} onChange={this.handleChangeItem}/></StyFormElement>
                    <StyFormElement>Link</StyFormElement>
                    <StyFormElement><input value={this.state.link} onChange={this.handleChangeLink}/></StyFormElement>
                    <StyFormElement><button onClick={this.onClick}>Add Item</button></StyFormElement>
                </StyForm>
            </StyAddItem>
        );
    }
}

export default withToastManager(AddItem);