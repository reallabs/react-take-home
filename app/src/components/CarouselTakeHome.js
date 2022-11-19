import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
function CarouselTakeHome(props) {
  const { medias } = props;
  return (
    <Carousel variant="dark" fade="false">
      {medias && medias.length > 0 ? medias.map(media =>
        <Carousel.Item key={media.cover_photo_url}>
          <div className="parent">
            <img
              className="d-block w-100 image1"
              src={media.cover_photo_url}
              alt={media.tracking_link}
            />
            {media.media_type === "video" ?
              <img
                className="video-play image2"
                src={require('../assets/logo/icons8-youtube-25.png')}
                alt="play"
              />

              : <></>}
          </div>
          <Carousel.Caption>
            {/* <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
          </Carousel.Caption>
        </Carousel.Item>)
        : <div>Empty</div>}
    </Carousel>
  );
}

export default CarouselTakeHome;