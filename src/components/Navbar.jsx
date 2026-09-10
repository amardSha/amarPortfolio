import { useEffect, useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { setTheme } from "../store/themeSlice";
import profile from "../data/profile";
import { SiReact } from "react-icons/si";

const links = [
  ["Home", "home"],
  ["About", "about"],
  ["Skills", "skills"],
  ["Experience", "experience"],
  ["Projects", "projects"],
  ["Services", "services"],
  ["Contact", "contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [compact, setCompact] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const theme = useAppSelector((state) => state.theme.value);
  const dispatch = useAppDispatch();

  const navigate = useNavigate();
  const location = useLocation();


  /* =====================================================
     ACTIVE SECTION / SCROLL SPY
  ===================================================== */
  useEffect(() => {

    // If we are on any project detail page
    if (location.pathname.startsWith("/projects/")) {
      setActiveSection("projects");
      return;
    }

    // Only run scroll spy on homepage
    if (location.pathname !== "/") {
      return;
    }

    const sections = links
      .map(([, id]) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {

        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio -
              a.intersectionRatio
          );

        if (visibleSections.length > 0) {
          setActiveSection(
            visibleSections[0].target.id
          );
        }
      },
      {
        root: null,
        threshold: [0.15, 0.3, 0.5, 0.7],
        rootMargin: "-20% 0px -55% 0px",
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };

  }, [location.pathname]);


  /* =====================================================
     COMPACT NAVBAR
  ===================================================== */
  useEffect(() => {

    const onScroll = () => {
      setCompact(window.scrollY > 30);
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };

  }, []);


  /* =====================================================
     NAVIGATION
  ===================================================== */
  const go = (id) => {

    setOpen(false);

    // Already on homepage
    if (location.pathname === "/") {

      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      return;
    }

    // From /projects/1, /projects/2 etc.
    navigate(`/#${id}`);
  };


  return (
    <header
      className={`site-nav ${
        compact ? "site-nav--compact" : ""
      }`}
    >

      <div className="container nav-inner">

        {/* BRAND */}
        <button
          className="brand"
          onClick={() => go("home")}
          aria-label="Go to home"
        >
          <span className="brand-mark">
            <SiReact size={24} />
          </span>

          <span>{profile.name}</span>
        </button>


        {/* NAVIGATION */}
        <nav
          className={`nav-links ${
            open ? "nav-links--open" : ""
          }`}
          aria-label="Primary navigation"
        >

          {links.map(([label, id]) => {

            const isActive =
              activeSection === id;

            return (
              <button
                key={id}
                onClick={() => go(id)}
                className={`nav-link ${
                  isActive
                    ? "nav-link--active"
                    : ""
                }`}
                aria-current={
                  isActive ? "page" : undefined
                }
              >
                {label}
              </button>
            );

          })}


          {/* RESUME */}
          <a
            href={profile.resume}
            download
          >
            Resume
          </a>


          {/* LET'S TALK */}
          <button
            className="nav-talk"
            onClick={() => go("contact")}
          >
            Let's Talk
          </button>

        </nav>


        {/* ACTIONS */}
        <div className="nav-actions">

          {/* THEME */}
          <button
            className="icon-btn"
            onClick={() =>
              dispatch(
                setTheme(
                  theme === "dark"
                    ? "light"
                    : "dark"
                )
              )
            }
            aria-label={`Switch to ${
              theme === "dark"
                ? "light"
                : "dark"
            } mode`}
          >
            {theme === "dark" ? (
              <Sun size={18} />
            ) : (
              <Moon size={18} />
            )}
          </button>


          {/* MOBILE MENU */}
          <button
            className="icon-btn nav-menu-btn"
            onClick={() =>
              setOpen((value) => !value)
            }
            aria-label="Toggle navigation"
          >
            {open ? (
              <X size={21} />
            ) : (
              <Menu size={21} />
            )}
          </button>

        </div>

      </div>

    </header>
  );
}