import React, { Component } from 'react';
import styled from 'styled-components';
import NavItem from "./Nav/NavItem";
import PAGES from "../Misc/pages";

const StyNav = styled.div`
    float: left;
    position: static;
    text-align: center;
    height: 100vh;
    width: 15vw;
    background-color: rgba(150, 159, 170, 0.34);
    display: flex;
    flex-direction: column;
`;

class Nav extends Component {
    render() {
        return (
            <StyNav>
                    <NavItem name = {PAGES.ADDITEM} updatePage = {this.props.updatePage}/>
                    <NavItem name = {PAGES.ADDEVENT} updatePage = {this.props.updatePage}/>
                    <NavItem name = {PAGES.MYWISHLIST} updatePage = {this.props.updatePage}/>
                    <NavItem name = {PAGES.EVENTS} updatePage = {this.props.updatePage}/>
                    <NavItem name = {PAGES.FRIENDS} updatePage = {this.props.updatePage}/>
            </StyNav>
        );
    }
}

export default Nav;
