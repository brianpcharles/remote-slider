import React, { useState, useEffect } from 'react';
import { Navigation, Keyboard, Thumbs, Autoplay, EffectFade } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import { parseCloudinaryJson } from './helpers/parseCloudinaryJson';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';

import '@fortawesome/fontawesome-free/css/all.min.css';
import './styles.css';

export default function Slider({ config }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [slides, setSlides] = useState([]);

  // Fetch slides from slidesUrl
  useEffect(() => {
    if (!config || !config.slidesUrl) return;

    fetch(config.slidesUrl)
      .then(res => res.json())
      .then(data => setSlides(parseCloudinaryJson(data)))
      .catch(err => console.error('Failed to fetch slides JSON:', err));
  }, [config]);

  function getSlideUrl(slide) {
    if (!slide || !slide.src) return '';
    if (!config || !config.resourcePath) return slide.src;
    // If slide has a format, transform the URL accordingly
    if (slide.format) {
        const resourcePath = slide.format === 'mp4' || slide.format === 'webm' ? config.resourcePath.video : config.resourcePath.image;
        if (!config.transformations) return resourcePath + slide.src;
        const transformation = config.transformations[slide.format === 'mp4' || slide.format === 'webm' ? 'video' : slide.format === 'gif' ? 'gif' : 'image'];
        const url = new URL(resourcePath + transformation + 'v1/' + slide.src);
        return url.toString();
    }
    return resourcePath + transformation + 'v1/' + slide.src;
  }

  function getThumbUrl(slide) {
   if (!slide || !slide.src) return '';
    if (!config || !config.resourcePath) return slide.src;
    const resourcePath = slide.format === 'mp4' || slide.format === 'webm' ? config.resourcePath.video : config.resourcePath.image;
    if (!config.transformations) return resourcePath + slide.src;
    const transformation = config.transformations.thumbnail;
    const url = new URL(resourcePath + transformation + 'v1/' + slide.src);
    return url.toString();
  }

  if (!config || slides.length === 0) return null;

  const isDesktop = window.innerWidth >= (config.thumbnails?.breakpoint || 768);
  const thumbsConfig = isDesktop ? config.thumbnails?.desktop : config.thumbnails?.mobile;
  const thumbsEnabled = thumbsConfig?.enabled && slides.length > 0;
  const thumbsDirection = thumbsConfig?.direction || 'horizontal';

  const crop = isDesktop ? config.desktopCrop : config.mobileCrop;

  return (
    <div aria-live="polite" style={{ display: 'flex', gap: '10px' }}>
      {/* Thumbnails */}
      {thumbsEnabled && (
        <div className="thumb-column">
          <button className="thumb-nav thumb-nav-prev" aria-label="Previous thumbnails">
            <i class="fa-solid fa-angle-up"></i>
          </button>
          <Swiper
            modules={[Navigation]}
            autoplay={false}
            onSwiper={setThumbsSwiper}
            direction={thumbsDirection}
            spaceBetween={10}
            watchSlidesProgress
            slidesPerView={6}
            navigation={{
              prevEl: ".thumb-nav-prev",
              nextEl: ".thumb-nav-next"
            }}
            style={{
              height: thumbsDirection === 'vertical' ? (70 * slides.length) + 'px' : 'auto',
              width: thumbsDirection === 'vertical' ? '100px' : '100%'
            }}
          >
          {slides.map((slide, idx) => (
            <SwiperSlide key={idx} style={{ width: 80, height: 80 }}>
              <img
                src={getThumbUrl(slide)}
                alt={slide.alt || ''}
                className='thumb-slide'
                style={{
                  width: 80,
                  height: 80,
                  objectFit: 'cover',
                  cursor: 'pointer'
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <button className="thumb-nav thumb-nav-next" aria-label="Next thumbnails">
            <i class="fa-solid fa-angle-down"></i>
        </button>
      </div>
      )}
      {/* Main Slider */}
      <Swiper
        modules={[Navigation, Thumbs, Autoplay, Keyboard, EffectFade]}
        keyboard={{ enabled: true, onlyInViewport: true }}
        loop={config.loop || false}
        navigation
        thumbs={{ swiper: thumbsEnabled ? thumbsSwiper : null }}
        lazy={{ loadPrevNext: true }}
        autoplay={config.videoProps?.autoplay ? { delay: 5000 } : false}
        slidesPerView={1}
        effect={isDesktop ? 'fade' : 'slide'}
        fadeEffect={{ crossFade: true }}
        speed={600}
        a11y={{
            enabled: true,
            prevSlideMessage: 'Previous slide',
            nextSlideMessage: 'Next slide',
            firstSlideMessage: 'This is the first slide',
            lastSlideMessage: 'This is the last slide',
            slideLabelMessage: '{{index}} / {{slidesLength}}', // announces slide position
        }}
        style={{
            height: crop?.height || 'auto',
            width: crop?.width || 'auto',
        }}
      >
        {slides.map((slide, idx) => {
          if (slide.type === 'image') {
            return (
              <SwiperSlide key={idx}>
                    <img
                    src={getSlideUrl(slide)}
                    data-src={getSlideUrl(slide)}
                    alt={slide.alt || ''}
                    className="swiper-lazy"
                    style={{
                        width: crop?.width || 'auto',
                        height: crop?.height || 'auto',
                        objectFit: config.imageProps?.objectFit || 'cover',
                    }}
                    loading={config.imageProps?.lazyLoad ? 'lazy' : 'eager'}
                    />
                    <div className="swiper-lazy-preloader" />
              </SwiperSlide>
            );
          } else if (slide.type === 'video') {
            return (
              <SwiperSlide key={idx}>
                <video
                  src={getSlideUrl(slide)}
                  poster={slide.poster || ''}
                  muted={config.videoProps?.muted ?? true}
                  autoPlay={config.videoProps?.autoplay ?? true}
                  loop={config.videoProps?.loop ?? true}
                  playsInline={config.videoProps?.playsInline ?? true}
                  aria-label={slide.alt || "Product video"}
                  style={{
                    width: crop.width,
                    height: crop.height,
                    objectFit: config.videoProps?.objectFit || 'cover'
                  }}
                />
              </SwiperSlide>
            );
          }
          return null;
        })}
      </Swiper>
    </div>
  );
}
