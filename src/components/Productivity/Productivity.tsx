import config from '@/utils/config';
import './Productivity.scss';
import { GoBriefcase } from 'react-icons/go';
import { motion } from 'framer-motion';
const Productivity = () => {
    return (
        <div className="Productivity">
            <div className="Productivity-main">
                <div className="Productivity-shape">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="go-briefcase-container"
                    >
                        <GoBriefcase color="#fff" className="code-icon" />
                    </motion.div>
                    <div className="line-shape-2"></div>
                </div>
                <div className="Productivity-content">
                    <h3>Productivity</h3>
                    <h2>
                        <span>Accelerate innovation</span>
                        <br />
                        Our AI-powered platform increases the pace of software
                    </h2>
                    <img src={`${config.image_base}/assets/images/shape-productivity.svg`} />
                </div>
            </div>
        </div>
    );
};
export default Productivity;
