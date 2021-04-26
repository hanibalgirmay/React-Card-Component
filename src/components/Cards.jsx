import React, { Component } from 'react'
import Card from './Card';
import './card.css'
import image from '../assets/Wild Oak_ Photo.jpg'

export default class Cards extends Component {
    render() {
        return (
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-4">
                        <Card imageSrc={image} title="Card Title" />
                    </div>
                    <div className="col-md-4">
                        <Card imageSrc={image} title="Card Two" />
                    </div>
                    <div className="col-md-4">
                        <Card imageSrc={image} title="lorem lorem" />
                    </div>
                </div>
            </div>
        )
    }
}
