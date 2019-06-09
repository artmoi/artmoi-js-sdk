

export interface Location {
    // note: Address information in location pending migration to ISO 3166-1 and 3166-2.
    id: string | number;
    name: string;
    display_name: string;
    latitude: number;
    longitude: number;
    organization_id: string | number;
    created_at: string;
    updated_at: string;
}
