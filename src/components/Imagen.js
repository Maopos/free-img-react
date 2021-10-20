import React from "react";

const Imagen = ({ imagen }) => {
  const { largeImageURL, likes, previewURL, tags, views } = imagen;

  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
      <div className="card">
        <img src={previewURL} alt={tags} className="card-img-top" />
        <div className="card-body">
          <p >❤️ {likes}</p>
          <p >Views {views}</p>
        </div>
        <div className="card-footer">
          <a href={largeImageURL} target="blank" className="btn btn-warning btn-block">Ver imagen</a>
        </div>
      </div>
    </div>
  );
};

export default Imagen;
