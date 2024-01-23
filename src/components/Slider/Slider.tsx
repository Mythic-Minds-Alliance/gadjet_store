import {
  FC, useEffect, useState, useRef, useCallback,
} from 'react';
import classNames from 'classnames/bind';
import SliderImage1 from '../../images/sliderPhoneImg1.png';
import SliderImg2 from '../../images/sliderImg2.jpg';
import SliderImg3 from '../../images/sliderImg3.jpg';
import SliderStyle from './Slider.module.scss';
import arrow from '../../images/Arrow.svg';
import twoBig from '../../images/bigSlider2.jpg';
import oneBig from '../../images/sliderBig1.png';
import threeBig from '../../images/bigSlider3.webp';

import { ImageSlider } from '../ImageSlider/ImageSlider';

const cn = classNames.bind(SliderStyle);

const mobileSlides = [SliderImage1, SliderImg3, SliderImg2];
const bigSlides = [oneBig, twoBig, threeBig];

const getWindowWidth = () => window.innerWidth;

export const Slider: FC = () => {
  const [slides, setSlides] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStartPositionX, setTouchStartPositionX] = useState<number>(0);
  const [touchEndPositionX, setTouchEndPositionX] = useState<number>(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const autoScrollInterval = useRef<NodeJS.Timeout | null>(null);
  const sliderElement = useRef<HTMLDivElement | null>(null);

  const goToPrevious = useCallback(() => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;

    setCurrentIndex(newIndex);
  }, [currentIndex, slides]);

  const goToNext = useCallback(() => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;

    setCurrentIndex(newIndex);
  }, [currentIndex, slides.length]);

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = getWindowWidth();

      if (windowWidth < 640) {
        setSlides(mobileSlides);
      } else {
        setSlides(bigSlides);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const handleAutoScroll = () => {
      if (!isAutoScrolling) {
        return;
      }

      goToNext();
    };

    autoScrollInterval.current = setInterval(handleAutoScroll, 3000);

    return () => {
      if (autoScrollInterval.current !== null) {
        clearInterval(autoScrollInterval.current);
      }
    };
  }, [isAutoScrolling, goToNext]);

  useEffect(() => {
    const handleTouchStart = (event: TouchEvent) => {
      setTouchStartPositionX(event.changedTouches[0].screenX);
    };

    const handleTouchEnd = (event: TouchEvent) => {
      setTouchEndPositionX(event.changedTouches[0].screenX);

      if (touchEndPositionX > touchStartPositionX) {
        goToPrevious();
      } else if (touchEndPositionX < touchStartPositionX) {
        goToNext();
      }
    };

    const currentSliderElement = sliderElement.current;

    if (currentSliderElement) {
      currentSliderElement
        .addEventListener('touchstart', handleTouchStart, false);
      currentSliderElement
        .addEventListener('touchend', handleTouchEnd, false);
    }

    return () => {
      if (currentSliderElement) {
        currentSliderElement
          .removeEventListener('touchstart', handleTouchStart);
        currentSliderElement
          .removeEventListener('touchend', handleTouchEnd);
      }
    };
  }, [
    sliderElement,
    isAutoScrolling,
    touchStartPositionX,
    touchEndPositionX,
    goToNext,
    goToPrevious,
  ]);

  return (
    <div className={cn('promo__container', 'slider')}>
      <div className={cn('slider__container')}>
        <button
          type="button"
          tabIndex={0}
          className={cn('slider__arrow', 'slider__arrow-left')}
          onClick={() => {
            setIsAutoScrolling(false);
            goToPrevious();
          }}
          onKeyDown={(e) => {
            // Handle keyboard events
            if (e.key === 'Enter' || e.key === 'Space') {
              setIsAutoScrolling(false);
              goToPrevious();
            }
          }}
        >
          <img src={arrow} alt="left arrow for slider" />
        </button>

        <div className={cn('slider__slides')} ref={sliderElement}>
          <ImageSlider currentIndex={currentIndex} slides={slides} />
        </div>

        <button
          type="button"
          tabIndex={0}
          className={cn('slider__arrow', 'slider__arrow-right')}
          onClick={() => {
            setIsAutoScrolling(false);
            goToNext();
          }}
          onKeyDown={(e) => {
            // Handle keyboard events
            if (e.key === 'Enter' || e.key === 'Space') {
              setIsAutoScrolling(false);
              goToNext();
            }
          }}
        >
          <img src={arrow} alt="right arrow for slider" />
        </button>
      </div>

      <div className={cn('slider__dots')}>
        {slides.map((_slide, index) => (
          <button
            // key={index}
            type="button"
            className={cn('slider__dot', {
              'slider__dot-active': index === currentIndex,
            })}
            onClick={() => {
              goToSlide(index);
              setIsAutoScrolling(false);
            }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
