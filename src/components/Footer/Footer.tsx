import './Footer.scss';
import { fird, fourth, second, third } from './Footer.utils';
const Footer = () => {
    return (
        <div className="Footer">
            <ol>
                <li>
                    This 7X times factor is based on data from the industry’s longest running analysis of fix rates
                    Veracode State of Software Security 2023, which cites the average time to fix 50% of flaws as 198
                    days vs. GitHub’s fix rates of 72% of flaws with in 28 days which is at a minimum of 7X faster when
                    compared.
                </li>
                <li>
                    2 The Total Economic Impact™ Of GitHub Enterprise Cloud and Advanced Security, a commissioned study
                    conducted by Forrester Consulting, 2022. Results are for a composite organization based on
                    interviewed customers.
                </li>
                <li>3 There are now 100 million developers around the world using GitHub. Read the blog post..</li>
            </ol>
            <div className="Footer-content">
                <div className="start">
                    <h3>GitHub</h3>
                    <p>
                        <span>Subscribe to our developer newsletter</span>
                        <br />
                        Get tips, technical guides, and best practices. Once a month. Right in your inbox.
                    </p>

                    <button>Subscribe</button>
                </div>
                <ul>
                    {fird.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
                <ul>
                    {second.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
                <ul>
                    {third.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
                <ul>
                    {fourth.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
export default Footer;
