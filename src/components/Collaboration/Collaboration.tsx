import { GoCodeOfConduct } from 'react-icons/go';
import './Collaboration.scss';
import config from '@/utils/config';
const Collaboration = () => {
    return (
        <div className="Collaboration">
            <div className="Collaboration-shape">
                <div className="line-shape-1"></div>

                <div className="go-briefcase-container">
                    <GoCodeOfConduct color="#fff" className="code-icon" />
                </div>
                <div className="line-shape-2"></div>
            </div>
            <div className="Collaboration-content">
                <h3>Collaboration</h3>
                <h2>
                    <span>Supercharge collaboration</span>
                    <br />
                    GitHub helps your teams work more efficiently together.
                </h2>
                <img src={`${config.image_base}/assets/images/shape-collaboration.svg`} />
            </div>
        </div>
    );
};
export default Collaboration;
