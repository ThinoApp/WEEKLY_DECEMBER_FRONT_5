import { FiChevronRight } from 'react-icons/fi';
import './StickyHeader.scss';
const StickyHeader = () => {
    return (
        <div className="StickyHeader">
            <ul>
                <li>Productivity</li>
                <li>Collaboration</li>
                <li>Security</li>
            </ul>
            <div className="btn-container">
                <button>
                    Start a free trial
                    <FiChevronRight />
                </button>
                <button>
                    Sign up for GitHub
                    <FiChevronRight />
                </button>
            </div>
        </div>
    );
};
export default StickyHeader;
