export interface ResponseData {
	success: boolean;
	error?: {
		message?: string;
		fieldErrors?: {
			[x: string]: string[] | undefined;
		};
	};
}
