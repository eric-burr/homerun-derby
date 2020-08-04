import React, { Component } from 'react'

export class Hitter extends Component {

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

    render() {
        return (
            <div>
                <ul>
                    <li>
                        list of who has hit
                    </li>
                </ul>
                <ul>
                    <li>
                        list of who is yet to hit
                    </li>
                </ul>
                <button>hit</button><br/>
                <button>homerun</button>

                <div>
                    add new hitter
                    <button>add</button>
                </div>
            </div>
        )
    }
}

export default Hitter
