import React, { Component } from 'react'

export default class post extends Component {
    render() {
        return (
            <div>
                <p>
                    <b>Text: </b> <i>{this.props.content}</i>
                </p>
                <p>
                    <b> Post by : </b><i>{this.props.name}</i>
                </p>
            </div>
        )
    }
}
