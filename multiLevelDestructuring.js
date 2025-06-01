const people = [
    {
        name: "Alice",
        address: {
            city: "New York",
            street: {
                name: "Broadway",
                number: 123
            }
        }
    },
    {
        name: "Bob",
        address: {
            city: "Los Angeles",
            street: {
                name: "Sunset Boulevard",
                number: 456
            }
        }
    }
];

// Using multi-level destructuring to extract information
const getPersonInfo = (people) => {
    return people.map(({ name, address: { city, street: { name: streetName } } }) => {
        return `${name} lives in ${city} on ${streetName}`;
    });
};

// Get the result
const result = getPersonInfo(people);
console.log(result);
// Expected output: ["Alice lives in New York on Broadway", "Bob lives in Los Angeles on Sunset Boulevard"] 