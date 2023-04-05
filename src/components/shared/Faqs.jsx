import React from "react";


export default function Faqs({title, content, headingId, collapseId}) {
    return (
        <>
            <div className="accordion-item">
                <h2 className="accordion-header" id={headingId}>
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#${collapseId}`}
                        aria-expanded="false" aria-controls="collapse-1">{title}</button>
                </h2>
                <div className="accordion-collapse collapse" aria-labelledby={headingId} data-bs-parent="#accordionFAQ" id={collapseId}>
                    <div className="accordion-body text-light opacity-70">
                        {content}
                    </div>
                </div>
            </div>
        </>
    )
}