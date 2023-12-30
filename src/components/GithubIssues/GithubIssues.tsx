import config from '@/utils/config';
import './GithubIssues.scss';
import { FiChevronRight } from 'react-icons/fi';

const GithubIssues = () => {
    return (
        <div className="GithubIssues">
            <div className="Copilot-illustration">
                <img src={`${config.image_base}/assets/images/issues-plan.png`} />
                <img src={`${config.image_base}/assets/images/illu-projects.png`} />
                <div className="glossing-blur" />
            </div>
            <div className="GithubIssues-content">
                <div className="GithubIssues-shape">
                    <div className="line-shape-2"></div>
                    <div className="line-shape-3">
                        <img
                            src={`${config.image_base}/assets/images/git-branch-collaboration.svg`}
                            alt="git branch"
                            className="git-branch"
                        />
                    </div>
                </div>
                <div className="flex flex-col gap-4 relative">
                    <p className="GithubIssues-description">
                        <span>GitHub Issues and GitHub Projects</span>
                        supply project management tools that adapt to your team alongside your code.
                    </p>
                    <a href="#">
                        Get started with GitHub Issues
                        <FiChevronRight />
                    </a>
                    <div className="Increase">
                        <p>Did you know ?</p>
                        <h2>80%</h2>
                        <p>
                            reduction in onboarding <br />
                            time with GitHub2
                        </p>
                        <img src={`${config.image_base}/assets/images/shape-copilot.svg`} />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default GithubIssues;
