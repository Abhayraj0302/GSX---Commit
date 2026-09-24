import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Events", href: "#events" },
  { label: "Socials", href: "#community" },
];

// Tab with forwarded ref
const Tab = React.forwardRef(({ children, setPosition, onClick }, ref) => {
  return (
    <li
      ref={ref}
      onClick={onClick}
      onMouseEnter={() => {
        if (!ref?.current) return;
        const { width } = ref.current.getBoundingClientRect();
        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        });
      }}
      className="slide-tab-item"
    >
      <span>{children}</span>
    </li>
  );
});

// Animated cursor — fast, crisp glide
const Cursor = ({ position }) => (
  <motion.li
    animate={{ ...position }}
    transition={{ type: "spring", stiffness: 450, damping: 32 }}
    className="slide-tab-cursor"
  />
);

export function SlideTabs() {
  const [position, setPosition] = useState({ left: 0, width: 0, opacity: 0 });
  const [selected, setSelected] = useState(0);
  const tabsRef = useRef([]);
  const isClickScrollingRef = useRef(false);
  const clickTimeoutRef = useRef(null);

  // Set cursor on the selected tab on mount / change
  useEffect(() => {
    const el = tabsRef.current[selected];
    if (el) {
      const { width } = el.getBoundingClientRect();
      setPosition({ left: el.offsetLeft, width, opacity: 1 });
    }
  }, [selected]);

  // If user manually scrolls or touches, immediately release click lock
  useEffect(() => {
    const releaseLock = () => {
      isClickScrollingRef.current = false;
    };
    window.addEventListener("wheel", releaseLock, { passive: true });
    window.addEventListener("touchstart", releaseLock, { passive: true });
    return () => {
      window.removeEventListener("wheel", releaseLock);
      window.removeEventListener("touchstart", releaseLock);
      if (clickTimeoutRef.current) clearTimeout(clickTimeoutRef.current);
    };
  }, []);

  // Highlight active section on scroll
  useEffect(() => {
    const sectionIds = NAV_ITEMS.map((item) =>
      item.href.replace("#", "")
    );

    const handleScroll = () => {
      // Don't override indicator while smooth-scrolling from a tab click
      if (isClickScrollingRef.current) return;

      // Bottom of page: activate Socials
      const isBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 100;

      if (isBottom) {
        setSelected(NAV_ITEMS.length - 1);
        return;
      }

      const scrollY = window.scrollY + 140;
      let activeIdx = 0;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        if (!sectionIds[i]) continue;
        const section = document.getElementById(sectionIds[i]);
        if (section && section.offsetTop <= scrollY) {
          activeIdx = i;
          break;
        }
      }

      if (activeIdx !== selected) {
        setSelected(activeIdx);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [selected]);

  const handleTabClick = (index, href) => {
    // Suppress scroll-spy during the smooth-scroll so intermediate sections aren't highlighted
    isClickScrollingRef.current = true;
    setSelected(index);

    const el = tabsRef.current[index];
    if (el) {
      const { width } = el.getBoundingClientRect();
      setPosition({ left: el.offsetLeft, width, opacity: 1 });
    }

    if (clickTimeoutRef.current) {
      clearTimeout(clickTimeoutRef.current);
    }
    clickTimeoutRef.current = setTimeout(() => {
      isClickScrollingRef.current = false;
    }, 1100);

    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <ul
      onMouseLeave={() => {
        const el = tabsRef.current[selected];
        if (el) {
          const { width } = el.getBoundingClientRect();
          setPosition({ left: el.offsetLeft, width, opacity: 1 });
        }
      }}
      className="slide-tabs"
    >
      {NAV_ITEMS.map((item, i) => (
        <Tab
          key={item.label}
          ref={(el) => (tabsRef.current[i] = el)}
          setPosition={setPosition}
          onClick={() => handleTabClick(i, item.href)}
        >
          {item.label}
        </Tab>
      ))}
      <Cursor position={position} />
    </ul>
  );
}
