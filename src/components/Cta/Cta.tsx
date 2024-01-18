import { GoCode } from 'react-icons/go';

import './Cta.scss';
import { FiChevronRight } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Cta = () => {
    return (
        <div className="Cta">
            <div className="Cta-main">
                <div className="Cta-shape">
                    <motion.div
                        initial={{ opacity: 0, scaleY: 0 }}
                        whileInView={{ opacity: 1, scaleY: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ amount: 0.9 }}
                        className="line-shape-1 origin-top"
                    ></motion.div>
                    <div className="go-code-container">
                        <GoCode color="#fff" className="code-icon" />
                    </div>
                </div>
                <div className="Cta-content">
                    <h1>
                        <b>Over 100 million developers call GitHub home3</b>
                    </h1>
                    <p>
                        Whether you’re scaling your startup or just learning how to code, GitHub is your home. Join the
                        world’s largest developer platform to build the innovations that empower humanity. Let’s build
                        from here.
                    </p>
                    <div className="Cta-cta-container">
                        <div className="input-container">
                            <input type="email" placeholder="Email address" />
                            <button>Sign up for GitHub</button>
                        </div>
                        <hr />
                        <div className="divider-v"></div>
                        <button>
                            Start a free enterprise trial
                            <FiChevronRight />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Cta;
