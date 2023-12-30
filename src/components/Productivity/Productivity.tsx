import config from '@/utils/config';
import './Productivity.scss';
import { GoBriefcase } from 'react-icons/go';
const Productivity = () => {
    return (
        <div className="Productivity">
            <div className="Productivity-main">
                <div className="Productivity-shape">
                    <div className="go-briefcase-container">
                        <GoBriefcase color="#fff" className="code-icon" />
                    </div>
                    <div className="line-shape-2"></div>
                </div>
                <div className="Productivity-content">
                    <h3>Productivity</h3>
                    <h2>
                        <span>Accelerate innovation</span>
                        <br />
                        Our AI-powered platform increases the pace of software
                    </h2>
                    <img src={`${config.image_base}/assets/images/shape-productivity.svg`} />
                </div>
            </div>
        </div>
    );
};
export default Productivity;
