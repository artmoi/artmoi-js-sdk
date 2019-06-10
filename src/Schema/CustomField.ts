

export interface CustomField {

    id: string | number;
    organization_id: string | number;
    type: string;
    fieldable_type: string;
    name: string;
    key: string;
    description: string;
    configuration: any;
    created_at: string;
    updated_at: string;
}

export interface CustomListFieldOption {
    id: string | number;
    value: string;
    legacyId: string;
}

export interface CustomListFieldConfiguration {
    options: CustomListFieldOption[];
}

export interface CustomListField extends CustomField {

    type: "list";
    configuration: CustomListFieldConfiguration;
}
