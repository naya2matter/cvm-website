import { Service } from "@/types/service";
import { IoMdMusicalNote } from "react-icons/io";
import { FaGuitar, FaMicrophone, FaHeadphones } from "react-icons/fa";

export const services: Service[] = [
  {
    id: 1,
    title: "Music Production",
    shortDescription: "Professional studio-quality production.",
    longDescription:
      "We provide full music production services including composition, recording, mixing, and mastering with industry-standard tools.",
    icon: IoMdMusicalNote,
    image: "/img/service.jpg",
  },
  {
    id: 2,
    title: "Live Performance",
    shortDescription: "Stage-ready performance setup.",
    longDescription:
      "Complete live performance solutions including sound setup, rehearsal support, and stage management.",
    icon: IoMdMusicalNote,
    image: "/img/service.jpg",
  },
  {
    id: 3,
    title: "Vocal Recording",
    shortDescription: "Crystal clear vocal sessions.",
    longDescription:
      "Professional vocal recording sessions with acoustic treatment and premium microphones.",
    icon: IoMdMusicalNote,
    image: "/img/service.jpg",
  },
  {
    id: 4,
    title: "Audio Mixing",
    shortDescription: "Balanced and powerful mix.",
    longDescription:
      "Advanced mixing services ensuring clarity, depth, and balance across all frequencies.",
    icon: IoMdMusicalNote,
    image: "/img/service.jpg",
  },
  {
    id: 5,
    title: "Mastering",
    shortDescription: "Industry-level mastering.",
    longDescription:
      "Final polish and loudness optimization for streaming platforms and radio-ready output.",
    icon: IoMdMusicalNote,
    image: "/img/service.jpg",
  },
  {
    id: 6,
    title: "Songwriting",
    shortDescription: "Creative songwriting support.",
    longDescription:
      "Collaborative songwriting sessions to develop lyrics, melodies, and musical arrangements.",
    icon: IoMdMusicalNote,
    image: "/img/service.jpg",
  },
  {
    id: 7,
    title: "Sound Design",
    shortDescription: "Custom sound creation.",
    longDescription:
      "Custom sound design for films, ads, and multimedia productions.",
    icon: IoMdMusicalNote,
    image: "/img/service.jpg",
  },
];
