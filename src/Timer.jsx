import React from 'react';

export default class Timer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            timer: null,
            counter: 90
        };
        this.tick = this.tick.bind(this);
    }

    componentDidMount() {
        let timer = setInterval(this.tick, 1000);
        this.setState({ timer });
    }

    tick() {
        if (this.state.counter > 0) {
            this.setState({
                counter: this.state.counter - 1
            })
        } else {
            clearInterval(this.state.timer);
            this.props.onSubmit();
        }
    }
    render() {
        return (
            <div className="timer" style={{color: (this.state.counter <=10) ? 'red' : 'white' }}>
                  Tiempo Restante  {Math.floor((this.state.counter / 60) % 60)}  : {Math.floor(this.state.counter % 60)} 
            </div>
        );
    }
}