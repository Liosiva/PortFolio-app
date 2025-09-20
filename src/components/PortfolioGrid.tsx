"use client";

import React, { useState } from "react";
import { Card } from "./ui/card";
import ProjectLightbox from "./ProjectLightbox";

interface Project {
  id: string;
  title: string;
  thumbnail: string;
  images: string[];
  tools: string[];
  description: string;
  concept: string;
  designStory: string;
}

export default function PortfolioGrid() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  // Mock data for portfolio projects
  const projects: Project[] = [
    {
      id: "1",
      title: "Brand Identity - Eco Cafe",
      thumbnail:
        "https://images.unsplash.com/photo-1583623025817-d180a2221d0a?w=600&q=80",
      images: [
        "https://images.unsplash.com/photo-1583623025817-d180a2221d0a?w=1200&q=80",
        "https://images.unsplash.com/photo-1583623733044-f9a7d2b4be0a?w=1200&q=80",
        "https://images.unsplash.com/photo-1583623733044-f9a7d2b4be0a?w=1200&q=80",
      ],
      tools: ["Adobe Illustrator", "Adobe Photoshop", "Figma"],
      description:
        "Complete brand identity design for an eco-friendly coffee shop.",
      concept:
        "The concept focused on sustainability and organic elements while maintaining a modern, clean aesthetic that appeals to environmentally conscious consumers.",
      designStory: "Explored vibrant color palettes for branding.",
    },
    {
      id: "2",
      title: "Mobile App UI Design",
      thumbnail:
        "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?w=600&q=80",
      images: [
        "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?w=1200&q=80",
        "https://images.unsplash.com/photo-1556155092-490a1ba16284?w=1200&q=80",
        "https://images.unsplash.com/photo-1556155092-8707de31f9c4?w=1200&q=80",
      ],
      tools: ["Figma", "Adobe XD", "Sketch"],
      description: "UI/UX design for a fitness tracking mobile application.",
      concept:
        "Created an intuitive and visually appealing interface that motivates users to achieve their fitness goals through gamification elements and clean data visualization.",
      designStory: "Explored vibrant color palettes for branding.",
    },
    {
      id: "3",
      title: "Event Poster Series",
      thumbnail:
        "https://images.unsplash.com/photo-1543857778-c4a1a9e0615f?w=600&q=80",
      images: [
        "https://images.unsplash.com/photo-1543857778-c4a1a9e0615f?w=1200&q=80",
        "https://images.unsplash.com/photo-1520209759809-a9bcb6cb3241?w=1200&q=80",
        "https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?w=1200&q=80",
      ],
      tools: ["Adobe Illustrator", "Adobe Photoshop", "Procreate"],
      description: "Series of promotional posters for a music festival.",
      concept:
        "Designed a cohesive series of posters with vibrant colors and dynamic typography to capture the energy and diversity of the festival lineup.",
      designStory: "Explored vibrant color palettes for branding."
    },
    {
      id: "4",
      title: "Product Packaging",
      thumbnail:
        "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=600&q=80",
      images: [
        "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=1200&q=80",
        "https://images.unsplash.com/photo-1589839280928-fb0da5201818?w=1200&q=80",
        "https://images.unsplash.com/photo-1605236453806-6ff36851218e?w=1200&q=80",
      ],
      tools: ["Adobe Illustrator", "Adobe Dimension", "Blender"],
      description: "Packaging design for an artisanal skincare line.",
      concept:
        "Created minimalist yet luxurious packaging that emphasizes natural ingredients and sustainability while standing out on retail shelves.",
      designStory: "Explored vibrant color palettes for branding."
    },
    {
      id: "5",
      title: "Editorial Design",
      thumbnail:
        "https://images.unsplash.com/photo-1544210163-257effe9399e?w=600&q=80",
      images: [
        "https://images.unsplash.com/photo-1544210163-257effe9399e?w=1200&q=80",
        "https://images.unsplash.com/photo-1596265371388-43edbaadab94?w=1200&q=80",
        "https://images.unsplash.com/photo-1603796846097-bee99e4a601f?w=1200&q=80",
      ],
      tools: ["Adobe InDesign", "Adobe Photoshop", "Adobe Illustrator"],
      description:
        "Magazine layout and editorial design for a fashion publication.",
      concept:
        "Developed a sophisticated and contemporary layout that balances striking imagery with readable typography to showcase fashion content effectively.",
      designStory: "Explored vibrant color palettes for branding."
    },
    {
      id: "6",
      title: "Logo Collection",
      thumbnail:
        "https://images.unsplash.com/photo-1560157368-946d9c8f7cb6?w=600&q=80",
      images: [
        "https://images.unsplash.com/photo-1560157368-946d9c8f7cb6?w=1200&q=80",
        "https://images.unsplash.com/photo-1636059305138-8fa7159a7093?w=1200&q=80",
        "https://images.unsplash.com/photo-1629429407759-01cd3d7cfb38?w=1200&q=80",
      ],
      tools: ["Adobe Illustrator", "Procreate", "Figma"],
      description:
        "Collection of logo designs for various clients and industries.",
      concept:
        "Each logo was crafted to capture the essence of the brand while ensuring versatility, memorability, and timeless appeal.",
      designStory: "Explored vibrant color palettes for branding."
    },
    {
      id: "7",
      title: "Social Media Campaign",
      thumbnail:
        "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&q=80",
      images: [
        "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=1200&q=80",
        "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=1200&q=80",
        "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=1200&q=80",
      ],
      tools: ["Adobe Photoshop", "Canva", "Adobe Illustrator"],
      description:
        "Cohesive social media graphics for a product launch campaign.",
      concept:
        "Designed a series of visually consistent and engaging posts that tell a compelling story about the product while driving user engagement.",
      designStory: "Explored vibrant color palettes for branding."
    },
    {
      id: "8",
      title: "Website Redesign",
      thumbnail:
        "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=600&q=80",
      images: [
        "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=1200&q=80",
        "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=1200&q=80",
        "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=1200&q=80",
      ],
      tools: ["Figma", "Adobe XD", "WordPress"],
      description: "Complete redesign of an e-commerce website interface.",
      concept:
        "Transformed an outdated website into a modern, user-friendly experience with improved navigation, visual hierarchy, and conversion-focused elements.",
      designStory: "Explored vibrant color palettes for branding."
    },
    {
      id: "9",
      title: "Illustration Series",
      thumbnail:
        "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&q=80",
      images: [
        "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&q=80",
        "https://images.unsplash.com/photo-1633526543814-9718c8922b7a?w=1200&q=80",
        "https://images.unsplash.com/photo-1569172122301-bc5008bc09c5?w=1200&q=80",
      ],
      tools: ["Procreate", "Adobe Illustrator", "Adobe Photoshop"],
      description: "Series of digital illustrations for a children's book.",
      concept:
        "Created whimsical and engaging illustrations that bring the story to life while appealing to both children and adults with rich details and vibrant colors.",
      designStory: "Explored vibrant color palettes for branding."
    },
  ];

  const openLightbox = (project: Project) => {
    setSelectedProject(project);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    // Optional: Add a timeout to clear the selected project after animation completes
    setTimeout(() => setSelectedProject(null), 300);
  };

  return (
    <section className="w-full py-16 bg-white" id="portfolio">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
          {projects.map((project) => (
            <div
              key={project.id}
              className="aspect-square relative overflow-hidden group cursor-pointer transition-all duration-300 hover:shadow-lg"
              onClick={() => openLightbox(project)}
            >
              <Card className="w-full h-full border-0 rounded-md overflow-hidden">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center">
                  <h3 className="text-white text-lg font-medium px-4 text-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    {project.title}
                  </h3>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectLightbox
          project={selectedProject}
          isOpen={isLightboxOpen}
          onClose={closeLightbox}
        />
      )}
    </section>
  );
}
