import React, { Component } from 'react';
import styled from 'styled-components';
import { withToastManager } from 'react-toast-notifications';
import box from '../../../Misc/box.jpg';
import add from '../../../Misc/plus.png';
import check from '../../../Misc/check.png';
import List1 from "../../../Misc/List1";
import List2 from "../../../Misc/List2";
import List3 from "../../../Misc/List3";
import MyList from "../../../Misc/MyList";

const StyItem = styled.div`
    background-color: #CED4DB;
    width: 175px;
    margin-left: 2px;
    margin-right: 2px;
    margin-top: 2px;
    margin-bottom: 4px;
    flex: 4;
    display: flex;
    flex-direction: column;
`;

const StyImg = styled.img`
    width: 55%;
    margin-left: 25%;
    margin-bottom: 5px;
    flex: 4;
`;

const StyLabel = styled.div`
    text-align: center;
    background-color: #C0CCDA;
    flex: 1;
    display: flex;
`;

const StyLabelImg = styled.img`
    flex: 1;
    height: 100%;
    
    &:hover{
        background-color: rgba(150, 159, 170, 0.34);
    }
`;

const StyLabelTxt = styled.div`
    flex: 5;
`;

class Item extends Component {
    determineList(){
        if(this.props.wishList === 0){
            return List1;
        }
        else if(this.props.wishList === 1){
            return List2;
        }
        else{
            return List3;
        }
    }

    constructor(props) {
        super(props);
        this.state = {checkMark : false};
        this.list = this.determineList();
        this.onClick = this.onClick.bind(this);
    }

    onClick(){
        const {toastManager} = this.props;
        if(this.state.checkMark){
            this.setState({checkMark:false});
            toastManager.add('Removed this item from your wishlist.', {
                appearance: 'warning',
                autoDismiss: true,
            });
        }
        else{
            this.setState({checkMark:true});
            MyList.homeItem(this.list.items[this.props.index].name);
            toastManager.add('Added this item to your wishlist!', {
                appearance: 'success',
                autoDismiss: true,
            });
        }
    };

    render(){
        return(
            <StyItem>
                <StyImg src={box} alt="Wishlist item"/>
                <StyLabel>
                    {this.state.checkMark ?
                        <StyLabelImg src={check} alt="Add this item to my wishlist" onClick={this.onClick}/> :
                        <StyLabelImg src={add} alt="Remove this added item from my wishlist" onClick={this.onClick}/>
                    }
                    <StyLabelTxt>{this.list.items[this.props.index].name}</StyLabelTxt>
                </StyLabel>
            </StyItem>
        );
    }
}

export default withToastManager(Item);