import { Method, ApiConnection, ConnectionConfiguration } from "protoculture";


declare module "protoculture/lib/Data/ApiConnections" {

    export interface ConfiguredConnections {

        "oauth": ApiConnection<typeof artmoiOauthConfiguration>;
        "api": ApiConnection<typeof artmoiApiConfiguration>;
    }
}

// import { Identity } from "./Schema/Identity";

// todo: Can't wait to figure this out properly.
// declare module "protoculture/lib/Data/ApiConnection" {

//     export interface ApiConnection<Configuration extends ConnectionConfiguration<any>> {

//         call<Identity>(name: "identity", extraConfiguration?: never): Promise<Identity>;
//     }
// }

export const artmoiOauthConfiguration = {
    routes: {
        "password-grant": {
            name: "password-grant",
            method: Method.POST,
            path: "token",
            data: {
                "grant_type": "password",
            },
        },
        "magic-token-grant": {
            name: "magic-token-grant",
            method: Method.POST,
            path: "token",
            data: {
                "grant_type": "magic-token",
            },
        },
        "facebook-grant": {
            name: "facebook-grant",
            method: Method.POST,
            path: "token",
            data: {
                "grant_type": "facebook",
            },
        },
        "google-grant": {
            name: "google-grant",
            method: Method.POST,
            path: "token",
            data: {
                "grant_type": "google",
            },
        },
    },
};

export const artmoiApiConfiguration = {
    routes: {
        "geography.get": {
            name: "geography.get",
            method: Method.GET,
            path: "geography",
        },
        "sign-up": {
            name: "sign-up",
            method: Method.POST,
            path: "user",
        },
        "magic-token.store": {
            name: "magic-token.store",
            method: Method.POST,
            path: "magic-token",
        },
        "session.store": {
            name: "session.store",
            method: Method.POST,
            path: "login",
        },
        "identity": {
            name: "identity",
            method: Method.GET,
            path: "identity",
            authorizationType: "oauth2",
        },
        "dashboard.recent": {
            name: "dashboard.recent",
            method: Method.GET,
            path: "dashboard/recent",
            authorizationType: "oauth2",
        },
        "billing-profile.update": {
            name: "billing-profile.update",
            method: Method.PUT,
            path: "billing-profile/{id}",
            parameters: [
                "id",
            ],
            authorizationType: "oauth2",
        },
        "billing-profile.remove-all-payment-sources": {
            name: "billing-profile.remove-all-payment-sources",
            method: Method.POST,
            path: "billing-profile/remove-all-payment-sources",
            authorizationType: "oauth2",
        },
        "billing-profile.sync-addons-to-stripe": {
            name: "billing-profile.sync-addons-to-stripe",
            method: Method.POST,
            path: "billing-profile/sync-addons-to-stripe",
            authorizationType: "oauth2",
        },
        "creation.filter.index": {
            name: "creation.filter.index",
            method: Method.GET,
            path: "creation/filters",
            authorizationType: "oauth2",
        },
        "creation.list": {
            name: "creation.list",
            method: Method.GET,
            path: "creation",
            authorizationType: "oauth2",
        },
        "creation.files.store": {
            name: "creation.files.store",
            method: Method.POST,
            path: "creation/{id}/files",
            parameters: [
                "id",
            ],
            authorizationType: "oauth2",
        },
        "creation.images.index": {
            name: "creation.images.index",
            method: Method.GET,
            path: "creation/{id}/images",
            parameters: [
                "id",
            ],
            authorizationType: "oauth2",
        },
        "creation.images.store": {
            name: "creation.images.store",
            method: Method.PUT,
            path: "creation/{id}/images",
            parameters: [
                "id",
            ],
            authorizationType: "oauth2",
        },
        "creation.simple-import": {
            name: "creation.simple-import",
            method: Method.POST,
            path: "creation/simple-import",
            authorizationType: "oauth2",
        },
        "collection.files.store": {
            name: "collection.files.store",
            method: Method.POST,
            path: "collection/{id}/files",
            parameters: [
                "id",
            ],
            authorizationType: "oauth2",
        },
        "creator.index": {
            name: "creator.index",
            method: Method.GET,
            path: "creator",
            authorizationType: "oauth2",
        },
        "creator.store": {
            name: "creator.store",
            method: Method.POST,
            path: "creator",
            authorizationType: "oauth2",
        },
        "creator.files.store": {
            name: "creator.files.store",
            method: Method.POST,
            path: "creator/{id}/files",
            parameters: [
                "id",
            ],
            authorizationType: "oauth2",
        },
        "creator.profile-images.store": {
            name: "creator.profile-images.store",
            method: Method.PUT,
            path: "creator/{id}/profile-images",
            parameters: [
                "id",
            ],
            authorizationType: "oauth2",
        },
        "creator.profile-images.destroy": {
            name: "creator.profile-images.destroy",
            method: Method.DELETE,
            path: "creator/{id}/profile-images",
            parameters: [
                "id",
            ],
            authorizationType: "oauth2",
        },
        "catalogue.index": {
            name: "catalogue.index",
            method: Method.GET,
            path: "catalogue",
            authorizationType: "oauth2",
        },
        "catalogue.store": {
            name: "catalogue.store",
            method: Method.POST,
            path: "catalogue",
            authorizationType: "oauth2",
        },
        "user.profile-images.store": {
            name: "user.profile-images.store",
            method: Method.PUT,
            path: "user/{id}/profile-images",
            parameters: [
                "id",
            ],
            authorizationType: "oauth2",
        },
        "user.profile-images.destroy": {
            name: "user.profile-images.destroy",
            method: Method.DELETE,
            path: "user/{id}/profile-images",
            parameters: [
                "id",
            ],
            authorizationType: "oauth2",
        },
        "organization.update": {
            name: "organization.update",
            method: Method.PUT,
            path: "organization/{id}",
            parameters: [
                "id",
            ],
            authorizationType: "oauth2",
        },
        "organization.watermark-images.store": {
            name: "organization.watermark-images.store",
            method: Method.PUT,
            path: "organization/{id}/watermark-images",
            parameters: [
                "id",
            ],
            authorizationType: "oauth2",
        },
        "organization.watermark-images.destroy": {
            name: "organization.watermark-images.destroy",
            method: Method.DELETE,
            path: "organization/{id}/watermark-images",
            parameters: [
                "id",
            ],
            authorizationType: "oauth2",
        },
        "file.create-multipart-upload": {
            name: "file.create-multipart-upload",
            method: Method.POST,
            path: "file/create-multipart-upload",
            authorizationType: "oauth2",
        },
        "file.store-multipart-upload": {
            name: "file.store-multipart-upload",
            method: Method.POST,
            path: "file/store-multipart-upload",
            authorizationType: "oauth2",
        },
        "file.download-uri": {
            name: "file.download-uri",
            method: Method.GET,
            path: "file/{id_hash}/download-uri",
            parameters: [
                "id_hash",
            ],
            authorizationType: "oauth2",
        },
        "file.download": {
            name: "file.download",
            method: Method.GET,
            path: "file/{id_hash}/download",
            parameters: [
                "id_hash",
            ],
        },
        "file.index": {
            name: "file.index",
            method: Method.GET,
            path: "file",
            authorizationType: "oauth2",
        },
        "file.store": {
            name: "file.store",
            method: Method.POST,
            path: "file",
            authorizationType: "oauth2",
        },
        "file.update": {
            name: "file.update",
            method: Method.PUT,
            path: "file/{id_hash}",
            parameters: [
                "id_hash",
            ],
            authorizationType: "oauth2",
        },
        "file.destroy": {
            name: "file.destroy",
            method: Method.DELETE,
            path: "file/{id_hash}",
            parameters: [
                "id_hash",
            ],
            authorizationType: "oauth2",
        },
        "files.bulk-destroy": {
            name: "files.bulk-destroy",
            method: Method.DELETE,
            path: "file",
            authorizationType: "oauth2",
        },
        "file.usage": {
            name: "file.usage",
            method: Method.GET,
            path: "file/usage",
            authorizationType: "oauth2",
        },
        "file.mime-types": {
            name: "file.mime-types",
            method: Method.GET,
            path: "file/mime-types",
            authorizationType: "oauth2",
        },
        "creation.files.index": {
            name: "creation.files.index",
            method: Method.GET,
            path: "creation/{id}/files",
            parameters: [
                "id",
            ],
            authorizationType: "oauth2",
        },
        "collection.files.index": {
            name: "collection.files.index",
            method: Method.GET,
            path: "collection/{id}/files",
            parameters: [
                "id",
            ],
            authorizationType: "oauth2",
        },
        "creator.files.index": {
            name: "creator.files.index",
            method: Method.GET,
            path: "creator/{id}/files",
            parameters: [
                "id",
            ],
            authorizationType: "oauth2",
        },
        "creation.files.destroy": {
            name: "creation.files.destroy",
            method: Method.DELETE,
            path: "creation/{creationId}/files/{fileId}",
            parameters: [
                "creationId",
                "fileId",
            ],
            authorizationType: "oauth2",
        },
        "collection.files.destroy": {
            name: "collection.files.destroy",
            method: Method.DELETE,
            path: "collection/{collectionId}/files/{fileId}",
            parameters: [
                "collectionId",
                "fileId",
            ],
            authorizationType: "oauth2",
        },
        "creator.files.destroy": {
            name: "creator.files.destroy",
            method: Method.DELETE,
            path: "creator/{creatorId}/files/{fileId}",
            parameters: [
                "creatorId",
                "fileId",
            ],
            authorizationType: "oauth2",
        },
        "creation.files.bulk-destroy": {
            name: "creation.files.bulk-destroy",
            method: Method.DELETE,
            path: "creation/files",
            authorizationType: "oauth2",
        },
        "collection.files.bulk-destroy": {
            name: "collection.files.bulk-destroy",
            method: Method.DELETE,
            path: "collection/files",
            authorizationType: "oauth2",
        },
        "creator.files.bulk-destroy": {
            name: "creator.files.bulk-destroy",
            method: Method.DELETE,
            path: "creator/files",
            authorizationType: "oauth2",
        },
        "s3.create-upload": {
            name: "s3.create-upload",
            method: Method.POST,
            path: "file/create-upload",
            authorizationType: "oauth2",
        },
        "s3.create-multipart-upload": {
            name: "s3.create-multipart-upload",
            method: Method.POST,
            path: "file/create-multipart-upload",
            authorizationType: "oauth2",
        },
        "s3.store-multipart-upload": {
            name: "s3.store-multipart-upload",
            method: Method.POST,
            path: "file/store-multipart-upload",
            authorizationType: "oauth2",
        },
        "medium.index": {
            name: "medium.index",
            method: Method.GET,
            path: "medium",
            authorizationType: "oauth2",
        },
    },
};
