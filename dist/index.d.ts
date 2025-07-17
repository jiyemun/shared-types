export interface LicenseDetail {
    id: number | null;
    name: string;
    dataSave: boolean;
    dataDelete: boolean;
    excelDownload: boolean;
    license: License;
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
export interface ModuleProps {
    region: RegionType;
    role: Role;
    license: LicenseDetail;
}
export type RegionType = (typeof REGION_KEY)[keyof typeof REGION_KEY];
export declare const REGION_KEY: {
    readonly QA: "staging";
    readonly GLOBAL: "kr";
    readonly COM2US: "com2us";
};
