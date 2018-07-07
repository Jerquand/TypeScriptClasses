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
function birthday() {
    console.log("Date: evaluated");
    return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log("July 12,1993");
    }
}    