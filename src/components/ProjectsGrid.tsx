import { motion } from "framer-motion"
import { ExternalLink, Github, Play } from "lucide-react"
import { useState } from "react"
import { socialLinks } from "../data/personal"
import { VideoModal } from "./VideoModal"
import { useLanguage } from "../contexts/LanguageContext"

interface Project {
  id: number
  titleKey?: string
  descriptionKey?: string
  title: string
  description: string
  image: string
  link: string
  type: "web" | "mobile"
  videoUrl?: string
  appetizeUrl?: string
}

interface ProjectsGridProps {
  projects: Project[]
}

export const ProjectsGrid = ({ projects }: ProjectsGridProps) => {
  const { t } = useLanguage()
  const [videoModalOpen, setVideoModalOpen] = useState(false)
  const [selectedVideo, setSelectedVideo] = useState<{ url: string; title: string; description: string } | null>(null)

  // Show only first 6 projects in grid
  const displayProjects = projects.slice(0, 6)

  const handleProjectClick = (project: Project, e: React.MouseEvent) => {
    if (project.videoUrl) {
      e.preventDefault()
      setSelectedVideo({
        url: project.videoUrl,
        title: project.titleKey ? t(project.titleKey) : project.title,
        description: project.descriptionKey ? t(project.descriptionKey) : project.description
      })
      setVideoModalOpen(true)
    }
  }

  return (
    <div className="space-y-8">
      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {displayProjects.map((project, index) => (
          <motion.a
            key={project.id}
            href={project.videoUrl ? '#' : project.link}
            target={project.videoUrl ? undefined : "_blank"}
            rel={project.videoUrl ? undefined : "noopener noreferrer"}
            onClick={(e) => handleProjectClick(project, e)}
            className="group relative aspect-video rounded-xl overflow-hidden card-gradient border border-primary-500/20 hover:border-primary-500/50 transition-all duration-300 cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
          >
            {/* Project Image */}
            <div className="absolute inset-0">
              <img
                src={project.image}
                alt={`Vista previa de ${project.title}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-primary-900/30 to-purple-900/30" />
            </div>

            {/* Video Badge */}
            {project.videoUrl && (
              <div className="absolute top-4 right-4 z-10">
                <div className="flex items-center gap-2 px-3 py-2 bg-green-600/90 backdrop-blur-sm rounded-full text-white text-xs font-semibold">
                  <Play className="w-3 h-3" />
                  {t('projects.videoDemo')}
                </div>
              </div>
            )}

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Content */}
            <div className="absolute inset-0 p-6 flex flex-col justify-end">
              <h4 className="text-xl font-bold text-white mb-2 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                {project.titleKey ? t(project.titleKey) : project.title}
              </h4>
              <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 mb-3">
                {project.descriptionKey ? t(project.descriptionKey) : project.description}
              </p>
              <div className="flex items-center gap-2 text-primary-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {project.videoUrl ? (
                  <>
                    <Play className="w-4 h-4" />
                    <span className="text-sm">{t('projects.viewDemo')}</span>
                  </>
                ) : (
                  <>
                    <ExternalLink className="w-4 h-4" />
                    <span className="text-sm">{t('projects.viewProject')}</span>
                  </>
                )}
              </div>
            </div>
          </motion.a>
        ))}
      </div>

      {/* GitHub CTA */}
      <motion.a
        href={socialLinks.github}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-gradient-to-r from-primary-600 to-purple-600 hover:from-primary-500 hover:to-purple-500 transition-all duration-300 text-white font-semibold group"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.05 }}
      >
        <Github className="w-5 h-5 group-hover:rotate-12 transition-transform" />
        <span>{t('projects.githubCta')}</span>
      </motion.a>

      {/* Video Modal */}
      {selectedVideo && (
        <VideoModal
          isOpen={videoModalOpen}
          onClose={() => setVideoModalOpen(false)}
          videoUrl={selectedVideo.url}
          title={selectedVideo.title}
          description={selectedVideo.description}
        />
      )}
    </div>
  )
}
