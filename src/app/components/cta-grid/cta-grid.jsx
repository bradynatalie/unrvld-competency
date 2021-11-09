import React from "react";

function CTAGrid(props) {
    // check data passed through is an array
    const checkArray = Array.isArray(props.data)

    return (
        <div className="cta-grid">
            {checkArray ? (
                props.data.map((item, index) => {
                    return (
                        <div className="cta-grid__item" key={index}>
                            <div className="cta-grid__image" style={{backgroundImage: `url(${item.image_url})`}}>
                            </div>
                            <div className="cta-grid__header">
                                <h3>{item.name}</h3>
                                <div className="cta-grid__subheader">
                                    <p>{item.tagline}</p>
                                    <p>ABV: {item.abv}</p>
                                </div>
                                <a href="https://www.brewdog.com/uk/" className="cta-grid__button" target="_blank" rel="noreferrer">Find out more</a>
                            </div>
                        </div>
                    )
                })
            ) : (
                null
            )}
        </div>
    );
}

export default CTAGrid;
