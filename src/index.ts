export interface LicenseDetail {
  id: number | null;
  name: string;
  dataSave: boolean;
  dataDelete: boolean;
  excelDownload: boolean;
  license: License;
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

export interface ModuleProps {
  region: RegionType;
  role: Role;
  license: LicenseDetail;
}

export type RegionType = (typeof REGION_KEY)[keyof typeof REGION_KEY];

export const REGION_KEY = {
  QA: "staging",
  GLOBAL: "kr",
  COM2US: "com2us",
} as const;