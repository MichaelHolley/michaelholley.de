import React, { useState } from "react";
import { FaGithub, FaGlobe } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import PageHeader from "../components/page-header";

function Projects() {
  const [index, setIndex] = useState(0);
  const swipeRange = 75;

  const incrementIndex = () => {
    if (index < projects.length - 1) {
      setIndex(index + 1);
    }
  };

  const decrementIndex = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  const [allowWheelInput, setAllowWheelInput] = useState(true);

  const handleWheel = (event: React.WheelEvent) => {
    if (!allowWheelInput) {
      return;
    }

    setAllowWheelInput(false);
    setTimeout(() => setAllowWheelInput(true), 150);

    if (event.deltaY < 0) {
      decrementIndex();
    } else if (event.deltaY > 0) {
      incrementIndex();
    }
  };

  const [touchStart, setTouchStart] = React.useState(0);
  const [touchEnd, setTouchEnd] = React.useState(0);

  function handleTouchStart(e: React.TouchEvent) {
    setTouchStart(e.targetTouches[0].clientX);
  }

  function handleTouchMove(e: React.TouchEvent) {
    setTouchEnd(e.targetTouches[0].clientX);
  }

  function handleTouchEnd() {
    if (touchStart - touchEnd > swipeRange) {
      incrementIndex();
    }

    if (touchStart - touchEnd < swipeRange * -1) {
      decrementIndex();
    }
  }

  let projects: {
    header: string;
    paragraphs?: string[];
    imgFileNames?: string[];
    technologies?: string[];
    links?: { icon: any; ref: string }[];
  }[] = [
    {
      header: "Wissenschaftspreis Augsburger Schulen 2020/21",
      paragraphs: [
        "Bei der Umsetzung des Projekts wurden zunächst die einzelnen Abschnitte unterteilt und nach Kompetenzen zugewiesen. Ich erhielt die Zuständigkeit für die Entwicklung einer API mit ASP.NET Core, welche Dateien per HTTP-Request speichert und zurückgibt.",
        "Während der Umsetzung entwickelte sich meine Rolle hin zu eine Art Projektleiter, der in allen Bereichen der Entwicklung mitwirkt. So unterstützte ich die Entwicklung der Webseite sowie die Datenaggregation mit Python auf einem Raspi. Zudem erhielt ich die Zuständigkeit für die Dokumentation und kontrollierte dessen Bearbeitung durch Teammitglieder.",
        "Die Zusammenarbeit wurde letztendlich mit dem 2. Platz und einem Preisgeld von 1000€ belohnt.",
      ],
      technologies: [
        "C#",
        "ASP.NET Core",
        "SQLite",
        "Python",
        "Raspberry Pi",
        "HTML",
        "JavaScript",
      ],
      links: [
        {
          icon: <FaGlobe />,
          ref: "https://www.augsburg.de/aktuelles-aus-der-stadt/detail/wissenschaftspreis-augsburger-schulen-2020-21-vergeben",
        },
      ],
    },
    {
      header: "PaymentsDashboard",
      paragraphs: [
        "Das PaymentsDashboard ist eine Anwendung in der finanzielle Ausgaben gespeichert und dargestellt werden. Unter Verwendung von Tags, ist der Nutzer in der Lage Zahlungen mit Stichwörter zu versehen, die eine Sortierung bzw. Filterung ermöglichen.",
        "Jede Zahlung erhält verpflichtend einen primären Tag, der bei der visuellen Aufbereitung in Form von Graphen zur Darstellung verwendet wird.",
      ],
      technologies: [
        "C#",
        "ASP.NET Core",
        "Angular",
        "TypeScript",
        "Bootstrap",
      ],
      links: [
        {
          icon: <FaGithub />,
          ref: "https://github.com/MichaelHolley/PaymentsDashboard",
        },
      ],
    },
    {
      header: "michaelholley.de",
      paragraphs: [
        "Die Darstellung der Webseite hat bereits mehrere Versionen durchlaufen und wird stetig ergänzt und aktualisiert. Dabei wird vor allem auf die Faktoren Performance, Technologie, Design und Interaktion geachtet. Informationen sollen möglichst schnell zu finden, verständlich und auf das Nötigste reduziert sein.",
      ],
      technologies: ["React", "Tailwind CSS", "tsParticles", "TypeScript"],
      links: [
        {
          icon: <FaGithub />,
          ref: "https://github.com/MichaelHolley/michaelholley.de",
        },
      ],
    },
    {
      header: "MyPoll",
      paragraphs: [
        "MyPoll ist eine Angular-Anwendung mit der man einfache Umfragen mit einer einzelnen Fragen erstellen kann. Antworten können dabei optional beschränkt werden, wie feste Antworten, eigene Antworten, private Umfragen und die Mehrfachauswahl.",
        "Dahinter arbeitet ein ASP.NET Core Backend, welches die Daten in einer SQLite-Datenbank verwaltet.",
      ],
      technologies: [
        "C#",
        "ASP.NET Core",
        "SQLite",
        "Angular",
        "TypeScript",
        "Bootstrap",
      ],
      links: [
        { icon: <FaGithub />, ref: "https://github.com/MichaelHolley/MyPoll" },
        { icon: <FaGlobe />, ref: "http://poll.michaelholley.de/" },
      ],
    },
  ];

  const getIndicators = () => {
    return projects.map((prjct, i) => {
      return (
        <span
          key={`indicator_${i}`}
          onClick={() => setIndex(i)}
          className={`rounded-full h-[12px] w-[32px] bg-r0 mx-[3px] hover:cursor-pointer ${
            i === index ? "bg-opacity-100 -translate-y-1" : "bg-opacity-50"
          } transition-all duration-500`}
        >
          &nbsp;
        </span>
      );
    });
  };

  return (
    <main
      className="bg-b0 pt-32 pb-14 text-w0"
      onWheel={(e) => handleWheel(e)}
      onTouchStart={(e) => handleTouchStart(e)}
      onTouchMove={(e) => handleTouchMove(e)}
      onTouchEnd={() => handleTouchEnd()}
    >
      <div className=" flex flex-row justify-center my-3 transition-all">
        {getIndicators()}
      </div>
      <div className="container mx-auto  text-lg text-justify px-4 sm:px-10 md:px-24 lg:px-48">
        <p className="text-3xl mb-4 font-bold text-center">
          {projects[index].header}
        </p>
        {projects[index].paragraphs?.map((p, i) => {
          return <p className="my-3 text-justify">{p}</p>;
        })}
        <p className="flex flex-row justify-center">
          {projects[index].links?.map((link) => {
            return (
              <a href={link.ref} target={"_blank"}>
                <IconContext.Provider
                  value={{
                    size: "2rem",
                    className:
                      "my-1 sm:my-0 mx-[1px] sm:mx-2 hover:fill-r0 hover:scale-110 transition-all",
                    color: "white",
                  }}
                >
                  {link.icon}
                </IconContext.Provider>
              </a>
            );
          })}
        </p>
        <p className="text-lg font-mono text-center my-3">
          {projects[index].technologies?.map((tech, i) => {
            return (
              tech +
              (i != projects[index].technologies!.length - 1 ? " // " : "")
            );
          })}
        </p>
      </div>
    </main>
  );
}

export default Projects;
