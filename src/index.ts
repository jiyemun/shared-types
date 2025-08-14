export interface LicenseDetail {
  id: number | null;
  name: License;
  dataSave: boolean;
  dataDelete: boolean;
  excelDownload: boolean;
}

export const ROLES = {
  VIEWER: "viewer",
  MANAGER: "manager",
  ADMIN: "admin",
} as const;

export type Role = (typeof ROLES)[keyof typeof ROLES];

export const LICENSES = {
  BASIC: "basic",
  PRO: "pro",
  ENTERPRISE: "enterprise",
} as const;

export type License = (typeof LICENSES)[keyof typeof LICENSES];

export const ThemeKey = {
  LIGHT_THEME: "light",
  DARK_THEME: "dark",
} as const;

export type ThemeType = (typeof ThemeKey)[keyof typeof ThemeKey];

export interface ModuleProps {
  region: RegionType;
  role: Role;
  license: LicenseDetail;
  theme: ThemeType;
}

export type RegionType = (typeof REGION_KEY)[keyof typeof REGION_KEY];

export const REGION_KEY = {
  QA: "staging",
  KOREA: "kr",
  GLOBAL: "global",
  COM2US: "com2us",
} as const;