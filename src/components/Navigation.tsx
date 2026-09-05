'use client';

// Next.js and React

// Third-party libraries
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import Image from 'next/image';
import { useState, useEffect } from 'react';

// Local imports
import { useTheme } from '@/context/ThemeContext';

const Navigation = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    const handleInitialScroll = () => {
      if (window.location.hash) {
        // Wait for all components to be mounted
        setTimeout(() => {
          scrollToSection(window.location.hash);
        }, 500);
      }
    };

    // Initial scroll check
    const timer = setTimeout(handleInitialScroll, 300);

    // Add event listeners
    window.addEventListener('load', handleInitialScroll);
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Cleanup function
    return () => {
      clearTimeout(timer);
      window.removeEventListener('load', handleInitialScroll);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Resume', href: '#resume' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    {
      icon: <Github size={18} />,
      href: 'https://github.com/anmolsharma152',
      label: 'GitHub',
    },
    {
      icon: <Linkedin size={18} />,
      href: 'https://linkedin.com/in/anmolsharma152',
      label: 'LinkedIn',
    },
    {
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.494 17.29a.75.75 0 01-1.033.248c-2.83-1.73-6.393-2.12-10.59-1.163a.75.75 0 11-.334-1.462c4.593-1.047 8.528-.6 11.71 1.344a.75.75 0 01.247 1.033zm1.464-3.253a.938.938 0 01-1.29.31c-3.238-1.99-8.175-2.566-12.005-1.403a.938.938 0 11-.548-1.793c4.38-1.33 9.818-.69 13.533 1.596a.938.938 0 01.31 1.29zm.125-3.385c-3.882-2.306-10.29-2.518-14.01-1.39a1.125 1.125 0 11-.645-2.155c4.275-1.298 11.34-1.043 15.82 1.616a1.125 1.125 0 11-1.165 1.929z" />
        </svg>
      ),
      href: 'https://open.spotify.com/user/31fzcv4ts52untro5xsamjhddtre',
      label: 'Spotify',
    },
    {
      icon: <Mail size={18} />,
      href: 'mailto:anmolsharma152.dev@gmail.com',
      label: 'Email',
    },
  ];

  const scrollToSection = (href: string) => {
    // Remove the # from the href to get the ID
    const id = href.replace('#', '');
    if (!id) return;

    // Close mobile menu if open
    setIsMenuOpen(false);

    // Small delay to ensure state updates before scrolling
    setTimeout(() => {
      const element = document.getElementById(id);
      if (!element) {
        console.error(`Element with id '${id}' not found`);
        return;
      }

      // Calculate the correct scroll position
      const headerOffset = 80; // Height of your header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      // Scroll to the element
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });

      // Update URL without adding to history
      window.history.pushState({}, '', href);
    }, 50); // Small delay to ensure state updates
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    scrollToSection(href);
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-background/80 dark:bg-background/80 backdrop-blur-md border-b border-border/50'
          : 'bg-background/50 dark:bg-background/50 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <motion.a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex items-center space-x-3 group cursor-pointer"
          >
            <motion.div
              className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-primary/30"
              whileHover={{ scale: 1.05 }}
            >
              <Image
                src="/images/Anmol.webp"
                alt="Profile"
                fill
                className="object-cover"
                sizes="40px"
                priority
              />
            </motion.div>
            <span className="font-heading text-xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
              Anmol Sharma
            </span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-0.5 lg:space-x-1">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 * index, duration: 0.3 }}
                className="px-2.5 lg:px-4 py-2 text-xs lg:text-sm font-medium text-foreground/80 hover:text-primary transition-colors duration-200 relative group cursor-pointer whitespace-nowrap"
              >
                {item.name}
                <span className="absolute bottom-1 left-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 transition-all duration-300 group-hover:w-4/5 group-hover:left-[10%]" />
              </motion.a>
            ))}
          </div>

          {/* Right Side - Theme Toggle & Socials */}
          <div className="flex items-center space-x-1 sm:space-x-2">
            {/* Social Icons - Shown on desktop (>= 1024px), hidden on half-screen/tablet to prevent crowding */}
            <div className="hidden lg:flex items-center space-x-1 mr-2 lg:mr-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    delay: 0.5 + index * 0.1,
                    type: 'spring',
                    stiffness: 300,
                    damping: 20,
                  }}
                  className="p-2 rounded-lg text-foreground/70 hover:text-primary hover:bg-foreground/5 transition-colors duration-200"
                  aria-label={link.label}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>

            {/* Theme Toggle */}
            <motion.button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-foreground/5 transition-colors duration-200 text-foreground/80"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, type: 'spring', stiffness: 300, damping: 20 }}
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-yellow-300" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </motion.button>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-foreground/5 transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -20 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={{ opacity: 0, height: 0, y: -20 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="md:hidden overflow-hidden bg-background/80 dark:bg-background/90 backdrop-blur-lg border-t border-border/60 dark:border-border/30 shadow-lg"
            >
              <div className="px-2 pt-2 pb-4 space-y-1">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.05 * index, duration: 0.2 }}
                    className="block w-full text-left px-4 py-3 text-base font-medium text-foreground/90 hover:text-primary hover:bg-foreground/5 rounded-lg transition-colors duration-200"
                  >
                    {item.name}
                  </motion.a>
                ))}

                {/* Social Icons - Mobile */}
                <div className="pt-2 mt-4 border-t border-border/50 dark:border-border/20">
                  <div className="flex justify-center space-x-4 px-4">
                    {socialLinks.map((link, index) => (
                      <motion.a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{
                          delay: 0.2 + index * 0.1,
                          type: 'spring',
                          stiffness: 300,
                        }}
                        className="p-2 rounded-full bg-foreground/5 hover:bg-foreground/10 text-foreground/70 hover:text-primary transition-colors duration-200"
                        aria-label={link.label}
                      >
                        {link.icon}
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navigation;
