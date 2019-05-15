import { Creation } from "./Creation";
import { Catalogue } from "./Tag";
import { Creator } from "./Creator";


export interface Recent {
    creations: Creation[];
    catalogues: Catalogue[];
    creators: Creator[];
}
