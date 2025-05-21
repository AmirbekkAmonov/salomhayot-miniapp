import { FaBars } from "react-icons/fa"
import logoLight from "../../assets/images/logo.png"
import logoDark from "../../assets/images/logo.svg"
import brandLight from "../../assets/images/brand.png"
import brandDark from "../../assets/images/brand.svg"

import { Link } from "react-router-dom"
import { useEffect, useRef, useState } from "react"

const categories = [
  {
    title: "Smartfonlar va gadjetlar",
    items: ["Smartfonlar", "Aqlli soatlar", "Quloqchinlar", "Aqlli bilaguzuklar"]
  },
  {
    title: "Audiotexnika va Hi-Fi",
    items: ["Dinamiklar", "Hi-Fi tizimlar", "Audio aksessuarlar"]
  },
  {
    title: "Kompyuter texnikasi",
    items: ["Noutbuklar", "Monitorlar", "Klaviaturalar", "Sichqonchalar"]
  },
  {
    title: "Avto tovarlar",
    items: ["Avto magnetolalar", "Avto aksessuarlar", "GPS navigatorlar"]
  },
  {
    title: "Televizorlar va videotexnikalar",
    items: ["Televizorlar", "Projektorlar", "TV pristolalar"]
  },
  {
    title: "Uy uchun texnika",
    items: ["Changyutgichlar", "Konditsionerlar", "Isitgichlar"]
  },
  {
    title: "Oshxona uchun texnika",
    items: ["Mikroto'lqinli pechlar", "Blenderlar", "Choynaklar"]
  },
  {
    title: "Go'zallik va salomatlik",
    items: ["Soch fenlari", "Massaj apparatlari", "Taroqlar"]
  },
];

function Sidebar() {
  const [isDark, setIsDark] = useState(false)
  const [open, setOpen] = useState(false)
  const [openAcc, setOpenAcc] = useState<number | null>(null)
  const accRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    setIsDark(media.matches);

    const handler = (e: MediaQueryListEvent) => setIsDark(e.matches);
    media.addEventListener("change", handler);
    return () => media.removeEventListener("change", handler);
  }, []);

  return (
    <div className="sidebar">
      <div className="container sidebar__container">
        <div className="sidebar__icon" onClick={() => setOpen(v => !v)}>
          <FaBars color="var(--primary-color)" />
        </div>
        <Link to="/" className="sidebar__logo">
          <img src={isDark ? logoDark : logoLight} alt="logo" className="sidebar__logo-img" />
          <img
            src={isDark ? brandDark : brandLight}
            alt="brand"
            className="sidebar__logo-brand"
          />
        </Link>
      <div className={`sidebar__dropdown${open ? ' open' : ''}`}>
        <div className="sidebar__dropdown-content">
          <button className="sidebar__dropdown-close" onClick={() => setOpen(false)}>&times;</button>
          <h3>Kategoriyalar</h3>
          <div className="sidebar__accordion-list">
            {categories.map((cat, idx) => {
              const isOpen = openAcc === idx;
              return (
                <div className="sidebar__accordion" key={cat.title}>
                  <div
                    className="sidebar__accordion-title"
                    onClick={() => setOpenAcc(isOpen ? null : idx)}
                  >
                    {cat.title}
                    <span className={`sidebar__accordion-arrow${isOpen ? ' open' : ''}`}>▼</span>
                  </div>
                  <div
                    className={`sidebar__accordion-body${isOpen ? ' open' : ''}`}
                    ref={el => { accRefs.current[idx] = el; }}
                    style={isOpen && accRefs.current[idx] ? {
                      maxHeight: accRefs.current[idx]?.scrollHeight + 'px',
                      opacity: 1,
                      transition: 'max-height 0.35s cubic-bezier(.4,0,.2,1), opacity 0.25s'
                    } : {
                      maxHeight: 0,
                      opacity: 0,
                      transition: 'max-height 0.25s cubic-bezier(.4,0,.2,1), opacity 0.18s'
                    }}
                  >
                    <ul style={{margin:0, padding:0}}>
                      {cat.items.map(item => <li key={item}><Link to="#">{item}</Link></li>)}
                    </ul>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
      {open && <div className="sidebar__dropdown-bg" onClick={() => setOpen(false)} />}
    </div>
    </div>
  );
}

export default Sidebar 