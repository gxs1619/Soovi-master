import React, { Component } from 'react';
import styled from 'styled-components';

import Title from './Header/Title';
import SearchBar from './Header/SearchBar';
import Profile from "./Header/Profile";
import Notifications from './Header/Bell';
import Logo from './Header/Logo';

import PAGES from '../Misc/pages';

const StyHeader = styled.div`
    position: static;
    height: 100px;
    text-align: center;
    background-color: #F95F62;
    display: flex;
    flex-direction: row;
`;

class Header extends Component {
    render() {
        return (
            <StyHeader>
                <Logo name={PAGES.HOME} updatePage={this.props.updatePage}/>
                <Title name={PAGES.HOME} updatePage = {this.props.updatePage}/>
                <SearchBar/>
                <Notifications name={PAGES.NOTIFICATIONS} updatePage={this.props.updatePage}/>
                <Profile name={PAGES.PREFERENCES} updatePage={this.props.updatePage}/>
            </StyHeader>
        );
    }
}

export default Header;