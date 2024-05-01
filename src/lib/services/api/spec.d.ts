/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
	'/login': {
		/** @description Acquire a session token for authentication on access-restricted endpoints. */
		post: {
			requestBody: {
				content: {
					'application/json': components['schemas']['LoginData'];
				};
			};
			responses: {
				/** @description plain text */
				200: {
					content: {
						'text/plain; charset=utf-8': unknown;
					};
				};
				401: {
					content: {
						'application/json': components['schemas']['ApiError'];
					};
				};
			};
		};
	};
	'/logout': {
		/** @description Invalidates the session token. */
		post: {
			responses: {
				401: {
					content: {
						'application/json': components['schemas']['ApiError'];
					};
				};
			};
		};
	};
	'/user/': {
		/** @description Gets all personal information for the logged in user. */
		get: {
			responses: {
				200: {
					content: {
						'application/json': components['schemas']['UserData'];
					};
				};
				401: {
					content: {
						'application/json': components['schemas']['ApiError'];
					};
				};
			};
		};
	};
	'/module/': {
		/** @description Gets all modules that the user is enrolled in. */
		get: {
			responses: {
				200: {
					content: {
						'application/json': components['schemas']['ModuleData'][];
					};
				};
				401: {
					content: {
						'application/json': components['schemas']['ApiError'];
					};
				};
			};
		};
	};
	'/module/{module_id}': {
		/** @description Get a single module by id */
		get: {
			parameters: {
				path: {
					module_id: number;
				};
			};
			responses: {
				200: {
					content: {
						'application/json': components['schemas']['ModuleData'];
					};
				};
				/** @description Module not found or no access to it */
				404: {
					content: never;
				};
			};
		};
	};
	'/module/{module_id}/post': {
		/** @description Get all posts of a module */
		get: {
			responses: {
				200: {
					content: {
						'application/json': components['schemas']['PostData'][];
					};
				};
				/** @description Module not found or no access to it */
				404: {
					content: never;
				};
			};
		};
	};
	'/file/{file_id}': {
		/** @description Retrieves a File by its id. */
		get: {
			parameters: {
				path: {
					file_id: number;
				};
			};
			responses: {
				/** @description Requested file was returned successfully */
				200: {
					content: never;
				};
				/** @description Returned if the file does not exist or access is denied */
				404: {
					content: never;
				};
			};
		};
	};
	'/file/{file_id}/info': {
		/** @description Retrieves info about a File, by its id. */
		get: {
			parameters: {
				path: {
					file_id: number;
				};
			};
			responses: {
				200: {
					content: {
						'application/json': components['schemas']['FileInfoData'];
					};
				};
				/** @description Returned if the file does not exist or access is denied */
				404: {
					content: never;
				};
			};
		};
	};
	'/doc/': {
		/** @description This documentation page. */
		get: {
			responses: {
				/** @description HTML content */
				200: {
					content: {
						'text/html': string;
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
		FileInfoData: {
			mime_type: string;
			name: string;
			/** Format: int32 */
			uploader_id: number;
		};
		LoginData: {
			email: string;
			password: string;
		};
		ModuleData: {
			/** Format: int32 */
			banner_file_id?: number | null;
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
		PostData: {
			/** Format: int32 */
			author_id: number;
			description?: string | null;
			/** Format: int64 */
			due_date?: number | null;
			files: components['schemas']['PostFileData'][];
			/** Format: int32 */
			id: number;
			/** Format: int64 */
			publish_date?: number | null;
			title?: string | null;
		};
		PostFileData: {
			/** Format: int32 */
			file_id: number;
			file_type: components['schemas']['PostFileType'];
			/** Format: int32 */
			id: number;
		};
		/** @enum {string} */
		PostFileType: 'submission' | 'attachment';
		UserData: {
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
