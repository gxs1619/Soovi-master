import React, { Component } from 'react';
import styled from 'styled-components';

import PAGES from '../Misc/pages';

import Home from "./View/Home/Home";
import MyWishlist from "./View/MyWishlist/MyWishlist";
import Preferences from "./View/Preferences/Preferences";
import AddItem from "./View/AddItem/AddItem";
import AddEvent from "./View/AddEvent/AddEvent";
import Events from "./View/Events/Events";
import Friends from "./View/Friends/Friends";
import Notifications from "./View/Notifications/Notifications";

const StyContent = styled.div`
    text-align: center;
`;

class Content extends Component {
    selectPage(){
        switch (this.props.currPage) {
            case PAGES.HOME:
                return <Home/>;
            case PAGES.ADDITEM:
                return <AddItem/>;
            case PAGES.ADDEVENT:
                return <AddEvent/>;
            case PAGES.EVENTS:
                return <Events/>;
            case PAGES.FRIENDS:
                return <Friends/>;
            case PAGES.MYWISHLIST:
                return <MyWishlist/>;
            case PAGES.PREFERENCES:
                return <Preferences/>;
            case PAGES.NOTIFICATIONS:
                return <Notifications/>;
            default:
                return <Home/>;
        }
    }

    render(){
        return(
            <StyContent>
                {this.selectPage()}
            </StyContent>
        );
    }
}

export default Content;
