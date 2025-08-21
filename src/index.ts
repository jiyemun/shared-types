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
  license?: LicenseDetail | null;
  theme?: ThemeType;
  permission?: Permission[]
  accessToken?: string | null;
}

export type RegionType = (typeof REGION_KEY)[keyof typeof REGION_KEY];

export const REGION_KEY = {
  QA: "staging",
  KOREA: "kr",
  GLOBAL: "global",
  COM2US: "com2us",
} as const;

export interface Permission {
  name: MenuType;
  hasReadPermission: boolean;
  hasWritePermission: boolean;
}

export const MENU_KEY = {
  DASHBOARD: "DASHBOARD",
  AUTH_HISTORY: "AUTH_HISTORY",
  RATE_OF_CHANGE: "RATE_OF_CHANGE",
  RATE_OF_CHANGE_STATISTICS: "RATE_OF_CHANGE_STATISTICS",
  RATE_OF_CHANGE_SETTING: "RATE_OF_CHANGE_SETTING",
  ALWAYS_VALID_ON: "ALWAYS_VALID_ON",
  C4_AUTH: "C4_AUTH",
  C4_AUTH_HISTORY: "C4_AUTH_HISTORY",
  C4_AUTH_SERVER_INVALID: "C4_AUTH_SERVER_INVALID",
  C4_AUTH_FLEXIBLE_POLICY: "C4_AUTH_FLEXIBLE_POLICY",
  C4_AUTH_WATCH_IP_AUTH: "C4_AUTH_WATCH_IP_AUTH",
  C4_AUTH_WATCH_IP_SETTING: "C4_AUTH_WATCH_IP_SETTING",
  C4_AUTH_BLACK: "C4_AUTH_BLACK",
  DEVELOP: "DEVELOP",
  MODULE_VERSION: "MODULE_VERSION",
  MODULE_VERSION_OPENED: "MODULE_VERSION_OPENED",
  MODULE_VERSION_REPORTED: "MODULE_VERSION_REPORTED",
  APP_GUARDING_HISTORY: "APPGUARDING_HISTORY",
  HIDDEN_LOG: "HIDDEN_LOG",
  USER: "user",
  TEST: "test",
} as const;

export type MenuType = (typeof MENU_KEY)[keyof typeof MENU_KEY];
