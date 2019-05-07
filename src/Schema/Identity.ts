import { Feature } from "./Feature";
import { OrganizationRole } from "./OrganizationRole";


interface IdentityUser {
    id: number;

    first_name: string;
    last_name: string;

    username: string;
    email: string;

    created_at: string;
    updated_at: string;

    default_organization_id: number;
}

interface IdentityOrganization {
    id: number;
    name: string;
    created_at: string;
    updated_at: string;
}

interface IdentityBillingProfile {

}

export interface Identity {
    user: IdentityUser;
    tenant: any;
    organization: IdentityOrganization;
    features: Feature[];
    configuration: {[key: string]: any};
    roles: OrganizationRole[];
    billing_profiles: IdentityBillingProfile[];
}
