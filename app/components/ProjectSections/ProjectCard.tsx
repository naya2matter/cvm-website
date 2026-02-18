"use client";

import React from "react";
import Link from "next/link";

interface ProjectCardProps {
  id: number;
  image: string;
  title: string;
  description?: string;
  link?: string;
  className?: string; // Add className here
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  id,
  image,
  title,
  description,
  link,
  className, // Destructure className
}) => {
  const handleClick = () => {
    if (typeof window === "undefined") return;
    try {
      const scrollY = window.scrollY || window.pageYOffset ;
      const state = history.state || {};
      // store previous scroll position on history state so it can be restored later
      history.replaceState({ ...state, prevScroll: scrollY }, document.title);
    } catch (e) {
      // ignore errors
    }
  };
  return (
    <div
      className={`flex flex-col rounded-[10px] overflow-hidden shadow-lg group project-card ${className}`} // Add className for styling flexibility
      style={{
        width: "100%", // Make the card responsive
        maxWidth: "350px", // Max width for large screens
      }}
    >
      <div className="h-[273px] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="bg-[#F68620] p-4 flex flex-col items-center gap-3">
        <h3 className="text-offwhite font-bold text-lg">{title}</h3>
        {description && <p className="text-offwhite text-sm text-center">{description}</p>}
        <Link
          href={link ? link : `/projects/${id}`} // Correct dynamic route
          onClick={handleClick}
          className="bg-[#F8F8F8] text-[#1E1E1E] border border-[#F68620] px-4 py-2 rounded-[10px] text-sm font-medium transition-colors"
        >
          See Details
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
