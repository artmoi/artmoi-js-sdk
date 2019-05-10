


export enum TagType {
    Catalogue = 'catalogue',
}

export interface Tag {
    
    id: string|number;
    name: string;
    slug: string;
    type: TagType;
    created_at: string;
    updated_at: string;
    taggings_count?: number;
}

export interface Catalogue extends Tag {

    type: TagType.Catalogue;
}
