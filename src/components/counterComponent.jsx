import React, { Component } from 'react';

class Counter extends Component {
    state = {
        value: this.props.counter.value,
        imageUrl: 'https://picsum.photos/200',
        tags: ["tag1","tag2","tag3"]
    };

    styles = {
        fontSize: 10,
        fontWeight: 'bold'
    }

    // constructor(){
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this);
    // }

    renderTags(){
        if(this.state.tags.length === 0) return <p>There are no tags!</p>

        return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
    }

    //arrow function is simpler way to bind objects with it's main class then 
    // writing those constructor functions again and again

    handleIncrement = (product) => {
        // console.log(product);
        this.setState({value: this.state.value + 1});
    } 
    
    render() { 
        console.log('props', this.props);
        return ( 
            <React.Fragment>
                <img src={this.state.imageUrl} alt="" />
                {this.props.children}
                <h4>This is from the children # {this.props.id}</h4>
                <span style={this.styles} className={this.getBadgeClasses()}>{this.formatCount()}</span>
                {/* <button 
                    onClick={this.handleIncrement} 
                    className="btn btn-secondary btn-sm"
                > */}
                <button 
                    onClick={() => this.handleIncrement({id:1}) } 
                    className="btn btn-secondary btn-sm"
                >
                    Increment
                </button>
                <button 
                    onClick={ () => this.props.onDelete(this.props.counter.id) } 
                    className="btn btn-danger btn-sm m-2"
                >
                    Delete
                </button>
                {this.renderTags()}
            </React.Fragment>
         );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.state.value === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const { value } = this.state; //destructuring
        return value === 0 ? 'Zero' : value;
    }
}
 
export default Counter;