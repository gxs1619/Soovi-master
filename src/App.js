import React, { Component } from 'react';
import styled from 'styled-components';
import PAGES from './Misc/pages';

import Header from './Components/Header';
import Nav from "./Components/Nav";
import Content from "./Components/Content";


const StyApp = styled.div`
    text-align: center;
`;

class App extends Component {
    constructor(props){
        super(props);
        this.state = {currPage: PAGES.HOME};

        this.updatePage = this.updatePage.bind(this);
    }

    updatePage(newPage){
        this.setState({currPage: newPage});
    }

    render(){
      return(
        <StyApp>
            <Header updatePage={this.updatePage}/>
            <Nav updatePage={this.updatePage}/>
            <Content currPage = {this.state.currPage}/>
        </StyApp>
      );
    }
}

export default App;