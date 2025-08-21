export interface LicenseDetail {
    id: number | null;
    name: License;
    dataSave: boolean;
    dataDelete: boolean;
    excelDownload: boolean;
}
export declare const ROLES: {
    readonly VIEWER: "viewer";
    readonly MANAGER: "manager";
    readonly ADMIN: "admin";
};
export type Role = (typeof ROLES)[keyof typeof ROLES];
export declare const LICENSES: {
    readonly BASIC: "basic";
    readonly PRO: "pro";
    readonly ENTERPRISE: "enterprise";
};
export type License = (typeof LICENSES)[keyof typeof LICENSES];
export declare const ThemeKey: {
    readonly LIGHT_THEME: "light";
    readonly DARK_THEME: "dark";
};
export type ThemeType = (typeof ThemeKey)[keyof typeof ThemeKey];
export interface ModuleProps {
    region: RegionType;
    role: Role;
    license?: LicenseDetail | null;
    theme?: ThemeType;
    permission?: Permission[];
    accessToken?: string | null;
}
export type RegionType = (typeof REGION_KEY)[keyof typeof REGION_KEY];
export declare const REGION_KEY: {
    readonly QA: "staging";
    readonly KOREA: "kr";
    readonly GLOBAL: "global";
    readonly COM2US: "com2us";
};
export interface Permission {
    name: MenuType;
    hasReadPermission: boolean;
    hasWritePermission: boolean;
}
export declare const MENU_KEY: {
    readonly DASHBOARD: "DASHBOARD";
    readonly AUTH_HISTORY: "AUTH_HISTORY";
    readonly RATE_OF_CHANGE: "RATE_OF_CHANGE";
    readonly RATE_OF_CHANGE_STATISTICS: "RATE_OF_CHANGE_STATISTICS";
    readonly RATE_OF_CHANGE_SETTING: "RATE_OF_CHANGE_SETTING";
    readonly ALWAYS_VALID_ON: "ALWAYS_VALID_ON";
    readonly C4_AUTH: "C4_AUTH";
    readonly C4_AUTH_HISTORY: "C4_AUTH_HISTORY";
    readonly C4_AUTH_SERVER_INVALID: "C4_AUTH_SERVER_INVALID";
    readonly C4_AUTH_FLEXIBLE_POLICY: "C4_AUTH_FLEXIBLE_POLICY";
    readonly C4_AUTH_WATCH_IP_AUTH: "C4_AUTH_WATCH_IP_AUTH";
    readonly C4_AUTH_WATCH_IP_SETTING: "C4_AUTH_WATCH_IP_SETTING";
    readonly C4_AUTH_BLACK: "C4_AUTH_BLACK";
    readonly DEVELOP: "DEVELOP";
    readonly MODULE_VERSION: "MODULE_VERSION";
    readonly MODULE_VERSION_OPENED: "MODULE_VERSION_OPENED";
    readonly MODULE_VERSION_REPORTED: "MODULE_VERSION_REPORTED";
    readonly APP_GUARDING_HISTORY: "APPGUARDING_HISTORY";
    readonly HIDDEN_LOG: "HIDDEN_LOG";
    readonly USER: "user";
    readonly TEST: "test";
};
export type MenuType = (typeof MENU_KEY)[keyof typeof MENU_KEY];
