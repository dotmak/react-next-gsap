'use client';

import { useLayoutEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import Flip from 'gsap/dist/Flip';

export default function Home() {
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(Flip);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const gallery = document.querySelector('#gallery-2');

      // Select elements within the gallery that will be animated
      const galleryItems = gallery.querySelectorAll('.gallery__item');

      const galleryItemsInner = [...galleryItems]
        .map((item) => (item.children.length > 0 ? [...item.children] : []))
        .flat();

      gallery.classList.add('gallery--switch');

      const flipstate = Flip.getState([galleryItems]);

      gallery.classList.remove('gallery--switch');
      // Remove the final class to revert to the initial state

      //Create the Flip animation timeline
      const tl = Flip.to(flipstate, {
        ease: 'none',
        absoluteOnLeave: false,
        absolute: false,
        scale: true,
        simple: true,
        scrollTrigger: {
          trigger: '#gallery-2',
          scrollTrigger: {
            start: 'center center',
            end: '+=300%',
          },
          pin: '#selected-image',
          scrub: true,
          markers: true,
          anticipatePin: true,
        },

        stagger: 0,
      });

      // If there are inner elements in the gallery items, animate them too
      if (galleryItemsInner.length) {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: '#gallery-2',
              start: 'center center',
              end: '',
              scrub: true,
            },
          })
          .fromTo(
            galleryItemsInner,
            {
              scale: 2,
            },
            {
              scale: 1,
            },
            0
          );
      }
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="app-wrapper">
      <div
        className="gallery-wrap gallery-wrap--large pyramid-animation"
        id="selected-image"
      >
        <div className="gallery gallery--grid gallery--breakout" id="gallery-2">
          <div className="gallery__item gallery__item-cut">
            <div
              className="gallery__item-inner"
              style={{
                backgroundImage: `url(https://tympanus.net/Development/ScrollBasedLayoutAnimations/img/12.jpg)`,
              }}
            ></div>
          </div>
          <div className="gallery__item gallery__item-cut">
            <div
              className="gallery__item-inner"
              style={{
                backgroundImage: `url(https://tympanus.net/Development/ScrollBasedLayoutAnimations/img/12.jpg)`,
              }}
            ></div>
          </div>
          <div className="gallery__item gallery__item-cut">
            <div
              className="gallery__item-inner"
              style={{
                backgroundImage: `url(https://tympanus.net/Development/ScrollBasedLayoutAnimations/img/12.jpg)`,
              }}
            ></div>
          </div>
          <div className="gallery__item gallery__item-cut">
            <div
              className="gallery__item-inner"
              style={{
                backgroundImage: `url(https://tympanus.net/Development/ScrollBasedLayoutAnimations/img/12.jpg)`,
              }}
            ></div>
          </div>
          <div className="gallery__item gallery__item-cut">
            <div
              className="gallery__item-inner"
              style={{
                backgroundImage: `url(https://tympanus.net/Development/ScrollBasedLayoutAnimations/img/12.jpg)`,
              }}
            ></div>
          </div>
          <div className="gallery__item gallery__item-cut">
            <div
              className="gallery__item-inner"
              style={{
                backgroundImage: `url(https://tympanus.net/Development/ScrollBasedLayoutAnimations/img/12.jpg)`,
              }}
            ></div>
          </div>
          <div className="gallery__item gallery__item-cut">
            <div
              className="gallery__item-inner"
              style={{
                backgroundImage: `url(https://tympanus.net/Development/ScrollBasedLayoutAnimations/img/12.jpg)`,
              }}
            ></div>
          </div>
          <div className="gallery__item gallery__item-cut">
            <div
              className="gallery__item-inner"
              style={{
                backgroundImage: `url(https://tympanus.net/Development/ScrollBasedLayoutAnimations/img/12.jpg)`,
              }}
            ></div>
          </div>
          <div className="gallery__item gallery__item-cut">
            <div
              className="gallery__item-inner"
              style={{
                backgroundImage: `url(https://tympanus.net/Development/ScrollBasedLayoutAnimations/img/12.jpg)`,
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
