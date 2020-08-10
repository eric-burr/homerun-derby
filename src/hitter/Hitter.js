import React, { Component } from 'react'
import Addhitter from './Addhitter'

export class Hitter extends Component {
    constructor(props) {
        super(props)
        this.state= {
            signup: true,
            needtoHit: []
        }
    }

    // pitches = () => {
    //     counter = 10
    //     if(button==10) {
    //         move first list
    //     }
    // }

    // pitchesTwo = () => {
    //     if(hits >= 10){
    //         move to 1st list
    //     }
    // }

    // addnew = () => {
    //     add to list number 2
    // }

    beHitter = () => {
        console.log("new hitter")
        this.setState({signup: !this.state.signup})
    }
    onChange = (e) => 
        this.setState({
            [e.target.name]: e.target.value
        });

    render() {
        return (
            <div>
                <div>
                    <button onClick={this.beHitter}>Be a Hitter</button>
                </div>
                    {/* ternary operator  */}
                {this.state.signup ? <div></div> :
                <Addhitter change={this.onChange}/>}

              Results<ul> 
                    <li>Bob</li>
                    <li>Sally</li>
                    <li>Sue</li>
                    <li>{}</li>
                </ul>
                Up to bat<ul> 
                    <div onClick={this.click} >Eric</div>
                    <li>Steve</li>
                </ul>
                <button>hit</button><br/>
                <button>homerun</button>
            </div>
        )
    }
}

export default Hitter
