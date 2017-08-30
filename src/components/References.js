import React, { Component } from 'react'
import references from '../referencesObj'
import Reference from './Reference'

class References extends Component {
    render() {
        return (
            <div>
                {console.log(references)}
                <p>Hello, these are my references</p>
                {references.map(item => (<Reference reference={item} />))}
            </div>
        )
    }
}

export default References