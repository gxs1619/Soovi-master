import React, { Component } from 'react';
import styled from 'styled-components';

const StyTitle = styled.div`
  color: #FFFFFF;
  font-family: "Lato", "Segoe UI";
  font-size: 105px;
  font-weight: 700;
  line-height: 85px;
  width: 250px;
  padding-top: 8px;
  text-align: center;
  cursor: pointer;
  flex: 1.75;
`;

class Title extends Component {
    render() {
        return (
            <StyTitle onClick={() => this.props.updatePage(this.props.name)}>Soovi</StyTitle>
        );
    }
}

export default Title;