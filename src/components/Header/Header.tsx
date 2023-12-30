import { useState } from 'react';
import './Header.scss';
import { FaGithub } from 'react-icons/fa';
import { FiSearch, FiMenu, FiChevronDown } from 'react-icons/fi';
import { OpenSource, products, solutions } from './Header.utils';
import { GoLinkExternal } from 'react-icons/go';
const Header = () => {
    const [active, setActive] = useState(0);
    return (
        <div className="Header">
            <FaGithub className="github-icon" />
            <ul className="MenuDesktop">
                <li onMouseEnter={() => setActive(1)}>
                    Product <FiChevronDown />
                    <div className={`content ${active === 1 ? 'show' : 'hide'}`} onMouseLeave={() => setActive(0)}>
                        <ul className="product-content-left">
                            {products.map((item) => (
                                <li key={item.id}>
                                    {item.icon}
                                    <div>
                                        <h4>{item.title}</h4>
                                        <p>{item.description}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <ul className="product-content-right">
                            <li>Explore</li>
                            <li>All features</li>
                            <li>
                                Documentation
                                <span>
                                    <GoLinkExternal />
                                </span>
                            </li>
                            <li>
                                GitHub Skills
                                <span>
                                    <GoLinkExternal />
                                </span>
                            </li>
                            <li>Blog</li>
                        </ul>
                    </div>
                </li>
                <li onMouseEnter={() => setActive(2)}>
                    Solutions <FiChevronDown />
                    <div
                        className={`content solution  ${active === 2 ? 'show' : 'hide'}`}
                        onMouseLeave={() => setActive(0)}
                    >
                        {solutions.map((item) => (
                            <>
                                <ul className="product-content-left" key={item.id}>
                                    {item.items.map((item, index) => (
                                        <li key={index}>{index == 0 ? <h4>{item}</h4> : <p>{item}</p>}</li>
                                    ))}
                                </ul>
                                <hr />
                            </>
                        ))}
                    </div>
                </li>
                <li onMouseEnter={() => setActive(3)}>
                    Open Source <FiChevronDown />
                    <div
                        className={`content solution  ${active === 3 ? 'show' : 'hide'}`}
                        onMouseLeave={() => setActive(0)}
                    >
                        {OpenSource.map((item) => (
                            <>
                                <ul className="product-content-left" key={item.id}>
                                    {item.items.map((item, index) => (
                                        <li key={index}>{index == 0 ? <h4>{item}</h4> : <p>{item}</p>}</li>
                                    ))}
                                </ul>
                                <hr />
                            </>
                        ))}
                    </div>
                </li>
                <li>Pricing</li>
            </ul>
            <MenuMobile />
            <div className="Header-cta">
                <div className="search-container">
                    <FiSearch className="search-icon" />
                    <input type="text" placeholder="Search or jump to..." />
                    <div className="search-slash">/</div>
                </div>
                <button className="btn-sign-in">Sign in</button>
                <button className="btn-sign-up">Sign up</button>
            </div>
        </div>
    );
};

const MenuMobile = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="MenuMobile">
            <button onClick={() => setIsOpen((prev) => !prev)}>
                <FiMenu />
            </button>
            <ul className={`${isOpen ? 'show' : 'hide'}`}>
                <li>Product</li>
                <li>Solutions</li>
                <li>Open Source</li>
                <li>Pricing</li>
            </ul>
        </div>
    );
};
export default Header;
