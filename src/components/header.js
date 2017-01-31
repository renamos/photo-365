import React from 'react'

export default class Header extends React.Component {
    render() {
        return (
            <div>
                <header id="journal-title-container">
                    <h1 id="journal-title">Everyday <i className="fa fa-camera-retro" aria-hidden="true"></i> Ramos</h1>
                    <h2 id="journal-caption">our life through photos -  one day at a a time</h2>
                </header>
            </div>)
    }
}