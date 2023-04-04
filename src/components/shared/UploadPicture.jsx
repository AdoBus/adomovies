import ImageUploading from 'react-images-uploading';
import { useState, useEffect } from 'react';

export default function UploadPicture({ setImage }) {
    const [imageUrl, setImageUrl] = useState(null);

    const handleImageInputChange = (e) => {
        const selectedImage = e.target.files[0]
        setImageUrl(URL.createObjectURL(selectedImage))
        setImage(selectedImage)
    }

    const removeImage = () => {
        setImageUrl(null)
        setImage(null)
    }

    return (
        <div className="App">
            <div
                className="card border-light card-light p-3 bg-position-top-center bg-repeat-0"
                style={{
                    backgroundImage: imageUrl
                        ? `url(${imageUrl})`
                        : "",
                    backgroundSize: "cover",
                }}
            >
                {imageUrl ? (
                    <div
                        className="text-end text-secondary"
                        style={{ height: 146 }}
                        role="button"
                        onClick={() => removeImage()}
                    >
                        <i className="fi fi-x"></i>
                    </div>
                ) : (
                    <div className="card-body text-center">
                        <label htmlFor="avatarInput">
                            <i className="d-inline-block fi-camera-plus fs-2 text-muted mb-2"></i>
                            <br />
                            <span className="fw-bold">Change avatar</span>
                        </label>
                        <input
                            id="avatarInput"
                            accept="image/*"
                            className="visually-hidden"
                            type="file"
                            onChange={handleImageInputChange}
                        />
                    </div>
                )}
            </div>
        </div>
    );
}
