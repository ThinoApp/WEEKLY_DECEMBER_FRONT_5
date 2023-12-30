import config from '@/utils/config';
import './AdvancedSecurity.scss';
import { FiChevronRight } from 'react-icons/fi';
import { GoCheckCircleFill } from 'react-icons/go';
import CustomCard from '../CustomCard/CustomCard';
import { motion } from 'framer-motion';

const AdvancedSecurity = () => {
    return (
        <div className="AdvancedSecurity">
            <div className="AdvancedSecurity-illustration">
                <CustomCard className="Main-card" translateX="-400%" colorGloss="#33b3ae">
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="card-item"
                    >
                        <GoCheckCircleFill className="icon" />
                        <p>Build</p>
                        <p>1m21s</p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0.5, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{
                            delay: 0.3,
                        }}
                        className="divider"
                    >
                        <div className="circle" />
                        <div className="circle" />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0.3, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{
                            delay: 0.5,
                        }}
                    >
                        <p className="title">Steps</p>
                        <div className="Step-list">
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{
                                    delay: 0.6,
                                }}
                                className="card-item"
                            >
                                <GoCheckCircleFill className="icon" />
                                <p>Initialize CodeQL</p>
                                <p>1m42s</p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{
                                    delay: 0.7,
                                }}
                                className="card-item"
                            >
                                <GoCheckCircleFill className="icon" />
                                <p>Autobuild</p>
                                <p>1m24s</p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{
                                    delay: 0.8,
                                }}
                                className="card-item"
                            >
                                <GoCheckCircleFill className="icon" />
                                <p>Perform CodeQL Analyses</p>
                                <p>1m36s</p>
                            </motion.div>
                        </div>
                    </motion.div>
                </CustomCard>
                <img src={`${config.image_base}/assets/images/illu-ghas-list.png`} />
                <div className="glossing-blur" />
            </div>
            <div className="AdvancedSecurity-content">
                <div className="AdvancedSecurity-shape">
                    <motion.div
                        initial={{ opacity: 0, scaleY: 0 }}
                        whileInView={{ opacity: 1, scaleY: 1 }}
                        transition={{ delay: 0.5, dutaion: 0.5 }}
                        viewport={{ amount: 0.2 }}
                        className="line-shape-2 origin-top"
                    ></motion.div>
                    <div className="line-shape-3 hidden lg:flex">
                        <img
                            src={`${config.image_base}/assets/images/git-branch-security.svg`}
                            alt="git branch"
                            className="git-branch"
                        />
                    </div>
                </div>
                <div className="flex flex-col gap-4 relative">
                    <motion.p
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="AdvancedSecurity-description"
                    >
                        <span>GitHub Advanced Security </span>
                        enables you to find and fix vulnerabilities with ease and ship secure code quickly.
                    </motion.p>
                    <motion.a initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} href="#">
                        Dive into GitHub Advanced Security
                        <FiChevronRight />
                    </motion.a>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 }}
                        className="Increase"
                    >
                        <p>Did you know ?</p>
                        <h2>7x faster</h2>
                        <p>vulnerability fixes with GitHub1</p>
                        {/* <img src={`${config.image_base}/assets/images/shape-copilot.svg`} /> */}
                    </motion.div>
                </div>
            </div>
        </div>
    );
};
export default AdvancedSecurity;
