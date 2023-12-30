import { GoCode } from 'react-icons/go';

import './Cta.scss';
import { FiChevronRight } from 'react-icons/fi';

const Cta = () => {
    return (
        <div className="Cta">
            <div className="Cta-main">
                <div className="Cta-shape">
                    <div className="line-shape-1"></div>
                    <div className="go-code-container">
                        <GoCode color="#fff" className="code-icon" />
                    </div>
                </div>
                <div className="Cta-content">
                    <h1>Over 100 million developers call GitHub home3</h1>
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
