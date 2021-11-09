import React, {useState, useRef} from "react";

import "./accordion.scss";

function Accordion(props) {
    const checkArray = Array.isArray(props.data)

    const content = useRef(null);

    const [activeIndex, setActiveIndex] = useState(-1);

    function toggleAccordion(index) {
        activeIndex === index ? setActiveIndex(-1) : setActiveIndex(index)
    }

    return (
        <div className="accordion">
            {checkArray ? (
                props.data.map((item, index) => {
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
