/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
    "/login": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** @description Acquire a session token for authentication on access-restricted endpoints. */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody: {
                content: {
                    "application/json": components["schemas"]["LoginData"];
                };
            };
            responses: {
                401: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["ApiError"];
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/logout": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** @description Invalidates the session token. */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                401: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["ApiError"];
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/user/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Gets all private and public information for the logged in user. */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["UserData"];
                    };
                };
                401: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["ApiError"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/user/{user_id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Gets all public information for the logged in user. */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    user_id: number;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["UserData"];
                    };
                };
                401: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["ApiError"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/module/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Gets all modules that the user is enrolled in. */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["ModuleData"][];
                    };
                };
                401: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["ApiError"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/module/{module_id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Get a single module by id */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    module_id: number;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["ModuleData"];
                    };
                };
                /** @description Module not found or no access to it */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/module/{module_id}/post": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Get all posts of a module */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    module_id: number;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["PostData"][];
                    };
                };
                /** @description Module not found or no access to it */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        put?: never;
        /** @description Create a new Post */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    module_id: number;
                };
                cookie?: never;
            };
            requestBody: {
                content: {
                    "application/json": components["schemas"]["PostCreateData"];
                };
            };
            responses: {
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": number;
                    };
                };
                /** @description No permission to create a post */
                401: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Module not found or no access to it */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/module/{module_id}/post/{post_id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Get a post of a module by id */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    module_id: number;
                    post_id: number;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["PostData"];
                    };
                };
                /** @description Module or Post not found or no access to it */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/file/{file_id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Retrieves a File by its id. */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    file_id: number;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Requested file was returned successfully */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Returned if the file does not exist or access is denied */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/file/{file_id}/info": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Retrieves info about a File, by its id. */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    file_id: number;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["FileInfoData"];
                    };
                };
                /** @description Returned if the file does not exist or access is denied */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/doc/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description This documentation page. */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description HTML content */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "text/html": string;
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/schedule/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Get all posts of a module */
        get: {
            parameters: {
                query?: {
                    end?: number | null;
                    start?: number | null;
                };
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["LectureData"][];
                    };
                };
                401: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["ApiError"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/post/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Gets all public posts */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["PostData"][];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/post/{post_id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Get a post by its id */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    post_id: number;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: never;
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/post/{post_id}/submission": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    post_id: number;
                };
                cookie?: never;
            };
            /** @description multipart form data */
            requestBody: {
                content: {
                    "multipart/form-data": unknown[];
                };
            };
            responses: {
                /** @description returns the file ids of the submitted files */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": number[];
                    };
                };
                401: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["ApiError"];
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/post/{post_id}/attachment": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    post_id: number;
                };
                cookie?: never;
            };
            /** @description multipart form data */
            requestBody: {
                content: {
                    "multipart/form-data": unknown[];
                };
            };
            responses: {
                /** @description returns the file ids of the attached files */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": number[];
                    };
                };
                401: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["ApiError"];
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/post_file/{post_file_id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    post_file_id: number;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: never;
        };
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/mark/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Gets all marks per module for the logged in user */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            [key: string]: components["schemas"]["ModuleMarkData"];
                        };
                    };
                };
                401: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["ApiError"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/mark/{module_id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Gets all marks of a module for the logged in user */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    module_id: number;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["MarkData"][];
                    };
                };
                401: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["ApiError"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        ApiError: {
            error_code: string;
            explanation?: string | null;
        };
        FileIdParam: {
            /** Format: int32 */
            file_id: number;
        };
        FileInfoData: {
            mime_type: string;
            name: string;
            /** Format: int64 */
            upload_date: number;
            /** Format: int32 */
            uploader_id: number;
        };
        LectureData: {
            /** Format: int64 */
            end: number;
            /** Format: int32 */
            exam_id?: number | null;
            /** Format: int32 */
            id: number;
            /** Format: int32 */
            lecturer_id: number;
            lecturer_name: string;
            /** Format: int32 */
            module_id: number;
            module_name: string;
            /** Format: int32 */
            moved_lecture_id?: number | null;
            room: string;
            /** Format: int64 */
            start: number;
            ui_color?: string | null;
        };
        LoginData: {
            email: string;
            password: string;
        };
        MarkData: {
            /** Format: int32 */
            absent_id?: number | null;
            /** Format: int64 */
            announcement_date: number;
            /** Format: double */
            average_mark: number;
            /** Format: double */
            average_points: number;
            comment?: string | null;
            /** Format: int32 */
            exam_id: number;
            /** Format: int32 */
            id: number;
            /** Format: double */
            mark: number;
            /** Format: int32 */
            points: number;
            /** Format: int32 */
            student_id: number;
        };
        ModuleData: {
            /** Format: int32 */
            banner_file_id?: number | null;
            /** Format: int32 */
            credit_points: number;
            /** Format: int32 */
            id: number;
            /** Format: int32 */
            lecturer_id?: number | null;
            lecturer_name?: string | null;
            name: string;
            /** Format: int32 */
            parent_id?: number | null;
            ui_color: string;
        };
        ModuleIdParam: {
            /** Format: int32 */
            module_id: number;
        };
        ModuleMarkData: {
            /** Format: int32 */
            credit_points: number;
            /** Format: int64 */
            date: number;
            marks: components["schemas"]["MarkData"][];
            module_name: string;
        };
        PostCreateData: {
            description?: string | null;
            /** Format: int64 */
            due_date?: number | null;
            title?: string | null;
        };
        PostData: {
            /** Format: int32 */
            author_id: number;
            description?: string | null;
            /** Format: int64 */
            due_date?: number | null;
            files: components["schemas"]["PostFileData"][];
            /** Format: int32 */
            id: number;
            /** Format: int32 */
            lecture_id?: number | null;
            /** Format: int32 */
            module_id?: number | null;
            /** Format: int64 */
            publish_date?: number | null;
            title?: string | null;
        };
        PostFileData: {
            /** Format: int32 */
            file_id: number;
            file_type: components["schemas"]["PostFileType"];
            /** Format: int32 */
            id: number;
            /** Format: int32 */
            post_file_id: number;
            /** Format: int64 */
            upload_date: number;
            uploader_name: string;
        };
        PostFileIdParam: {
            /** Format: int32 */
            post_file_id: number;
        };
        /** @enum {string} */
        PostFileType: "submission" | "attachment";
        PostIdParam: {
            /** Format: int32 */
            post_id: number;
        };
        /** @enum {string} */
        Role: "student" | "lecturer" | "admin";
        TimestampRange: {
            /** Format: int64 */
            end?: number | null;
            /** Format: int64 */
            start?: number | null;
        };
        UserData: components["schemas"]["UserDataPublic"] | {
            /** Format: int32 */
            avatar_file_id?: number | null;
            /** Format: date */
            birthdate?: string | null;
            city?: string | null;
            country?: string | null;
            email: string;
            fore_name: string;
            /** Format: int32 */
            id: number;
            last_name: string;
            role: components["schemas"]["Role"];
            street?: string | null;
            telephone?: string | null;
            zip?: string | null;
        };
        UserDataPublic: {
            /** Format: int32 */
            avatar_file_id?: number | null;
            email: string;
            fore_name: string;
            /** Format: int32 */
            id: number;
            last_name: string;
            role: components["schemas"]["Role"];
        };
        UserIdParam: {
            /** Format: int32 */
            user_id: number;
        };
    };
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export type operations = Record<string, never>;
