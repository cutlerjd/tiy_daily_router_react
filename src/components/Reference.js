import React, { Component } from 'react'
class Reference extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div className="Reference" key={this.props.name}>
                <ul>
                <li>Name: {this.props.reference.name}</li>
                <li>Relation: {this.props.reference.relation}</li>
                <li>Quote: {this.props.reference.quote}</li>                
                </ul>
            </div>
        )
    }
}

export default Reference