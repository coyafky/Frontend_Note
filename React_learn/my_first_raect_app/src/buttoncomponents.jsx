import React from 'react';

class MyComponent extends React.Component {

    handleclick =(e)=> {
        alert('clicked'+e);
    }
    render(){
        return (
            <div>
                <button onClick={this.handleclick('hello')}>
                    Click me
                </button>
            </div>
        )
    }
}

export default MyComponent;