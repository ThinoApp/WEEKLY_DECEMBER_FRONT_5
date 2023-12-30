import config from '@/utils/config';
import './GithubIssues.scss';
import { FiChevronRight } from 'react-icons/fi';
import { motion } from 'framer-motion';

const GithubIssues = () => {
    return (
        <div className="GithubIssues">
            <div className="Copilot-illustration">
                <img src={`${config.image_base}/assets/images/issues-plan.png`} />
                <motion.img
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    src={`${config.image_base}/assets/images/illu-projects.png`}
                />
                <div className="glossing-blur" />
            </div>
            <div className="GithubIssues-content">
                <div className="GithubIssues-shape">
                    <motion.div
                        initial={{ opacity: 0, scaleY: 0 }}
                        whileInView={{ opacity: 1, scaleY: 1 }}
                        transition={{ delay: 0.5, dutaion: 0.5 }}
                        viewport={{ amount: 0.2 }}
                        className="line-shape-2 origin-top"
                    ></motion.div>
                    <div className="line-shape-3">
                        <img
                            src={`${config.image_base}/assets/images/git-branch-collaboration.svg`}
                            alt="git branch"
                            className="git-branch"
                        />
                    </div>
                </div>
                <div className="flex flex-col gap-4 relative">
                    <motion.p
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="GithubIssues-description"
                    >
                        <span>GitHub Issues and GitHub Projects </span>
                        supply project management tools that adapt to your team alongside your code.
                    </motion.p>
                    <motion.a initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} href="#">
                        Get started with GitHub Issues
                        <FiChevronRight />
                    </motion.a>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 }}
                        className="Increase"
                    >
                        <p>Did you know ?</p>
                        <h2>80%</h2>
                        <p>
                            reduction in onboarding <br />
                            time with GitHub2
                        </p>
                        <img src={`${config.image_base}/assets/images/shape-copilot.svg`} />
                    </motion.div>
                </div>
            </div>
        </div>
    );
};
export default GithubIssues;
