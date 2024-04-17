interface Teacher {
    firstName: string;
    lastName: string;
    fullTimeEmployee: boolean;
    yearOfExperience?: number;
    location: string;
    [key: string]: any;
}

interface Directors extends Teacher {
    numberOfReports: number;
}

function printTeacher(firstName: string, lastName: string): string {
    return `${firstName.charAt(0)}. ${lastName}`;
}

interface StudentConstructor {
    firstName: string;
    lastName: string;
}

interface Student {
    workOnHomework(): string;
    displayName(): string;
}

class StudentClass implements Student {
    firstName: string;
    lastName: string;
    
    constructor (firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework(): string {
        return 'Currently working'
    }

    displayName(): string {
        return this.firstName;
    }
}
