import { GoCodeOfConduct } from 'react-icons/go';
import './Collaboration.scss';
import config from '@/utils/config';
import { motion, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';
import useMenuStore from '@/store/menuStore';
const Collaboration = () => {
    const ref = useRef(null);
    const isInView = useInView(ref);
    const { setActiveMenu } = useMenuStore();
    useEffect(() => {
        setActiveMenu({
            id: 2,
            value: 'Collaboration',
        });
        console.log('IS IN VIEW SECURITY');
    }, [isInView]);
    return (
        <div className="Collaboration" id="Collaboration" ref={ref}>
            <div className="Collaboration-shape">
                <motion.div
                    initial={{ opacity: 0, scaleY: 0 }}
                    whileInView={{ opacity: 1, scaleY: 1 }}
                    className="line-shape-1 origin-top"
                ></motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="go-briefcase-container"
                >
                    <GoCodeOfConduct color="#fff" className="code-icon" />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scaleY: 0 }}
                    whileInView={{ opacity: 1, scaleY: 1 }}
                    transition={{ delay: 0.7 }}
                    className="line-shape-2 origin-top"
                ></motion.div>
            </div>
            <div className="Collaboration-content">
                <motion.h3
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 }}
                >
                    Collaboration
                </motion.h3>
                <motion.h2
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.65 }}
                >
                    <span>Supercharge collaboration</span>
                    <br />
                    GitHub helps your teams work more efficiently together.
                </motion.h2>
                <img src={`${config.image_base}/assets/images/shape-collaboration.svg`} />
            </div>
        </div>
    );
};
export default Collaboration;
