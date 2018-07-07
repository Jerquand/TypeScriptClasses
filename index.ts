interface Person {
    firstName: string;
    lastName: string;
    birthday: Date;
}

class Entry implements Person {
    firstName: string;
    lastName: string;
    birthday: Date;
}
function identity<T extends Person>(argument: T): T {
	console.log(argument.birthday);
	return argument;
}    