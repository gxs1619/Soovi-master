import React, { Component } from 'react';
import styled from 'styled-components';

const StySearchBar = styled.div`
    margin-top: 65px;
    cursor: pointer;
    flex: 2;
`;

const StyInput = styled.input`
    width: 350px;
    float: right;
    margin-right: 30px;
`;

class SearchBar extends Component {
    render() {
        return (
            <StySearchBar/>
        );
    }
}

export default SearchBar;