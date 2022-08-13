export interface ResponseData {
	data?: any;
	success: boolean;
	error?: {
		message?: string;
		fieldErrors?: {
			[x: string]: string[] | undefined;
		};
	};
}
