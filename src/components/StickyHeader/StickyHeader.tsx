import { FiChevronRight } from 'react-icons/fi';
import './StickyHeader.scss';
import { useState } from 'react';
import { MdClose } from 'react-icons/md';
import { FiChevronDown } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import useMenuStore from '@/store/menuStore';

const menus = [
    {
        id: 0,
        value: 'Productivity',
    },
    {
        id: 1,
        value: 'Security',
    },
    {
        id: 2,
        value: 'Collaboration',
    },
];
const StickyHeader = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { activeMenu, setActiveMenu } = useMenuStore();
    return (
        <div className={`StickyHeader hide ${isOpen && 'isOpen'}`}>
            <div className="flex sm:hidden w-full px-4 z-10 justify-between items-center py-4 bg-[#0d1117]">
                <p className="text-xl font-sans-md text-[#1f6feb]">{activeMenu.value}</p>
                {isOpen ? (
                    <MdClose onClick={() => setIsOpen(false)} className="text-white text-3xl" />
                ) : (
                    <FiChevronDown onClick={() => setIsOpen(true)} className="text-white text-3xl" />
                )}
            </div>
            <motion.div
                className="hidden sm:flex w-full z-10 px-4 bg-[#0d1117]"
                key="menu"
                initial={{ height: 0 }}
                animate={{ height: 250 }}
                exit={{ height: 0 }}
            >
                <ul>
                    {menus.map((item) => (
                        <li>{item.value}</li>
                    ))}
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
            </motion.div>
            <AnimatePresence mode="sync">
                {isOpen && (
                    <motion.div
                        className="block sm:hidden w-full z-10 px-4 bg-[#0d1117]"
                        key="menu"
                        initial={{ height: 0 }}
                        animate={{ height: 250 }}
                        exit={{ height: 0 }}
                    >
                        <ul>
                            {menus.map((item) => (
                                <li
                                    className={`${activeMenu.id === item.id && 'hidden'}`}
                                    onClick={() => {
                                        window.location.href = `#${item.value}`;
                                        setActiveMenu(item);
                                    }}
                                >
                                    {item.value}
                                </li>
                            ))}
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
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default StickyHeader;
