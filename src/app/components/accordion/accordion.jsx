import React, {useState, useRef} from "react";

import "./accordion.scss";

function Accordion(props) {
    // check data passed through is an array
    const checkArray = Array.isArray(props.data)

    // reference the accordion content
    const content = useRef(null);

    // set the initial state of the accordion
    const [activeIndex, setActiveIndex] = useState(-1);

    // toggle the accordion based on index
    function toggleAccordion(index) {
        activeIndex === index ? setActiveIndex(-1) : setActiveIndex(index)
    }

    return (
        <div className="accordion">
            {checkArray ? (
                // map through data passed in prop
                props.data.map((item, index) => {
                    // check if index is equal to the active index, if it is, add an active class
                    const isActive = activeIndex === index
                    return (
                        <div className="accordion__item" key={index}>
                            <div className={`accordion__header ${isActive ? "active" : ""}`} onClick={() => toggleAccordion(index)}>
                                {item.name}
                            </div>
                            <div ref={content} className={`accordion__content ${isActive ? "active" : ""}`}>
                                <p>{item.tagline}</p>
                                <p>{item.description}</p>
                                <p>Date first brewed: {item.first_brewed}</p>
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

export default Accordion;
