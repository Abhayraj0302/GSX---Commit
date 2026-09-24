import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const items = [
  {
    id: "workshops",
    number: "01",
    title: "Workshops & Bootcamps",
    content:
      "Intensive, hands-on sessions on Git, GitHub, AI/ML, web development, and emerging tech — led by peers and industry professionals to bridge the gap between theory and practice.",
  },
  {
    id: "hackathons",
    number: "02",
    title: "Hackathons & Dev Sprints",
    content:
      "48-hour build marathons and competitive coding events where teams ideate, prototype, and ship real products — pushing creative and technical boundaries under pressure.",
  },
  {
    id: "community",
    number: "03",
    title: "Community & Mentorship",
    content:
      "A tight-knit network of builders across all branches and years. We run peer mentoring circles, study groups, and open office hours to help every member level up.",
  },
  {
    id: "industry",
    number: "04",
    title: "Industry & Open Source",
    content:
      "Guest talks from tech leaders, internship pipelines, and collaborative open-source projects that give members real-world experience and industry-ready portfolios.",
  },
];

export function UniqueAccordion() {
  const [activeId, setActiveId] = useState("workshops");
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <div className="accordion-wrapper">
      <div className="accordion-list">
        {items.map((item) => {
          const isActive = activeId === item.id;
          const isHovered = hoveredId === item.id;

          return (
            <div key={item.id} className="accordion-item-container">
              <motion.button
                onClick={() => setActiveId(isActive ? null : item.id)}
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="accordion-trigger"
                initial={false}
              >
                <div className="accordion-trigger-inner">
                  {/* Number with animated circle */}
                  <div className="accordion-number-wrap">
                    <motion.div
                      className="accordion-number-bg"
                      initial={false}
                      animate={{
                        scale: isActive ? 1 : isHovered ? 0.85 : 0,
                        opacity: isActive ? 1 : isHovered ? 0.15 : 0,
                      }}
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    />
                    <motion.span
                      className="accordion-number"
                      animate={{
                        color: isActive ? "#ffffff" : "#6b7280",
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      {item.number}
                    </motion.span>
                  </div>

                  {/* Title */}
                  <motion.h3
                    className="accordion-title"
                    animate={{
                      x: isActive || isHovered ? 4 : 0,
                      color: isActive || isHovered ? "#f0f0f5" : "#6b7280",
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  >
                    {item.title}
                  </motion.h3>

                  {/* Plus / X indicator */}
                  <div className="accordion-indicator-wrap">
                    <motion.div
                      className="accordion-indicator"
                      animate={{ rotate: isActive ? 45 : 0 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <motion.svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        animate={{ opacity: isActive || isHovered ? 1 : 0.4 }}
                        transition={{ duration: 0.2 }}
                      >
                        <path
                          d="M8 1V15M1 8H15"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                      </motion.svg>
                    </motion.div>
                  </div>
                </div>

                {/* Underline */}
                <div className="accordion-underline-base" />
                <motion.div
                  className="accordion-underline-active"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: isActive ? 1 : isHovered ? 0.3 : 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              </motion.button>

              {/* Content */}
              <AnimatePresence mode="wait">
                {isActive && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: "auto",
                      opacity: 1,
                      transition: {
                        height: { type: "spring", stiffness: 300, damping: 30 },
                        opacity: { duration: 0.2, delay: 0.1 },
                      },
                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                      transition: {
                        height: { type: "spring", stiffness: 300, damping: 30 },
                        opacity: { duration: 0.1 },
                      },
                    }}
                    className="accordion-content-outer"
                  >
                    <motion.p
                      className="accordion-content-text"
                      initial={{ y: -10 }}
                      animate={{ y: 0 }}
                      exit={{ y: -10 }}
                      transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    >
                      {item.content}
                    </motion.p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}
