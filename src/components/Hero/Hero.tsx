import { GoCode } from 'react-icons/go';
import Header from '../Header/Header';
import './Hero.scss';
import { FiChevronRight } from 'react-icons/fi';
import { trustedBy } from './Hero.utils';
import config from '@/utils/config';
const Hero = () => {
    return (
        <div className="Hero">
            <Header />
            <div className="Hero-main">
                <div className="Hero-shape">
                    <div className="circle-shape"></div>
                    <div className="line-shape-1"></div>
                    <div className="go-code-container">
                        <GoCode color="#fff" className="code-icon" />
                    </div>
                    <div className="line-shape-2"></div>
                </div>
                <div className="Hero-content">
                    <h1>Let's build from here</h1>
                    <p>The world’s leading AI-powered developer platform.</p>
                    <div className="Hero-cta-container">
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

                    <div className="trustedBy">
                        <p>Trusted by the world’s leading organizations↘️</p>
                        <ul className="trustedBy-container">
                            {trustedBy.map((item, index) => (
                                <li key={index}>
                                    <img src={`${config.image_base}${item}`} />
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Hero;
