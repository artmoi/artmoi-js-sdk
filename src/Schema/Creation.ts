import * as Yup from "yup";
import { Editable } from "./Editable";
import { Creator } from "./Creator";
import { Dimensions, dimensionsSchema } from "./Dimensions";
import { Medium, mediumSchema } from "./Medium";
import { CustomField } from "./CustomField";
import { Tag } from "./Tag";


export interface CreationFilters {
    dynamic_fields: {
        "custom": CustomField[],
    },
    mediums: Medium[];
    tags: Tag[];
    locations: Location[];
}

export interface Creation extends Editable {

    id: string | number;
    title: string;
    notes: string;

    creators: Creator[];
    dimensions: Dimensions;
    medium: Medium;
}

export const creationSchema = Yup.object({
    "id": Yup.mixed().notRequired(),
    "title": Yup.string().required(),
    "date": Yup.date(),
    "notes": Yup.string(),
    "creators": Yup.array().of(Yup.mixed()),
    "dimensions": dimensionsSchema,
    "medium": mediumSchema,
});

declare module "./Editable" {

    export enum EditableType {
        Creation = 1,
    }
}
