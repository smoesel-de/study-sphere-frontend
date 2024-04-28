/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */


export interface paths {
  "/login": {
    /** @description Acquire a session token for authentication on access-restricted endpoints. */
    post: {
      requestBody: {
        content: {
          "application/json": components["schemas"]["LoginData"];
        };
      };
      responses: {
        /** @description plain text */
        200: {
          content: {
            "text/plain; charset=utf-8": unknown;
          };
        };
        401: {
          content: {
            "application/json": components["schemas"]["ApiError"];
          };
        };
      };
    };
  };
  "/logout": {
    /** @description Invalidates the session token. */
    post: {
      responses: {
        401: {
          content: {
            "application/json": components["schemas"]["ApiError"];
          };
        };
      };
    };
  };
  "/user/info": {
    /** @description Gets all personal information for the logged in user. */
    get: {
      responses: {
        200: {
          content: {
            "application/json": components["schemas"]["UserData"];
          };
        };
        401: {
          content: {
            "application/json": components["schemas"]["ApiError"];
          };
        };
      };
    };
  };
  "/user/modules": {
    /** @description Gets all modules that the user is enrolled in. */
    get: {
      responses: {
        200: {
          content: {
            "application/json": components["schemas"]["ModuleData"][];
          };
        };
        401: {
          content: {
            "application/json": components["schemas"]["ApiError"];
          };
        };
      };
    };
  };
  "/doc/": {
    /** @description This documentation page. */
    get: {
      responses: {
        /** @description HTML content */
        200: {
          content: {
            "text/html": string;
          };
        };
      };
    };
  };
}

export type webhooks = Record<string, never>;

export interface components {
  schemas: {
    ApiError: {
      error_code: string;
      explanation?: string | null;
    };
    LoginData: {
      email: string;
      password: string;
    };
    ModuleData: {
      /** Format: int32 */
      credit_points?: number | null;
      /** Format: int32 */
      id: number;
      /** Format: int32 */
      lecturer_id?: number | null;
      name: string;
      /** Format: int32 */
      parent_id?: number | null;
    };
    UserData: {
      /** Format: date */
      birthdate?: string | null;
      city?: string | null;
      country?: string | null;
      email: string;
      fore_name: string;
      last_name: string;
      street?: string | null;
      telephone?: string | null;
      zip?: string | null;
    };
  };
  responses: never;
  parameters: never;
  requestBodies: never;
  headers: never;
  pathItems: never;
}

export type $defs = Record<string, never>;

export type external = Record<string, never>;

export type operations = Record<string, never>;
