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
