class Telephone {
    constructor() {
        this.phoneNumbers = [];
        this.observers = [];
    }

    AddPhoneNumber(phoneNumber) {
        this.phoneNumbers.push(phoneNumber);
        console.log(`${phoneNumber} added to the list of phone numbers.`);
    }

    RemovePhoneNumber(phoneNumber) {
        const index = this.phoneNumbers.indexOf(phoneNumber);
        if (index !== -1) {
            this.phoneNumbers.splice(index, 1);
            console.log(`${phoneNumber} removed from the list of phone numbers.`);
        } else {
            console.log(`${phoneNumber} not found in the list of phone numbers.`);
        }
    }

    DialPhoneNumber(phoneNumber) {
        if (this.phoneNumbers.includes(phoneNumber)) {
            console.log(`Dialing ${phoneNumber}...`);
            this.NotifyObservers(phoneNumber);
        } else {
            console.log(`${phoneNumber} is not in the list of phone numbers. Cannot dial.`);
        }
    }

    AddObserver(observer) {
        this.observers.push(observer);
        console.log(`Observer added.`);
    }

    RemoveObserver(observer) {
        const index = this.observers.indexOf(observer);
        if (index !== -1) {
            this.observers.splice(index, 1);
            console.log(`Observer removed.`);
        } else {
            console.log(`Observer not found.`);
        }
    }

    NotifyObservers(phoneNumber) {
        this.observers.forEach(observer => {
            observer.update(phoneNumber);
        });
    }
}

// Example
const myTelephone = new Telephone();
myTelephone.AddPhoneNumber("123-456-7890");
myTelephone.AddPhoneNumber("234-702-3232");

const observer1 = {
    update: function(phoneNumber) {
        console.log(`Observer 1: Dialed phone number - ${phoneNumber}`);
    }
};

const observer2 = {
    update: function(phoneNumber) {
        if (phoneNumber === "234-702-3232") {
            console.log(`Observer 2: Now Dialing ${phoneNumber}`);
        }
    }
};

myTelephone.AddObserver(observer1);
myTelephone.AddObserver(observer2);

myTelephone.DialPhoneNumber("123-456-7890");
myTelephone.DialPhoneNumber("234-702-3232");