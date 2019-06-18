import React, { Component } from 'react';
import styled from 'styled-components';
import { withToastManager } from 'react-toast-notifications';
import Item from "./Item";
import rArrow from "../../../Misc/contentArrowRight.png";
import heartE from "../../../Misc/heartE.png";
import heartF from "../../../Misc/heartF.png";
import List1 from "../../../Misc/List1.js";
import List2 from "../../../Misc/List2";
import List3 from "../../../Misc/List3";

//CSS goes here
const StyUserlist = styled.div`
    margin-left: 1%;
    width: 1270px;
`;

const StyUserHeader = styled.div`
    background-color: #F95F62;
    height: 40px;
    margin-top: 1%;
    display: flex;
    `;

const StyHeaderItem = styled.div`
    text-align: left;
    color: #FFFFFF;
    font-size: 25px;
    margin-left: 1%;
    flex: 5
`;

const StyHeaderImg = styled.img`
    height: 100%;
    margin-right:2%;
    flex: 0;
`;

const StyUserContent = styled.div`
    background-color: rgba(150, 159, 170, 0.34);
    height: 180px;
    width: 1270px;
    display: flex;
`;

const StyContentArrow = styled.img`
    width: 82px;
    height: 82px;
    margin-top: 45px;
    border-radius: 100%;
    flex: 1;
    
    &:hover{
        background-color: rgba(150, 159, 170, 0.34);
    }
`;

//Megan is working on this one!
class Userlist extends Component {
    determineList(){
        if(this.props.index === 0){
            return List1;
        }
        else if(this.props.index === 1){
            return List2;
        }
        else{
            return List3;
        }
    }

    constructor(props){
        super(props);
        this.state={
            liked:this.determineList().liked,
            list:this.determineList()
        };

        this.onClick = this.onClick.bind(this);
    }

    onClick(){
        const {toastManager} = this.props;
        if(this.state.liked){
            this.setState({liked:false});
            this.list.liked = false;
            toastManager.add("Removed " + this.props.name + "'s wishlist from your likes!", {
                appearance: 'warning',
                autoDismiss: true,
            });
        }
        else{
            this.setState({liked:true});
            this.list.liked = true;
            toastManager.add("Liked " + this.props.name + "'s wishlist!", {
                appearance: 'success',
                autoDismiss: true,
            });
        }
    };

    render(){
        return(
            //HTML goes here
            <StyUserlist>
                <StyUserHeader>
                    <StyHeaderItem>{this.props.name}</StyHeaderItem>
                    {this.state.liked ?
                        <StyHeaderImg src={heartF} alt="Like this wishlist" onClick={this.onClick}/> :
                        <StyHeaderImg src={heartE} alt="Remove this wishlist from my likes" onClick={this.onClick}/>
                    }
                </StyUserHeader>
                <StyUserContent>
                    <Item wishList={this.props.index} index={0} />
                    <Item wishList={this.props.index} index={1} />
                    <Item wishList={this.props.index} index={2} />
                    <Item wishList={this.props.index} index={3} />
                    <Item wishList={this.props.index} index={4} />
                    <StyContentArrow src={rArrow} alt="Cycle content right"/>
                </StyUserContent>
            </StyUserlist>
        );
    }
}

export default withToastManager(Userlist);