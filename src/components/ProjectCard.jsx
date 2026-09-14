import { ArrowUpRight, Github } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function ProjectCard({ project }) {
  const image = project.image || project.imageInner;

  return (
    <>
      <motion.article layout className="project-card">
        <Link to={`/projects/${project.id}`} className="project-image" aria-label={`View ${project.title} details`}>
          <div className="project-image-grid" />
          {image ? (
            <img
              src={image}
              alt={project.title}
              loading="lazy"
              onError={(event) => {
                event.currentTarget.style.display = "none";
              }}
            />
          ) : null}
          <span className="project-image-label">{project.imageLabel}</span>
          <span className="project-number">{project.number}</span>
          <span className="project-open"><ArrowUpRight size={19} /></span>
        </Link>
        <div className="project-content">
          <div className="project-meta"><span>{project.category}</span><span>{project.role}</span></div>
          <h3><Link to={`/projects/${project.id}`}>{project.title}</Link></h3>
          <p>{project.description}</p>
          <div className="tag-list">{project.technologies.map((tech) => <span key={tech}>{tech}</span>)}</div>
          <div className="project-actions">
            <Link to={`/projects/${project.id}`} className="text-link">View Details <ArrowUpRight size={16} /></Link>
            {project.githubUrl ? <a href={project.githubUrl} target="_blank" rel="noreferrer" className="icon-text"><Github size={16} /> GitHub</a> : <span className="muted-action"><Github size={16} /> GitHub</span>}
          </div>
        </div>
      </motion.article>
    </>
  );
}
