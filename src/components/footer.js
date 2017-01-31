import React from 'react';

export default class Footer extends React.Component{
    render(){
        return(
            <div id="footer-container">
                <footer>
                    <ul id="footer">
                        <li>created by Rene Ramos</li>
                        <li>Front-end Web Developer</li>
                        <li>Copyright 2017 Uppr Left Creative</li>
                        <li><a href="https://github.com/renamos" target="_blank"><i className="fa fa-github fa-2x" aria-hidden="true"></i></a></li>
                    </ul>
                </footer>
            </div>
        )
    }
}