import { FiChevronRight } from 'react-icons/fi';
import './GithubFeatures.scss';
import config from '@/utils/config';
import CustomCard from '../CustomCard/CustomCard';
const GithubFeatures = () => {
    return (
        <div className="GithubFeatures">
            <CustomCard colorGloss="#3fb950" className="box box-1">
                <div className="box-content">
                    <p>
                        <span>GitHub Actions </span>
                        automates your build, test, and deployment workflow with simple and secure CI/CD.
                    </p>
                    <a href="#">
                        Discover GitHub Actions
                        <FiChevronRight />
                    </a>
                </div>
                <img src={`${config.image_base}/assets/images/illu-actions.png`} />
            </CustomCard>
            <CustomCard colorGloss="#3fb950" className="box box-2">
                <div className="box-content">
                    <p>
                        <span>GitHub Codespaces </span>
                        offers a complete dev environment in seconds. Code, build, test, and open pull requests from any
                        repo.
                    </p>
                    <a href="#">
                        Discover GitHub Actions
                        <FiChevronRight />
                    </a>
                </div>
                <img src={`${config.image_base}/assets/images/illu-codespaces.png`} />
            </CustomCard>
            <CustomCard colorGloss="#3fb950" className="box box-3">
                <div className="box-content">
                    <p>
                        <span>GitHub Mobile </span>
                        fits your projects in your pocket, so you never miss a beat while on the go.
                    </p>
                    <a href="#">
                        Download GitHub Mobile
                        <FiChevronRight />
                    </a>
                </div>
                <img src={`${config.image_base}/assets/images/illu-mobile.png`} />
            </CustomCard>
        </div>
    );
};
export default GithubFeatures;
