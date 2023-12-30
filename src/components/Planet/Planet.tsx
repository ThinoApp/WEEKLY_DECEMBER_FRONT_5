import config from '@/utils/config';
import './Planet.scss';
import { useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';
const Planet = () => {
    const ref = useRef<HTMLVideoElement>(null);
    const isInView = useInView(ref);
    useEffect(() => {
        if (isInView) {
            ref.current?.play();
        } else {
            ref.current?.pause();
        }
    }, [isInView]);
    return (
        <div className="Planet">
            <video loop muted ref={ref}>
                <source src={`${config.image_base}/assets/images/globe.mp4`} type="video/mp4" />
            </video>
            <img src={`${config.image_base}/assets/images/footer-blur.png`} alt="footer-icon" />
            <img src={`${config.image_base}/assets/images/footer-copilot.png`} alt="footer-icon" />
            <img src={`${config.image_base}/assets/images/footer-diamond.png`} alt="footer-icon" />
            <img src={`${config.image_base}/assets/images/footer-mona.png`} alt="footer-icon" />
            <img src={`${config.image_base}/assets/images/footer-orb.png`} alt="footer-icon" />
            <img src={`${config.image_base}/assets/images/footer-star.png`} alt="footer-icon" />
        </div>
    );
};
export default Planet;
