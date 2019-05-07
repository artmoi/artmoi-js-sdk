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
        "magic-token.store": {
            name: "magic-token.store",
            method: Method.POST,
            path: "magic-token",
        },
        "identity": {
            name: "identity",
            method: Method.GET,
            path: "identity",
            authorizationType: "oauth2",
        },
        "geography.get": {
            name: "geography.get",
            method: Method.GET,
            path: "geography",
        },
        "billing-profile.update": {
            name: "billing-profile.update",
            method: Method.PUT,
            path: "billing-profile/{id}",
            parameters: [
                "id",
            ],
        },
        "billing-profile.remove-all-payment-sources": {
            name: "billing-profile.remove-all-payment-sources",
            method: Method.POST,
            path: "billing-profile/remove-all-payment-sources",
        },
        "billing-profile.sync-addons-to-stripe": {
            name: "billing-profile.sync-addons-to-stripe",
            method: Method.POST,
            path: "billing-profile/sync-addons-to-stripe",
        },
        "session.store": {
            name: "session.store",
            method: Method.POST,
            path: "login",
        },
        "creation.list": {
            name: "creation.list",
            method: Method.GET,
            path: "creation",
        },
        "creation.files.store": {
            name: "creation.files.store",
            method: Method.POST,
            path: "creation/{id}/files",
            parameters: [
                "id",
            ],
        },
        "creation.images.index": {
            name: "creation.images.index",
            method: Method.GET,
            path: "creation/{id}/images",
            parameters: [
                "id",
            ],
        },
        "creation.images.store": {
            name: "creation.images.store",
            method: Method.PUT,
            path: "creation/{id}/images",
            parameters: [
                "id",
            ],
        },
        "creation.simple-import": {
            name: "creation.simple-import",
            method: Method.POST,
            path: "creation/simple-import",
        },
        "collection.files.store": {
            name: "collection.files.store",
            method: Method.POST,
            path: "collection/{id}/files",
            parameters: [
                "id",
            ],
        },
        "creator.files.store": {
            name: "creator.files.store",
            method: Method.POST,
            path: "creator/{id}/files",
            parameters: [
                "id",
            ],
        },
        "creator.profile-images.store": {
            name: "creator.profile-images.store",
            method: Method.PUT,
            path: "creator/{id}/profile-images",
            parameters: [
                "id",
            ],
        },
        "creator.profile-images.destroy": {
            name: "creator.profile-images.destroy",
            method: Method.DELETE,
            path: "creator/{id}/profile-images",
            parameters: [
                "id",
            ],
        },
        "sign-up": {
            name: "sign-up",
            method: Method.POST,
            path: "user",
        },
        "user.profile-images.store": {
            name: "user.profile-images.store",
            method: Method.PUT,
            path: "user/{id}/profile-images",
            parameters: [
                "id",
            ],
        },
        "user.profile-images.destroy": {
            name: "user.profile-images.destroy",
            method: Method.DELETE,
            path: "user/{id}/profile-images",
            parameters: [
                "id",
            ],
        },
        "organization.update": {
            name: "organization.update",
            method: Method.PUT,
            path: "organization/{id}",
            parameters: [
                "id",
            ],
        },
        "organization.watermark-images.store": {
            name: "organization.watermark-images.store",
            method: Method.PUT,
            path: "organization/{id}/watermark-images",
            parameters: [
                "id",
            ],
        },
        "organization.watermark-images.destroy": {
            name: "organization.watermark-images.destroy",
            method: Method.DELETE,
            path: "organization/{id}/watermark-images",
            parameters: [
                "id",
            ],
        },
        "file.create-multipart-upload": {
            name: "file.create-multipart-upload",
            method: Method.POST,
            path: "file/create-multipart-upload",
        },
        "file.store-multipart-upload": {
            name: "file.store-multipart-upload",
            method: Method.POST,
            path: "file/store-multipart-upload",
        },
        "file.download-uri": {
            name: "file.download-uri",
            method: Method.GET,
            path: "file/{id_hash}/download-uri",
            parameters: [
                "id_hash",
            ],
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
        },
        "file.store": {
            name: "file.store",
            method: Method.POST,
            path: "file",
        },
        "file.update": {
            name: "file.update",
            method: Method.PUT,
            path: "file/{id_hash}",
            parameters: [
                "id_hash",
            ],
        },
        "file.destroy": {
            name: "file.destroy",
            method: Method.DELETE,
            path: "file/{id_hash}",
            parameters: [
                "id_hash",
            ],
        },
        "files.bulk-destroy": {
            name: "files.bulk-destroy",
            method: Method.DELETE,
            path: "file",
        },
        "file.usage": {
            name: "file.usage",
            method: Method.GET,
            path: "file/usage",
        },
        "file.mime-types": {
            name: "file.mime-types",
            method: Method.GET,
            path: "file/mime-types",
        },
        "creation.files.index": {
            name: "creation.files.index",
            method: Method.GET,
            path: "creation/{id}/files",
            parameters: [
                "id",
            ],
        },
        "collection.files.index": {
            name: "collection.files.index",
            method: Method.GET,
            path: "collection/{id}/files",
            parameters: [
                "id",
            ],
        },
        "creator.files.index": {
            name: "creator.files.index",
            method: Method.GET,
            path: "creator/{id}/files",
            parameters: [
                "id",
            ],
        },
        "creation.files.destroy": {
            name: "creation.files.destroy",
            method: Method.DELETE,
            path: "creation/{creationId}/files/{fileId}",
            parameters: [
                "creationId",
                "fileId",
            ],
        },
        "collection.files.destroy": {
            name: "collection.files.destroy",
            method: Method.DELETE,
            path: "collection/{collectionId}/files/{fileId}",
            parameters: [
                "collectionId",
                "fileId",
            ],
        },
        "creator.files.destroy": {
            name: "creator.files.destroy",
            method: Method.DELETE,
            path: "creator/{creatorId}/files/{fileId}",
            parameters: [
                "creatorId",
                "fileId",
            ],
        },
        "creation.files.bulk-destroy": {
            name: "creation.files.bulk-destroy",
            method: Method.DELETE,
            path: "creation/files",
        },
        "collection.files.bulk-destroy": {
            name: "collection.files.bulk-destroy",
            method: Method.DELETE,
            path: "collection/files",
        },
        "creator.files.bulk-destroy": {
            name: "creator.files.bulk-destroy",
            method: Method.DELETE,
            path: "creator/files",
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
        "creator.index": {
            name: "creator.index",
            method: Method.GET,
            path: "creator",
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
