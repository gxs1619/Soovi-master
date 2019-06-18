import React, { Component } from 'react';
import styled from 'styled-components';
import { withToastManager } from 'react-toast-notifications';
import box from '../../../Misc/box.jpg';
import add from '../../../Misc/plus.png';
import check from '../../../Misc/check.png';
import MyList from '../../../Misc/MyList';

//width: 175px;
//height: 180px;
const StyItem = styled.div`
    background-color: #CED4DB;
    width: 10vw; 
    height: 24vh;
    margin-left: 2px;
    margin-right: 80px;
    margin-top: 4px;
    margin-bottom: 4px;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const StyImg = styled.img`
    width: 135px;
    margin-bottom: 5px;
    flex: 4;
`;

const StyLabel = styled.div`
    text-align: center;
    background-color: #C0CCDA;
    width: 100%;
    flex: 1;
    display: flex;
`;

const StyLabelImg = styled.img`
    flex: 0.5;
    height: 100%;
    
    &:hover{
        background-color: rgba(150, 159, 170, 0.34);
    }
`;

const StyLabelTxt = styled.div`
    flex: 5;
`;

class Item extends Component {

    constructor(props) {
        super(props);
        this.state = {
            itemName:MyList.items[this.props.index].name,
            itemLink:MyList.items[this.props.index].link,
            checkMark:MyList.items[this.props.index].checkMark
        };
        console.log(MyList.items[this.props.index].name);

        this.onClick = this.onClick.bind(this);
    }

    onClick(){
        const {toastManager} = this.props;
        //if the checkmark is clicked on, remove from wishlist
        if(this.state.checkMark){
            this.setState({checkMark:false, itemName:""});
            MyList.removeItem(this.props.index);
            toastManager.add('Removed this item from your wishlist.', {
                appearance: 'warning',
                autoDismiss: true,
            });
        }
        //otherwise, warn for empty item
        else{
            toastManager.add("Can't add blank items to the wishlist!", {
                appearance: 'warning',
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
                    <StyLabelTxt>{this.state.itemName}</StyLabelTxt>
                </StyLabel>
            </StyItem>
        );
    }
}

export default withToastManager(Item);