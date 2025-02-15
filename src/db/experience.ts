import { DataModel } from "../models/data.model";

export const experience: DataModel[] = [
  {
    id: 0,
    category: "experience",
    name: "Architect",
    place: "CR espassos",
    description:
      "Worked with a team of architects and engineers, contributing to projects across engineering, urbanism, and interior design. Led a group of third-year engineering interns, guiding them in project tasks and development.",
    link: "https://www.linkedin.com/company/cr-espassos/about/",
    techs: ["Revit", "AutoCAD", "Microsoft Office"],
    dateStart: new Date("2022-09"),
    dateEnd: new Date("2023-08"),
    status: "completed"
  },
  {
    id: 1,
    category: "experience",
    name: "Full-stack Developer",
    place: "Talent Protocol",
    description:
      "Worked in a small team, building several applications that utilize blockchain as a core technology and data source. My responsibilities included implementing Figma designs from scratch, integrating APIs, managing user feedback, conducting tests and bug fixes. I have contributed to key projects like Talent Passport, Build.top, Playground/API, and Builder.fi.",
    link: "https://www.talentprotocol.com/",
    techs: ["TypeScript", "React", "Next.js", "Ruby on Rails", "Joy UI", "Supabase", "Notion"],
    dateStart: new Date("2024-03"),
    dateEnd: new Date("2024-08"),
    status: "completed"
  },
  {
    id: 2,
    category: "experience",
    name: "Full-stack Developer",
    place: "Subvisual",
    description: "",
    link: "https://subvisual.com/",
    techs: ["TypeScript", "React", "Solidity", "Joy UI", "Supabase", "Notion"],
    dateStart: new Date("2024-12"),
    dateEnd: new Date("2025-02"),
    status: "completed"
  }
];
