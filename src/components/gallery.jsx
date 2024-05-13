import { Image } from "./image";
import React from "react";

export const Gallery = (props) => {
    return (
        <div id="portfolio" className="text-center">
            <div className="container">
                <div className="section-title">
                    <h2>Play!</h2>
                    <p>
                        Try out Pixel Valley in these free scenarios!
                    </p>
                    <p>
                        Click through to explore:
                    </p>
                </div>
                <div className="row">
                    <div className="portfolio-items">
                        {props.data
                            ? props.data.map((d, i) => (
                                <div
                                    key={`${d.title}-${i}`}
                                    className="col-sm-6 col-md-4 col-lg-4"
                                >
                                    <Image
                                        title={d.title}
                                        description={d.description}
                                        id={d.id}
                                        largeImage={d.largeImage}
                                        smallImage={d.smallImage}
                                    />
                                </div>
                            ))
                            : "Loading..."}
                    </div>
                </div>
            </div>
        </div>
    );
};
