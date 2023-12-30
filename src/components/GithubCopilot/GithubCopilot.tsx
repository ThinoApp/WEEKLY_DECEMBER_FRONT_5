import config from '@/utils/config';
import './GithubCopilot.scss';
import { FiChevronRight } from 'react-icons/fi';
import { motion } from 'framer-motion';

const GithubCopilot = () => {
    return (
        <div className="GithubCopilot">
            <div className="Copilot-illustration">
                <motion.img
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    src={`${config.image_base}/assets/images/illu-copilot-editor.png`}
                />
                <motion.img
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    src={`${config.image_base}/assets/images/illu-copilot-sidebar.png`}
                />
                <div className="glossing-blur" />
            </div>
            <div className="GithubCopilot-content">
                <div className="GithubCopilot-shape">
                    <motion.div
                        initial={{ opacity: 0, scaleY: 0 }}
                        whileInView={{ opacity: 1, scaleY: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="line-shape-2 origin-top"
                    ></motion.div>
                    <div className="line-shape-3 hidden lg:flex">
                        <img
                            src={`${config.image_base}/assets/images/git-branch-productivity.svg`}
                            alt="git branch"
                            className="git-branch"
                        />
                    </div>
                </div>
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col gap-4 relative"
                >
                    <p className="GithubCopilot-description">
                        <span>GitHub Copilot </span>
                        empowers developers to complete tasks 55% faster with contextualized AI coding assistance across
                        workflows.
                    </p>
                    <a href="#">
                        Explore GitHub Copilot
                        <FiChevronRight />
                    </a>
                    <div className="Increase">
                        <p>Did you know ?</p>
                        <h2>22% increase</h2>
                        <p>in developer productivity after three years with GitHub</p>
                        <a href="#">
                            Read the report
                            <FiChevronRight />
                        </a>
                        <img src={`${config.image_base}/assets/images/shape-copilot.svg`} />
                    </div>
                </motion.div>
            </div>
        </div>
    );
};
export default GithubCopilot;
