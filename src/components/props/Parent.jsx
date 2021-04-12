import Child from './Child'

import React, { Component } from 'react'

export class Parent extends Component {
      
    state = {
        hero : 'Iron Man',
        img: 'https://mangvietnamobile.com/wp-content/uploads/2020/10/7.jpg',
        say: 'I love u 3000',
    }

    render() {
        return (
            <div className="text-center">
            <h1>Parent</h1>
            <Child theHero = {this.state}>
                <img src="https://mangvietnamobile.com/wp-content/uploads/2020/10/7.jpg" alt="true"/>
            </Child>
        </div>
        )
    }
}

export default Parent
