import { useState } from "react";
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import photos from "./data";
import { slides } from "./slides";

import "yet-another-react-lightbox/styles.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";

const Gallery = () => {
  const [index, setIndex] = useState();

  return (
    <div className="container py-16">
      <PhotoAlbum
        layout="rows"
        photos={photos}
        targetRowHeight={180}
        onClick={({ index }) => setIndex(index)}
        renderPhoto={({ photo, wrapperStyle, renderDefaultPhoto }) => (
          <div style={wrapperStyle} className="overflow-hidden cursor-pointer">
            {renderDefaultPhoto({ wrapped: true })}
          </div>
        )}
      />

      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={slides}
        plugins={[Zoom, Fullscreen, Slideshow]}
      />
    </div>
  );
};

export default Gallery;
