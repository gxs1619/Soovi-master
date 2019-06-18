import React, { Component } from 'react';
import styled from 'styled-components';

const StyNavItem = styled.li`
    padding-top: 30px;
    padding-left: 12px;
    cursor: pointer;
    list-style: none;
    color: #47525E;
    font-family: Lato;
    font-size: 25px;
    font-weight: 400;
    line-height: 39px;
    text-align: left;
    
    &:hover{
        background-color: rgba(150, 159, 170, 0.34);
    }
`;


class NavItem extends Component{
    render() {
        return (
            <StyNavItem onClick={() => this.props.updatePage(this.props.name)}>
                {this.props.name}
            </StyNavItem>
        );
    }
}

export default NavItem;