import React, { Component } from 'react'

export class Addhitter extends Component {
    constructor(props){
        super(props)
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            havehit: []
        }
    }

    newHitter = () => {
        console.log('join the list')
        this.state.firstName.push(this.state.havehit)
        console.log('have hit', this.state.havehit)
    }

    onChange = (e) => 
        this.setState({
            [e.target.name]: e.target.value
        });
    

    render() {
        console.log('props', this.props.change)
        return (
            <div>
                <form> 
                <input onChange={this.props.change} name='First Name' value={this.props.firstName}/>
                <input onChange={this.onChange} name='Last Name' value={this.props.lastName}/>
                <input onChange={this.onChange} name='Email' value={this.props.email}/>
                <button onSubmit={this.newHitter}>Join!</button>
            </form>
            </div>
        )
    }
}

export default Addhitter
