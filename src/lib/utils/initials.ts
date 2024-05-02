const getInitial = (name: string) => name.charAt(0).toUpperCase();

export const getInitials = (foreName: string, lastName: string) =>
	getInitial(foreName) + getInitial(lastName);
