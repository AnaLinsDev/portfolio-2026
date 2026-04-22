import * as React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewOutlinedIcon from "@mui/icons-material/OpenInNewOutlined";

import { Project } from "@/types/types";
import Chip from "@mui/material/Chip";
import { useT } from "@/hooks/useT";
import LazyImage from "./LazyImage";

type Props = {
  project: Project;
};

export default function CardProject({ project }: Props) {
  const { t } = useT();
  const prefix = "projects.screen.projects.";

  return (
    <div
      style={{
        height: "100%",
      }}
    >
      {/* 🖼️ Image */}
      <LazyImage
        src={project.image}
        alt={project.title}
        width="100%"
        height="12rem"
        borderRadius="5pt 5pt 0 0 "
        objectFit="cover"
      />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          height: "calc(100% - 12rem)",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            margin: "1rem",
            height: "100%",
          }}
        >
          {/* 📌 Title + Icons */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontWeight: "bold",
              fontSize: "1.2rem",
            }}
          >
            <div className="card-title" style={{ margin: 0 }}>
              {t(prefix + project.title)}
            </div>

            <div
              style={{
                display: "flex",
                gap: "10px",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {project.linkDemo !== "" && (
                <a href={project.linkDemo} target="_blank" title="Demo">
                  <OpenInNewOutlinedIcon
                    fontSize="small"
                    className="icon-project-link"
                  />
                </a>
              )}

              <a href={project.linkGithub} target="_blank" title="GitHub">
                <GitHubIcon fontSize="small" className="icon-project-link" />
              </a>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              height: "100%",
              justifyContent: "space-between",
            }}
          >
            {/* 📝 Description */}
            <p style={{ textAlign: "justify" }}>
              {t(prefix + project.descriptionComplete)}
            </p>

            {/* ⚙️ Tech stack */}
            <div
              style={{
                display: "flex",
                gap: "6px",
                flexWrap: "wrap",
              }}
            >
              {project.listOfTech.slice(0, 6).map((tech, idx) => (
                <Chip
                  key={idx}
                  label={t(tech)}
                  size="small"
                  className="chip-skill"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
