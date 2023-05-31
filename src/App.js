import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import './App.css';

// Sample data
const initialImages = [
    { id: 1, url: '/test_images/beach.jpg', likes: 0 },
    { id: 2, url: '/test_images/farm.jpeg', likes: 0 },
    { id: 3, url: '/test_images/amsterdam.jpeg', likes: 0 },
    { id: 4, url: '/test_images/gkotzostrena.jpg', likes: 0 },
    { id: 3, url: '/test_images/hair_salon.jpeg', likes: 0 },
    { id: 5, url: '/test_images/london.jpg', likes: 0 },
    { id: 6, url: '/test_images/palia_spitia.jpeg', likes: 0 },
    { id: 7, url: '/test_images/street2.jpeg', likes: 0 },
    { id: 8, url: '/test_images/street3.jpg.jpeg', likes: 0 },
    { id: 9, url: '/test_images/street.jpeg', likes: 0 },
    { id: 10, url: '/test_images/trena2.jpg', likes: 0 },
    { id: 11, url: '/test_images/trena.jpg', likes: 0 },
    { id: 12, url: '/test_images/tzalliaschorus.jpg', likes: 0 },
    { id: 13, url: '/test_images/tzalliasdromos.jpg', likes: 0 },
    { id: 14, url: '/test_images/tzallias.jpg', likes: 0 },


    // add more image objects...
];


function App() {
    const [images, setImages] = useState(initialImages);
    const [selectedImage, setSelectedImage] = useState(null);
    const [isExpanded, setExpanded] = useState(false);


    const handleLike = (id) => {
        setImages((prevImages) =>
            prevImages.map((image) =>
                image.id === id ? { ...image, isLiked: !image.isLiked } : image
            )
        );
    
        setSelectedImage((prevSelectedImage) =>
            prevSelectedImage && prevSelectedImage.id === id
                ? { ...prevSelectedImage, isLiked: !prevSelectedImage.isLiked }
                : prevSelectedImage
        );
    };

    const handleSelect = (image) => {
        setSelectedImage(image);
        setExpanded(true);
    };

    const handleDeselect = () => {
        setSelectedImage(null);
        setExpanded(false);
    };



    return (
        <div className="App">
            <header className="App-header">
                <h1>Ptuxiakh Manwlh</h1>
            </header>
            <div className="masonry">
                {images.map(image => (
                    <div key={image.id} className="image-item" onClick={() => handleSelect(image)}>
                        <img src={image.url} alt="" />
                        <div className="image-item-info">
                            <button onClick={(e) => { e.stopPropagation(); handleLike(image.id); }}>
                                {image.isLiked ? "❤️" : "🤍"}
                            </button>
                        </div>
                    </div>
                ))}
                {selectedImage && isExpanded && (
                    <div className="expandedImage" onClick={(e) => e.target === e.currentTarget && handleDeselect()}>
                        <div className="expandedImageContainer">
                            <img src={selectedImage.url} alt="" />
                            <div className="image-item-info">
                                <button onClick={(e) => { e.stopPropagation(); handleLike(selectedImage.id); }}>
                                    {selectedImage.isLiked ? "❤️" : "🤍"}
                                </button>
                            </div>
                        </div>
                    </div>
                )}
    
            </div>
        </div>
    );
}

export default App;