"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion, useInView, easeOut, easeInOut } from "framer-motion";
import { ChevronRight } from "lucide-react";

const OurMembersSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    amount: 0.3,
    once: false,
  });

  const members = [
    { id: 1, name: "Member 1", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face" },
    { id: 2, name: "Member 2", image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face" },
    { id: 3, name: "Member 3", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face" },
    { id: 4, name: "Member 4", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face" },
    { id: 5, name: "Member 5", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face" },
    { id: 6, name: "Member 6", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=300&fit=crop&crop=face" },
    { id: 7, name: "Member 7", image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=300&h=300&fit=crop&crop=face" },
  ];

  const itemsPerView = 3;

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  const nextSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % members.length);
        setIsTransitioning(false);
      }, 500);
    }
  };

  const getVisibleMembers = () => {
    const visibleMembers = [];
    for (let i = 0; i < itemsPerView; i++) {
      const index = (currentIndex + i) % members.length;
      visibleMembers.push({
        ...members[index],
        originalIndex: index,
      });
    }
    return visibleMembers;
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeOut } },
  };

  const membersContainerVariants = {
    hidden: { opacity: 0, y: 80 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.3, ease: easeOut } },
  };

  const buttonVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, delay: 0.8, ease: easeOut } },
  };

  return (
    <section ref={sectionRef} className="py-16 px-6 bg-black min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          variants={titleVariants}
          initial="hidden"
          animate={hasAnimated ? "visible" : "hidden"}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-left">
            <span className="text-white">OUR </span>
            <span className="text-[#FF1D1D]">MEMBERS</span>
          </h2>
        </motion.div>

        <motion.div
          variants={membersContainerVariants}
          initial="hidden"
          animate={hasAnimated ? "visible" : "hidden"}
          className="relative"
        >
          <div className="flex items-center gap-6">
            <div className="flex-1 overflow-hidden relative">
              <div className="flex gap-6 w-full overflow-hidden">
                {[...getVisibleMembers(), ...(isTransitioning ? [members[(currentIndex + 3) % members.length]] : [])].map((member, index) => {
                  const isNew = index === 3;
                  return (
                    <motion.div
                      key={`${member.id}-${currentIndex}-${index}`}
                      initial={{ x: isNew ? 400 : 0, opacity: isNew ? 0 : 1 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{
                        x: { duration: 0.5, ease: easeInOut },
                        opacity: { duration: isNew ? 0.6 : 0.3, ease: easeOut, delay: isNew ? 0.2 : 0 },
                      }}
                      className="w-1/3 shrink-0 group cursor-pointer"
                    >
                      <div
                        className="relative overflow-hidden bg-gray-800"
                        style={{
                          width: 310,
                          height: 356,
                          borderRadius: 30,
                          boxShadow: "0 8px 32px rgba(0,0,0,0.18)",
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                          style={{
                            width: 310,
                            height: 356,
                            borderRadius: 30,
                          }}
                        />
                      </div>
                      <p className="text-white text-center mt-4 font-medium">{member.name}</p>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            <motion.div
              variants={buttonVariants}
              initial="hidden"
              animate={hasAnimated ? "visible" : "hidden"}
              className="flex flex-col gap-4"
            >
              <button
                onClick={nextSlide}
                className="w-12 h-12 bg-[#FF1D1D] rounded-full flex items-center justify-center text-white hover:bg-[#e01616] transition-all duration-300 shadow-lg hover:shadow-xl"
                aria-label="Next member"
              >
                <ChevronRight size={20} />
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OurMembersSection;
