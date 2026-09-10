import { useEffect, useState } from "react";
import axios from "axios";
import { ArrowUpRight, GitFork, Github as GithubIcon, Star } from "lucide-react";
import SectionHeading from "./SectionHeading";
import profile from "../data/profile";

export default function Github() {
  const [state, setState] = useState({ loading: false, repos: [], error: "" });

  useEffect(() => {
    if (!profile.githubUsername) return;
    setState({ loading: true, repos: [], error: "" });
    axios.get(`https://api.github.com/users/${profile.githubUsername}/repos?sort=updated&per_page=6`)
      .then((response) => setState({ loading: false, repos: response.data, error: "" }))
      .catch(() => setState({ loading: false, repos: [], error: "GitHub data could not be loaded right now." }));
  }, []);

  return (
    <section className="section-pad section-tint">
      <div className="container">
        <SectionHeading eyebrow="08 / GitHub" title="Code, projects & open source." text="A place to show the work behind the portfolio." />
        {!profile.githubUsername ? (
          <div className="github-empty">
            <GithubIcon size={34} />
            <div><h3>Connect your GitHub profile</h3><p>Set <code>githubUsername</code> in src/data/profile.js to enable the repository feed.</p></div>
            <a className="btn-primary" href={profile.github} target="_blank" rel="noreferrer">View GitHub <ArrowUpRight size={17} /></a>
          </div>
        ) : state.loading ? (
          <div className="github-grid">{[1,2,3].map((x) => <div className="skeleton-card" key={x} />)}</div>
        ) : state.error ? (
          <div className="empty-state">{state.error}</div>
        ) : state.repos.length === 0 ? (
          <div className="empty-state">No public repositories found.</div>
        ) : (
          <div className="github-grid">
            {state.repos.map((repo) => (
              <a className="repo-card" href={repo.html_url} target="_blank" rel="noreferrer" key={repo.id}>
                <div><GithubIcon size={18} /><ArrowUpRight size={16} /></div>
                <h3>{repo.name}</h3><p>{repo.description || "Frontend experiment or project."}</p>
                <footer><span><Star size={14} /> {repo.stargazers_count}</span><span><GitFork size={14} /> {repo.forks_count}</span><span>{repo.language || "Code"}</span></footer>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
