// note: These are the core domain types returned by the ArtMoi API surface area.
// note: Domain types in this library contain no behaviour and only define structure.
export { Creation, CreationFilters, creationSchema } from "./Schema/Creation";
export { Creator, CreatorFile, creatorSchema } from "./Schema/Creator";
export { Dimensions, dimensionsSchema, Unit, Dimension } from "./Schema/Dimensions";
export { EditableType, Editable } from "./Schema/Editable";
export { Location } from "./Schema/Location";
export { Feature } from "./Schema/Feature";
export { OrganizationRole } from "./Schema/OrganizationRole";
export { File, fileSchema } from "./Schema/File";
export { Medium, mediumSchema } from "./Schema/Medium";
export { Identity } from "./Schema/Identity";
export { TagType, Tag, Catalogue } from "./Schema/Tag";
export { Recent } from "./Schema/Dashboard";
export { CustomField, CustomListField, CustomListFieldConfiguration, CustomListFieldOption } from "./Schema/CustomField";

export { Pagination } from "./Pagination";

export { artmoiOauthConfiguration, artmoiApiConfiguration } from "./ArtMoiApiConfiguration"

// note: If you're using protoculture, these will help you with configuring the API.
export { ArtMoiApiVariables } from "./ArtMoiApiVariables";
export { artmoiSymbols } from "./ArtMoiSymbols";
export { ArtMoiServiceProvider } from "./ArtMoiServiceProvider";
