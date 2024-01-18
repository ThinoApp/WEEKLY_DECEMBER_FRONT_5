import { FiChevronRight } from 'react-icons/fi';
import { GoHeart } from 'react-icons/go';
import './GithubDiscussion.scss';
import config from '@/utils/config';
import CustomCard from '../CustomCard/CustomCard';
import { motion } from 'framer-motion';
const GithubDiscussion = () => {
    return (
        <div className="GithubDiscussion">
            <CustomCard colorGloss="#f778ba" className="box box-1">
                <div className="box-content">
                    <p>
                        <span>GitHub Sponsors </span>
                        lets you support your favorite open source maintainers and projects.
                    </p>
                    <a href="#">
                        Invest with GitHub Sponsors
                        <FiChevronRight />
                    </a>
                </div>
                <div className="overflow-hidden h-fit">
                    <div className="sponsor-list">
                        {[1, 2, 3, 4, 5, 5, 6, 7, 8, 9, 10].map((item) => {
                            return (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.05 * item }}
                                    className="sponsor-item"
                                    key={item}
                                >
                                    <img
                                        src={`${config.image_base}/assets/images/kazupon.jpeg`}
                                        alt="sponsor profile"
                                    />
                                    <p>kazuya kawaguchi</p>
                                    <button>
                                        <GoHeart />
                                        Sponsor
                                    </button>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </CustomCard>

            <CustomCard colorGloss="#f778ba" className="box box-2">
                <div className="box-content">
                    <p>
                        <span>Pull requests </span>
                        allow real-time communication and collaboration about code changes.
                    </p>
                    <a href="#">
                        Check out pull requests
                        <FiChevronRight />
                    </a>
                </div>
                <img src={`${config.image_base}/assets/images/illu-pull-requests.png`} />
            </CustomCard>
            <CustomCard colorGloss="#f778ba" className="box box-3">
                <div className="box-content">
                    <p>
                        <span>GitHub Discussions </span>
                        creates space to ask questions and have open-ended conversations.
                    </p>
                    <a href="#">
                        Jump into GitHub Discussions
                        <FiChevronRight />
                    </a>
                </div>
                <img src={`${config.image_base}/assets/images/illu-discussions.png`} />
            </CustomCard>
        </div>
    );
};
export default GithubDiscussion;
