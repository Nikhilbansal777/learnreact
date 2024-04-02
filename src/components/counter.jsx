import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './counter.css';
export default class Counter extends Component {

    // constructor() {
    //     super();
    //     this.handleIncreament = this.handleIncreament.bind(this);
    // }

    // handleIncreament = () => {
    //     // console.log("clicked..........", this); // to use this here inside a function we need to make the function either arrow function or  we need to bind the method with constructor of this class
    //     this.setState({ count: this.props.counter.value + 1 }, () => {
    //     });
    // };


    render() {
        const { children, onIncreament, onDelete, counter } = this.props;
        console.log(this.props);
        let classes = counter.value === 0 ? 'danger' : 'success';
        return (
            <React.Fragment>
                {children}

                <div className='counter d-flex mb-3 mt-3'>
                    <span className={classes}>{this.showLabelOrValueOfCounter()}</span>
                    <button onClick={() => onIncreament(counter)} className='btn btn-primary'>Increament</button>
                    <button className="btn btn-danger" onClick={() => onDelete(counter.id)}>
                        Delete
                    </button>
                </div>
                {/* <ul>
                    {this.state.tags.length === 0 && "Please create a new Tag"}
                    {this.state.tags.length === 0 ? <p>No Tags</p> : this.state.tags.map((item, index) => <li key={index}>{item}</li>)}
                </ul> */}
            </React.Fragment>
        );
    }
    showLabelOrValueOfCounter() {
        const count = this.props.counter.value;
        return count === 0 ? "ZERO" : count;
    }
};