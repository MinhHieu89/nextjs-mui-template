export class UserFriendlyError extends Error {
	constructor(msg: string) {
		super(msg);

		// Set the prototype explicitly.
		Object.setPrototypeOf(this, UserFriendlyError.prototype);
	}
}
