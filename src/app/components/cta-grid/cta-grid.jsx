import React from "react";

function CTAGrid(props) {
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
