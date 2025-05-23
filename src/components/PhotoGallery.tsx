import React, { useState } from "react";
import "../styles/PhotoGallery.css";

interface Photo {
  id: number;
  url: string;
  caption: string;
}

const PhotoGallery: React.FC = () => {
  const [activePhoto, setActivePhoto] = useState<Photo | null>(null);

  const photos: Photo[] = [
    {
      id: 1,
      url: "https://images.pexels.com/photos/1729931/pexels-photo-1729931.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      caption: "Birthday celebrations from last year",
    },
    {
      id: 2,
      url: "https://images.pexels.com/photos/796606/pexels-photo-796606.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      caption: "Balloons",
    },
    {
      id: 3,
      url: "https://images.pexels.com/photos/1793037/pexels-photo-1793037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      caption: "Family gathering",
    },
    {
      id: 4,
      url: "https://images.pexels.com/photos/40815/youth-active-jump-happy-40815.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      caption: "Jumping for joy",
    },
    {
      id: 5,
      url: "https://images.pexels.com/photos/1405761/pexels-photo-1405761.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      caption: "Surprise party",
    },
    {
      id: 6,
      url: "https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      caption: "Making memories",
    },
  ];

  const openPhoto = (photo: Photo) => {
    setActivePhoto(photo);
  };

  const closePhoto = () => {
    setActivePhoto(null);
  };

  return (
    <section className="photo-gallery" id="gallery">
      <div className="container">
        <h2 className="section-title">Birthday Memories</h2>
        <p className="section-description">
          A collection of special moments from birthdays past
        </p>

        <div className="gallery-grid">
          {photos.map((photo) => (
            <div
              key={photo.id}
              className="gallery-item"
              onClick={() => openPhoto(photo)}
            >
              <img src={photo.url} alt={photo.caption} />
              <div className="gallery-caption">
                <p>{photo.caption}</p>
              </div>
            </div>
          ))}
        </div>

        {activePhoto && (
          <div className="photo-modal" onClick={closePhoto}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="close-button" onClick={closePhoto}>
                ×
              </button>
              <img src={activePhoto.url} alt={activePhoto.caption} />
              <p className="modal-caption">{activePhoto.caption}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PhotoGallery;
