import { useRouter } from "next/router";
import React, { useEffect } from "react";


export default function UploadPicture() {
    const router = useRouter()
    const FilePondPluginFileValidateType = require('../../../assets/js/filepond-file-validate-type')
    const FilePondPluginFileValidateSize = require('../../../assets/js/filepond-file-validate-size')
    const FilePondPluginImagePreview = require('../../../assets/js/filepond-image-preview')
    const FilePondPluginImageCrop = require('../../../assets/js/filepond-image-crop')
    const FilePondPluginImageResize = require('../../../assets/js/filepond-image-resize')
    const FilePondPluginImageTransform = require('../../../assets/js/filepond-image-transform')
    const FilePond = require('../../../assets/js/filepond')
    useEffect(() => {
        var e = document.querySelectorAll(".file-uploader");
        if (0 !== e.length) {
            "undefined" != typeof FilePondPluginFileValidateType && FilePond.registerPlugin(FilePondPluginFileValidateType),
                "undefined" != typeof FilePondPluginFileValidateSize && FilePond.registerPlugin(FilePondPluginFileValidateSize),
                "undefined" != typeof FilePondPluginImagePreview && FilePond.registerPlugin(FilePondPluginImagePreview),
                "undefined" != typeof FilePondPluginImageCrop && FilePond.registerPlugin(FilePondPluginImageCrop),
                "undefined" != typeof FilePondPluginImageResize && FilePond.registerPlugin(FilePondPluginImageResize),
                "undefined" != typeof FilePondPluginImageTransform && FilePond.registerPlugin(FilePondPluginImageTransform);
            for (var t = 0; t < e.length; t++) FilePond.create(e[t])
        }
    }, [router])
    return (

        <div className="filepond--root file-uploader border-light bg-faded-light filepond--hopper"
            data-style-panel-layout="compact" data-style-button-remove-item-position="left"
            data-style-button-process-item-position="right" data-style-load-indicator-position="right"
            data-style-progress-indicator-position="right" data-style-button-remove-item-align="false"
            style={{ "height": "160px" }}>
            <input className="filepond--browser" type="file" id="filepond--browser-uchbpss9o"
                aria-controls="filepond--assistant-uchbpss9o" aria-labelledby="filepond--drop-label-uchbpss9o"
                accept="image/png,image/jpeg" name="filepond" />
            <a className="filepond--credits" aria-hidden="true"
                href="https://pqina.nl/" target="_blank" rel="noopener noreferrer" style={{ "transform": "translateY(152px)" }}>
                Powered by PQINA</a>
            <div className="filepond--drop-label" style={{ "transform": "translate3d(0px, 0px, 0px)", "opacity": "1" }}>
                <label for="filepond--browser-uchbpss9o" id="filepond--drop-label-uchbpss9o" aria-hidden="true">
                    <i className="d-inline-block fi-camera-plus fs-2 text-light text-muted mb-2"></i>
                    <br />
                    <span className="fw-bold text-light opacity-70">Change picture</span>
                </label>
            </div>
            <div className="filepond--list-scroller" style={{ "transform": "translate3d(0px, 0px, 0px)" }}>
                <ul className="filepond--list" role="list"></ul>
            </div>
            <div className="filepond--panel filepond--panel-root" data-scalable="true">
                <div className="filepond--panel-top filepond--panel-root"></div>
                <div className="filepond--panel-center filepond--panel-root" style={{ "transform": "translate3d(0px, 8px, 0px) scale3d(1, 1.44, 1)" }}></div>
                <div className="filepond--panel-bottom filepond--panel-root" style={{ "transform": "translate3d(0px, 152px, 0px)" }}></div>
            </div>
            <span className="filepond--assistant" id="filepond--assistant-uchbpss9o" role="status" aria-live="polite" aria-relevant="additions">
            </span>
            <div className="filepond--drip">
            </div>
            <fieldset className="filepond--data"></fieldset>
        </div>
    )
}