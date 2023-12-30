import { FiChevronRight } from 'react-icons/fi';
import './GithubUtility.scss';
import config from '@/utils/config';
import CustomCard from '../CustomCard/CustomCard';
const GithubUtility = () => {
    return (
        <div className="GithubUtility">
            <CustomCard colorGloss="#33b3ae" className="box box-1">
                <div className="box-content">
                    <p>
                        <span>Code scanning </span>
                        is our code analysis tool that helps you remediate issues in your code.
                    </p>
                    <a href="#">
                        Download the latest SAST ebook
                        <FiChevronRight />
                    </a>
                </div>
                <img src={`${config.image_base}/assets/images/illu-code-scanning.png`} />
            </CustomCard>
            <CustomCard colorGloss="#33b3ae" className="box box-2">
                <div className="box-content">
                    <p>
                        <span>Dependabot </span>
                        makes it easy to find and fix vulnerable dependencies in your supply chain..
                    </p>
                    <a href="#">
                        Explore Dependabot
                        <FiChevronRight />
                    </a>
                </div>
                <img src={`${config.image_base}/assets/images/illu-dependabot.png`} />
            </CustomCard>
            <CustomCard colorGloss="#33b3ae" className="box box-3">
                <div className="box-content">
                    <p>
                        <span>Secret scanning </span>
                        automatically looks for partner patterns and prevents fraudulent use of accidentally committed
                        secrets.
                    </p>
                    <a href="#">
                        Read about secret scanning
                        <FiChevronRight />
                    </a>
                </div>
                <img src={`${config.image_base}/assets/images/illu-secret-scanning.png`} />
            </CustomCard>
        </div>
    );
};
export default GithubUtility;
