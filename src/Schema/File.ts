import * as Yup from "yup";


export interface File {
    id: string | number;
    uploader_id: string | number;
    organization_id: string | number;
    mime_type: string;
    size: number;
    name: string;
    metered: boolean;
    metadata: any;
    created_at: string;
    updated_at: string;
    id_hash: string;
    preview_uri?: string;
}

export const fileSchema = Yup.object({
    name: Yup.string(),
});
