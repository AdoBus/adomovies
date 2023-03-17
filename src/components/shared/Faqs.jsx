import React from "react";


export default function Faqs({title, content, headingId, collapseId}) {
    return (
        <>
            <div class="accordion-item">
                <h2 class="accordion-header" id={headingId}>
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#${collapseId}`}
                        aria-expanded="false" aria-controls="collapse-1">{title}</button>
                </h2>
                <div class="accordion-collapse collapse" aria-labelledby={headingId} data-bs-parent="#accordionFAQ" id={collapseId}>
                    <div class="accordion-body text-light opacity-70">
                        {content}
                    </div>
                </div>
            </div>
        </>
    )
}