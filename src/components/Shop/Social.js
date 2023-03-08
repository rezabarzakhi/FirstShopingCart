import React, { Component } from 'react'

export default class Social extends Component {
    render() {

        return (
            <li>
                <a href="#" target="_blank">
                    <img src={this.props.img} />
                </a>
            </li>
        )
    }
}
