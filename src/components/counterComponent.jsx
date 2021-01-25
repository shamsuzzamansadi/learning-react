import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 0,
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

    handleIncrement = () => {
        this.setState({count: this.state.count + 1});
    } 
    
    render() { 
        return ( 
            <React.Fragment>
                <img src={this.state.imageUrl} alt="" />
                <span style={this.styles} className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button 
                    onClick={this.handleIncrement} 
                    className="btn btn-secondary btn-sm"
                >
                    Increment
                </button>
                {this.renderTags()}
            </React.Fragment>
         );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.state.count === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const { count } = this.state; //destructuring
        return count === 0 ? 'Zero' : count;
    }
}
 
export default Counter;