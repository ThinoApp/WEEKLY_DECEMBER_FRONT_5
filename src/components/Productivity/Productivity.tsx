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
                    <motion.div
                        initial={{ opacity: 0, scaleY: 0 }}
                        whileInView={{ opacity: 1, scaleY: 1 }}
                        transition={{ delay: 0.5, dutaion: 0.5 }}
                        viewport={{ amount: 0.2 }}
                        className="line-shape-2 origin-top"
                    ></motion.div>
                </div>
                <div className="Productivity-content">
                    <motion.h3
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        Productivity
                    </motion.h3>
                    <motion.h2
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        <span>Accelerate innovation</span>
                        <br />
                        Our AI-powered platform increases the pace of software
                    </motion.h2>
                    <img src={`${config.image_base}/assets/images/shape-productivity.svg`} />
                </div>
            </div>
        </div>
    );
};
export default Productivity;
