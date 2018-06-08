import React, { Component } from 'react';

class Tree extends Component {
    constructor(props){
        super(props);
    }


    render(){
        return (
            this.props.data.map((dir, index)=>{
                return(
                    <ul key={index}>
                        {
                            dir.map((subDir, i) => {
                                return (
                                    <li key={i}>{subDir}</li>
                                );
                            })
                        }
                    </ul>
                )
            })
        );
    }
}

export default Tree;