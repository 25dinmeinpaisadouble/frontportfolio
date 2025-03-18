import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Home, User, Code2, Briefcase, Mail, Linkedin } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import ProfilePic from '../assets/profile-pic.jpg';

interface NavItem {
  path: string;
  icon: LucideIcon;
  label: string;
}

interface SocialLink {
  url: string;
  icon: LucideIcon;
  label: string;
  hoverColor: string;
}

const navItems: NavItem[] = [
  { path: '/', icon: Home, label: 'Home' },
  { path: '/about', icon: User, label: 'About' },
  { path: '/skills', icon: Code2, label: 'Skills' },
  { path: '/projects', icon: Briefcase, label: 'Projects' },
  { path: '/contact', icon: Mail, label: 'Contact' },
];

const socialLinks: SocialLink[] = [
  { 
    url: 'https://www.linkedin.com/in/ishu-rawat/', 
    icon: Linkedin, 
    label: 'LinkedIn',
    hoverColor: 'hover:text-blue-700'
  },
  // change the flex box to justify-center when adding more social links
];

const NavItemComponent = ({ path, icon: Icon, label }: NavItem) => (
  <NavLink
    to={path}
    className={({ isActive }) =>
      `flex items-center px-4 py-3 mb-2 rounded-lg transition-colors ${
        isActive ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-100'
      }`
    }
  >
    <Icon size={20} className="mr-3" />
    {label}
  </NavLink>
);

const SocialLinkComponent = ({ url, icon: Icon, label, hoverColor }: SocialLink) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className={`text-gray-600 ${hoverColor}`}
  >
    <Icon size={20} />
  </a>
);

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);
  const closeSidebar = () => setIsOpen(false);

  return (
    <>
      <button
        onClick={toggleSidebar}
        className="fixed top-4 left-8 z-50 p-2 bg-white rounded-lg shadow-lg md:hidden"
        aria-label={isOpen ? "Close sidebar" : "Open sidebar"}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <aside
        className={`fixed inset-y-0 left-0 z-40 w-64 bg-white border-r transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0`}
      >
        <div className="flex flex-col h-full">
          <div className="p-6 text-center">
            <img
              src={ProfilePic}
              alt="Profile"
              className="w-24.05 h-24.05 mx-auto rounded-full object-cover mb-4"
            />
            <h2 className="text-xl font-bold">Ishu Rawat</h2>
            <p className="text-gray-600">Developer</p>
          </div>

          <nav className="flex-1 px-4">
            {navItems.map((item) => (
              <div key={item.path} onClick={closeSidebar}>
                <NavItemComponent {...item} />
              </div>
            ))}
          </nav>

          <div className="p-6 border-t">
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <SocialLinkComponent key={index} {...link} />
              ))}
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;