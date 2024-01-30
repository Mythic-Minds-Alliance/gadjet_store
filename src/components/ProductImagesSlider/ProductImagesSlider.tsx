import { useState } from 'react';
import cn from 'classnames';
import style from './ProductImagesSlider.module.scss';

import img1 from '../../images/apple-iphone-11/black/00.jpg';
import img2 from '../../images/apple-iphone-11/black/01.jpg';
import img3 from '../../images/apple-iphone-11/black/02.jpg';
import img4 from '../../images/apple-iphone-11/black/03.jpg';
import img5 from '../../images/apple-iphone-11/black/04.jpg';
import { SERVER_HOST } from '../../utils/helpers';

export const productImages = [img1, img2, img3, img4, img5];

type Props = {
  images: string[],
};

export const ProductImagesSlider: React.FC<Props> = ({ images }) => {
  const [selectedPhoto, setSelectedPhoto]
    = useState<string | null>(`${SERVER_HOST}/${images[0]}`);

  const handlePhotoClick = (photo: string) => {
    setSelectedPhoto(`${SERVER_HOST}/${photo}`);
  };

  return (
    <div className={style.container}>
      <div className={style.photo__block}>
        {images.map((photo, index) => (
          <button
            className={cn(style.photo__block_button, {
              [style['photo__block-button__selected']]: selectedPhoto === photo,
            })}
            type="button"
            key={photo}
            onClick={() => handlePhotoClick(photo)}
          >
            <img
              className={style.photo__block_img}
              src={`${SERVER_HOST}/${photo}`}
              alt={`Thumbnail ${index + 1}`}
            />
          </button>
        ))}
      </div>

      <div>
        {selectedPhoto && (
          <img
            className={style.photo__block_main}
            src={selectedPhoto}
            alt={selectedPhoto}
          />
        )}
      </div>
    </div>
  );
};
