import packagePath from "./package-path";
/** */
export interface PackageInfo {
    name: string;
    main?: string;
    version?: string;
    description?: string;
}
/** */
export default (filename: string): PackageInfo => {
    const path = packagePath(filename);
    const { name, main, version, description } = require(path);
    return {
        name, main, version, description
    };
}