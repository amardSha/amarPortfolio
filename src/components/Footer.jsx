import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import profile from "../data/profile";
import { SiReact } from "react-icons/si";

export default function Footer() {
  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div className="flex"><span className="footer-mark"><SiReact size={24} /></span><h3>{profile.name}<p>React Frontend Developer</p></h3></div>
          <div className="footer-links"><div><span>Quick Links</span><button onClick={() => go("home")}>Home</button><button onClick={() => go("about")}>About</button><button onClick={() => go("skills")}>Skills</button><button onClick={() => go("projects")}>Projects</button><button onClick={() => go("experience")}>Experience</button><button onClick={() => go("contact")}>Contact</button></div></div>
          <div className="footer-social"><span>Connect</span><a href={profile.github} target="_blank" rel="noreferrer"><Github size={16}/> GitHub <ArrowUpRight size={14}/></a><a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={16}/> LinkedIn <ArrowUpRight size={14}/></a><a href={`mailto:${profile.email}`}><Mail size={16}/> Email <ArrowUpRight size={14}/></a></div>
        </div>
        <div className="footer-bottom"><span>© 2026 {profile.name}. All rights reserved.</span><span>Designed & built with React.</span></div>
      </div> 
    </footer>
  );
}
