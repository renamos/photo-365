import React from 'react';


export default class Main extends React.Component {
    render() {
        return (
            <div>
                <main>
                    <div id="main-image-container">
                        <img id="main-image" className="wow slideInLeft" data-wow-duration="2s" data-wow-delay="5s"
                             src="http://res.cloudinary.com/photog/image/upload/v1483487384/january2_xohgah.jpg"
                             alt="Dugg"/>
                    </div>
                        <div className="main-image-text">main image text</div>
                        <div className="main-image-text"><a
                            href="http://res.cloudinary.com/photog/image/upload/v1483487384/january2_xohgah.jpg">download
                            full resolution</a></div>
                        <div className="main-image-caption">main image caption</div>

                </main>
            </div>
        )
    }
}