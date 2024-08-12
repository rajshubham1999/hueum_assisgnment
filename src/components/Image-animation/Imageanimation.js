



import React, { useEffect, useState, useRef } from 'react';
import './Imageanimation.css';
import update from '../../assets/update-image.png';
import automaticupdate from '../../assets/automatic-updates.png';
import newchrome from '../../assets/new chrome.png';
import fast from '../../assets/fastgoogle.png';
import videoFile from '../../assets/videofile.mp4';
import upper from '../../assets/upper.png';
import lower from '../../assets/lower.png';

function Imageanimation() {
  const [scrollY, setScrollY] = useState(0);
  const [videoSize, setVideoSize] = useState({ width: 1300, height: 790 });
  const [videoTranslateY, setVideoTranslateY] = useState(0);
  const [textAnimationVisibility, setTextAnimationVisibility] = useState(false);
  const [textAnimationTop, setTextAnimationTop] = useState(0);
  const [videoPlaying, setVideoPlaying] = useState(false);
  const [sliderVisible, setSliderVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const videoContainerRef = useRef(null);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const videoContainer = videoContainerRef.current;
    if (!videoContainer) return;
    const videoContainerTop = videoContainer.getBoundingClientRect().top + window.scrollY;
    const videoContainerHeight = videoContainer.offsetHeight;
    const triggerPoint = videoContainerTop - window.innerHeight * 0.7;

    if (scrollY >= triggerPoint) {
      const maxScroll = videoContainerTop + videoContainerHeight - window.innerHeight;
      const progress = Math.min((scrollY - triggerPoint) / (maxScroll - triggerPoint), 1);
      const newWidth = 1300 - 700 * progress;
      const newHeight = 790 - 390 * progress;
      const videoTranslateYValue = (790 - newHeight) / 2;
      setVideoSize({ width: newWidth, height: newHeight });
      setVideoTranslateY(videoTranslateYValue);

      if (progress === 1) {
        setVideoPlaying(true);
        setSliderVisible(true);
      } else {
        setVideoPlaying(false);
      }
    } else if (scrollY < triggerPoint && scrollY >= videoContainerTop) {
      const maxScroll = videoContainerTop + videoContainerHeight - window.innerHeight;
      const progress = Math.max((scrollY - videoContainerTop) / (maxScroll - videoContainerTop), 0);
      const newWidth = 600 + 700 * (1 - progress);
      const newHeight = 400 + 390 * (1 - progress);
      const videoTranslateYValue = (790 - newHeight) / 2;
      setVideoSize({ width: newWidth, height: newHeight });
      setVideoTranslateY(videoTranslateYValue);
      setSliderVisible(false);
    }

    if (scrollY >= videoContainerTop + videoContainerHeight - window.innerHeight) {
      setTextAnimationVisibility(true);
      setTextAnimationTop(videoContainerTop);
      setVideoPlaying(true);
    } else {
      setTextAnimationVisibility(false);
      setVideoPlaying(false);
    }

    if (scrollY >= videoContainerTop + videoContainerHeight) {
      setSliderVisible(true);
    } else {
      setSliderVisible(false);
    }
  }, [scrollY]);


  const handleSliderNavigation = (direction) => {
    setActiveIndex((prev) => {
      const newIndex = prev + direction;
      // Ensure the index stays within bounds
      return Math.max(0, Math.min(1, newIndex));
    });
  };

  useEffect(() => {
    if (activeIndex === 0) {
      setVideoSize({ width: 1300, height: 790 });
    }
  }, [activeIndex]);

  const scaleCenter = Math.max(1 - scrollY / 1000, 0.7);
  const scaleSide = Math.max(1.3 - scrollY / 1000, 0.8);
  const translateX = Math.max(30 - scrollY / 20, 0);

  return (
    <div className="App">
      <div className="slider">
        <div className="slide left" style={{ transform: `scale(${scaleSide}) translateX(-${translateX}%)` }}>
          <img src="https://www.google.com/chrome/static/images/dev-components/chrome-gallery-1.webp" alt="Left" />
        </div>
        <div className="slide center" style={{ transform: `scale(${scaleCenter})` }}>
          <img src="https://www.google.com/chrome/static/images/dev-components/chrome-gallery-3.webp" alt="Center" />
        </div>
        <div className="slide right" style={{ transform: `scale(${scaleSide}) translateX(${translateX}%)` }}>
          <img src="https://www.google.com/chrome/static/images/dev-components/chrome-gallery-5.webp" alt="Right" />
        </div>
      </div>
      <div className='second-half'>
        <div className='discover'>
          <div className='discover-text1'>
            <p>Discover the latest</p>
          </div>
          <div className='discover-text2'>
            <img src={update} alt="update" />
            <p>from Chrome</p>
          </div>
        </div>
        <div className='two-container'>
          <div className='first'>
            <img src={automaticupdate} alt="automatic-update" />
          </div>
          <div className='second'>
            <img src={newchrome} alt="newchrome" />
          </div>
        </div>
      </div>
      <div className='fourth-half'>
        <div className='fast-way'>
          <div className='upper'>
            <p className='first-text'>The</p>
            <img src={fast} />
            <p className='second-text'>way to do</p>
          </div>
          <div className='second-upper'>
            <p className="second-upper-text">
              things online
            </p>
          </div>
        </div>
      </div>

      <div className='animation-container'>
        <div className='video-container' ref={videoContainerRef} style={{ width: videoSize.width, height: videoSize.height }}>
          <video src={videoFile} autoPlay={videoPlaying} muted loop style={{ transform: `translateY(${videoTranslateY}px)` }} />
        </div>
        
        <div className='text-animation' style={{ opacity: textAnimationVisibility ? 1 : 0, top: textAnimationTop }}>
          <p className='prioritise'>Prioritise Performance</p>
          <p className='normal-text'>
            Chrome is built for performance. Optimise your experience with features like Energy Saver and Memory Saver.
          </p>
        </div>
      </div>

     <div className='build'>
      <div className='build-upper'>
        <img src={upper}/>
      </div>
      <div className='build-image' style={{marginTop:50}}>
        <img src={lower}/>
      </div>
     </div>


    </div>
  );
}

export default Imageanimation;



