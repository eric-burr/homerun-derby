import React, { Component } from 'react'

export class Addhitter extends Component {

    newHitter = () => {
        console.log('join the list')
    }
    render() {
        return (
            <div>
                <form> 
                <input name='First Name'/>
                <input name='Last Name'/>
                <input name='Email'/>
                <button onSubmit={this.newHitter}>Join!</button>
            </form>
            </div>
        )
    }
}

export default Addhitter
