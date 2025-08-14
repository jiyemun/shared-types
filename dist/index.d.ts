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
    license: LicenseDetail;
    theme: ThemeType;
}
export type RegionType = (typeof REGION_KEY)[keyof typeof REGION_KEY];
export declare const REGION_KEY: {
    readonly QA: "staging";
    readonly KOREA: "kr";
    readonly GLOBAL: "global";
    readonly COM2US: "com2us";
};
