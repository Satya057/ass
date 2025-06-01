const profile = {
    name: "Charlie",
    age: 29,
    address: {
        city: "San Francisco",
        zipcode: "94101"
    }
};

const updates = {
    age: 30,
    address: {
        zipcode: "94109",
        country: "USA"
    }
};

// Merge objects using spread operator
const mergeObjects = (profile, updates) => {
    return {
        ...profile,
        ...updates,
        address: {
            ...profile.address,
            ...updates.address
        }
    };
};

// Get the merged result
const mergedProfile = mergeObjects(profile, updates);
console.log(mergedProfile);
// Expected output: { name: "Charlie", age: 30, address: { city: "San Francisco", zipcode: "94109", country: "USA" } } 