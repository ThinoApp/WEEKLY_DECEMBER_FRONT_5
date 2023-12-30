import { useEffect } from 'react';
import './App.css';
import AdvancedSecurity from './components/AdvancedSecurity/AdvancedSecurity';
import Collaboration from './components/Collaboration/Collaboration';
import Cta from './components/Cta/Cta';
import Footer from './components/Footer/Footer';
import GithubCopilot from './components/GithubCopilot/GithubCopilot';
import GithubDiscussion from './components/GithubDiscussion/GithubDiscussion';
import GithubFeatures from './components/GithubFeatures/GithubFeatures';
import GithubIssues from './components/GithubIssues/GithubIssues';
import GithubUtility from './components/GithubUtility/GithubUtility';
import Hero from './components/Hero/Hero';
import Planet from './components/Planet/Planet';
import Productivity from './components/Productivity/Productivity';
import Security from './components/Security/Security';
import StickyHeader from './components/StickyHeader/StickyHeader';

function App() {
    // Make StickyHeader Sticky when depassing scrolling height of 100vh
    useEffect(() => {
        const stickyHeader = document.querySelector('.StickyHeader') as HTMLElement;
        const stickyHeaderHeight = stickyHeader.offsetHeight;
        const hero = document.querySelector('.Hero') as HTMLElement;
        const heroHeight = hero.offsetHeight;
        const stickyHeaderTop = heroHeight - stickyHeaderHeight;
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            if (scrollPosition >= stickyHeaderTop) {
                stickyHeader.classList.add('show');
                stickyHeader.classList.remove('hide');
            } else {
                stickyHeader.classList.add('hide');
                stickyHeader.classList.remove('show');
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div className="App">
            <Hero />
            <StickyHeader />
            <Productivity />
            <GithubCopilot />
            <GithubFeatures />
            <Security />
            <AdvancedSecurity />
            <GithubUtility />
            <Collaboration />
            <GithubIssues />
            <GithubDiscussion />
            <Cta />
            <Planet />
            <Footer />
        </div>
    );
}

export default App;
