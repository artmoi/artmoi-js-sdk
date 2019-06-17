import * as Yup from "yup";
import { File } from "./File";


export interface Creator {

    id: string|number;
    user_id: string|number;
    display_name: string;
    first_name: string;
    last_name: string;
    created_at: string;
    updated_at: string;

    files?: CreatorFile[];
}

export interface CreatorFile {

    file_id: string | number;
    creator_id: string | number;
    slot?: string;
    position?: number;
    created_at: string;
    updated_at: string;

    file: File;
}

export const creatorSchema = Yup.object({

});

declare module "./Editable" {

    export enum EditableType {
        Creator = "creator",
    }
}
