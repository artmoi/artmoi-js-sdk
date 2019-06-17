import { File } from "./File";


export enum EditableType {

}

export interface Editable {

    id: string | number;
    type: EditableType;

    files: File[];
}
