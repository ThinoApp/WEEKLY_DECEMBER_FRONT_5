import { GoLock } from 'react-icons/go';
import './Security.scss';
import config from '@/utils/config';
import { motion, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';
import useMenuStore from '@/store/menuStore';
const Security = () => {
    const ref = useRef(null);
    const isInView = useInView(ref);
    const { setActiveMenu } = useMenuStore();
    useEffect(() => {
        setActiveMenu({
            id: 1,
            value: 'Security',
        });
        console.log('IS IN VIEW SECURITY');
    }, [isInView]);
    return (
        <div className="Security" id="Security" ref={ref}>
            <div className="Security-shape">
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
                    <GoLock color="#fff" className="code-icon " />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scaleY: 0 }}
                    whileInView={{ opacity: 1, scaleY: 1 }}
                    transition={{ delay: 0.7 }}
                    className="line-shape-2 origin-top"
                ></motion.div>
            </div>
            <div className="Security-content">
                <motion.h3
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 }}
                >
                    Application security
                </motion.h3>
                <motion.h2
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.65 }}
                >
                    <span>Empower developers</span>
                    <br />
                    With GitHub, you can secure code in minutes.
                </motion.h2>
                <img src={`${config.image_base}/assets/images/shape-security.svg`} />
            </div>
        </div>
    );
};
export default Security;
