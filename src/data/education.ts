export type EducationItem = {
  id: string;
  translationKey: string;
  date: string;
};

export const education: EducationItem[] = [
  { id: "react", translationKey: "react", date: "08/2025 - 01/2026" },
  { id: "fiap", translationKey: "fiap", date: "01/2024 - 12/2025" },
  { id: "ifes", translationKey: "ifes", date: "09/2022 - 05/2023" },
  { id: "googleUx", translationKey: "googleUx", date: "08/2022 - 05/2023" },
  { id: "cs50", translationKey: "cs50", date: "10/2022" },
];
