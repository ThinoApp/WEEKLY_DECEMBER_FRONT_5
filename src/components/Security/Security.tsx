import { GoLock } from 'react-icons/go';
import './Security.scss';
import config from '@/utils/config';
const Security = () => {
    return (
        <div className="Security">
            <div className="Security-shape">
                <div className="line-shape-1"></div>

                <div className="go-briefcase-container">
                    <GoLock color="#fff" className="code-icon" />
                </div>
                <div className="line-shape-2"></div>
            </div>
            <div className="Security-content">
                <h3>Application security</h3>
                <h2>
                    <span>Empower developers</span>
                    <br />
                    With GitHub, you can secure code in minutes.
                </h2>
                <img src={`${config.image_base}/assets/images/shape-security.svg`} />
            </div>
        </div>
    );
};
export default Security;
