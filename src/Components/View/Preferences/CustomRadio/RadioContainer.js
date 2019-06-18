import React, { Component } from 'react';
import { Button } from 'reactstrap';

const StyRadioContainer = {
    position: 'relative',
    top: '0%',
    height: '50%',
    width: 'auto',
    outline: 'none',
};

const StyButtonWrapper = {
    position: 'relative',
    display: 'inline-block',
    textAlign: 'center',
    outline: 'none',
    height: '100%',
    width: '20%',
};

const StyButton = {
    color: '#47525E',
    fontSize: '18pt',
    width: 'auto',
    height: 'auto',
    whiteSpace: 'nowrap',
    backgroundColor: 'rgba(0,0,0,0)',
    borderColor: 'rgba(0,0,0,0)',
    outline: 'none',
    cursor: 'pointer',
};

class RadioContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            current: this.props.settingInfo.default,
            value: 0
        };
    }

    handleClick(param, event) {
        event.preventDefault();
        this.setState((priorState, props) => ({ current: param }));
        // eslint-disable-next-line
        this.props.tm("Updated " + this.props.settingInfo.name + " to " + param);
        console.log(event);
    }

    handleMouseDown(event) {
        event.preventDefault();
    }

    determineButtonText(value, option) {
        var text = value;
        if (this.state.current === option) {
            text = "[ " + value + " ]";
        }
        return text;
    }

    render(){
        
        this.optSelection = this.props.settingInfo.options.map((item) => 
            //<RadioOption handler={this.handleClick.bind(this, item.option)} selected={this.state.current === item.option} text={item.val}/>
            <div style={StyButtonWrapper}>
                <Button style={StyButton} onMouseDown={this.handleMouseDown.bind(this)} onClick={this.handleClick.bind(this, item.option)}>{this.determineButtonText(item.val, item.option)}</Button>
            </div>
            );
        return(
            <div style={StyRadioContainer}>{this.optSelection}</div>
        );
    }
}

export default RadioContainer;