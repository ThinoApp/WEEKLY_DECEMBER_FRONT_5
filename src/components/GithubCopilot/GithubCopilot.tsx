import config from '@/utils/config';
import './GithubCopilot.scss';
import { FiChevronRight } from 'react-icons/fi';

const GithubCopilot = () => {
    return (
        <div className="GithubCopilot">
            <div className="Copilot-illustration">
                <img src={`${config.image_base}/assets/images/illu-copilot-editor.png`} />
                <img src={`${config.image_base}/assets/images/illu-copilot-sidebar.png`} />
                <div className="glossing-blur" />
            </div>
            <div className="GithubCopilot-content">
                <div className="GithubCopilot-shape">
                    <div className="line-shape-2"></div>
                    <div className="line-shape-3">
                        <img
                            src={`${config.image_base}/assets/images/git-branch-productivity.svg`}
                            alt="git branch"
                            className="git-branch"
                        />
                    </div>
                </div>
                <div className="flex flex-col gap-4 relative">
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
                </div>
            </div>
        </div>
    );
};
export default GithubCopilot;
