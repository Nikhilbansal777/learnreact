import React, { Component } from "react";
import Counter from "./components/counter";
import NavBar from "./components/navbar";

class Base extends Component {

    state = {
        counter: [
            { id: 0, value: 0, selected: true },
            { id: 1, value: 0, selected: true },
            { id: 2, value: 0, selected: true },
            { id: 3, value: 0, selected: true },
            { id: 4, value: 0, selected: true }
        ]
    };

    constructor(props) {
        super(props);
        console.log("Contructor", this.props);
    }

    componentDidMount() {
        console.log("mounting hook");
    }

    handleDelete = (id) => {
        const c = this.state.counter.filter(counter => counter.id !== id);
        this.setState({ counter: c });
    };

    handleIncreament = (counter) => {
        const counters = [...this.state.counter]; // this is done because we cannot modify state counter directly
        const index = counters.indexOf(counter);
        counters[index].value++;
        console.log(this.state.counter);
        this.setState({ counters });
    };

    resetCountToZero = (id) => {
        const counter = this.state.counter.map((counter) => {
            counter.value = 0;
            return counter;
        });
        this.setState({ counter });
    };

    render() {
        console.log("Render");
        return (

            <React.Fragment>
                <NavBar counter={this.state.counter.filter((counter) => counter.value > 0).length}></NavBar>
                <main className="container">
                    <button onClick={this.resetCountToZero}>Reset</button>

                    {this.state.counter.map(counter =>
                        <Counter key={counter.id} counter={counter}
                            onIncreament={this.handleIncreament}
                            onDelete={this.handleDelete}>
                            <h3>Counter #{counter.id}</h3>
                        </Counter>
                    )
                    }
                </main>
            </React.Fragment>
        );
    }
}

export default Base;