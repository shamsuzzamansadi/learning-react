import React, { Component } from 'react';
import Counter from './counterComponent';

class Counters extends Component {
    state = {
        counters: [
            { id:1, value: 4 },
            { id:2, value: 0 },
            { id:3, value: 0 },
            { id:4, value: 0 },
        ]
    };

    handleDelete = (counterId) => {
        const counters = this.state.counters.filter(c => c.id !== counterId);
        console.log('Event Handler Called ', counterId);
        // this.setState({  counters: counters }); since the key and value have same name we can simplify this
        this.setState({ counters });
    }

    render() { 
        return (
            <div>
                { this.state.counters.map(counter => (
                    // <Counter 
                    //     Key={counter.id} 
                    //     onDelete={this.handleDelete} 
                    //     value={counter.value} 
                    //     id={counter.id}
                    // >
                    //  here those value and the id are from the counter object and if this object have in the 
                    //  future new arguments then you need more arguments so to avoid this we are sending
                    //  the whole object to set and check it's state
                    //     <h3>Counter From Counters #{counter.id}</h3>
                    // </Counter>
                    <Counter 
                        Key={counter.id} 
                        onDelete={this.handleDelete} 
                        counter={counter} 
                    >
                        <h3>Counter From Counters #{counter.id}</h3>
                    </Counter>
                ))}
            </div>
        );
    }
}
 
export default Counters ;