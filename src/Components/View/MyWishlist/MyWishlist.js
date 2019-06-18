import React, { Component } from 'react';
import styled from 'styled-components';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Item from './Item.js';

//CSS goes here
const StyMyWishlist = styled.div`
    display: flex;
    flex-direction: column;
`;
const StyHeader = styled.div`
    display: center;
    text-align: center;
    background-color: rgba(150, 159, 170, 0.34);
    font-size: 35px;
    width: 100%;
    height: 110px;
    margin-left: 1%;
    margin-top: 1%;
    flex: 2;
    display: flex;
`;

const StyHeaderTitle = styled.div`
    flex: 10;
`;

const StyHeaderShare = styled.div`
    flex: 1;
`;

const StyItems = styled.div`
    text-align: center;
    background-color: rgb(153, 159, 168, 0.2);
    margin-left: 1%;
    flex: 2;
    display: flex;
    flex-wrap: wrap;
`;

class MyWishlist extends Component {
    constructor(props){
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            dropdownOpen: false
        };

    }
    toggle() {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
    }

    render(){
        function linkClicked() {
            return undefined;
        }

        return(
            (
                <StyMyWishlist>
                    <StyHeader><StyHeaderTitle>My Wishlist</StyHeaderTitle>
                        <StyHeaderShare>
                        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                            <DropdownToggle color={"primary"}caret>
                                Share
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem tag="a" href="www.facebook.com" onClick={linkClicked()}>Facebook</DropdownItem>
                                <DropdownItem tag="a" href="www.twitter.com">Twitter</DropdownItem>
                                <DropdownItem tag="a" href="/">Copy Link</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                        </StyHeaderShare>
                    </StyHeader>
                    <StyItems>
                        <Item index = "0"/>
                        <Item index= "1"/>
                        <Item index="2"/>
                        <Item index="3"/>
                        <Item index="4"/>
                    </StyItems>
                </StyMyWishlist>
                ))
    }
}

export default MyWishlist;