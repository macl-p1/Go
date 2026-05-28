const incomingPayload = {
    username: "gaurav",             // String
    age: 20,                        // Number
    hasAgreedToTerms: true,         // Boolean
    profilePicture: null,           // Null
    loyaltyPoints: undefined        // Undefined
};

console.log("Booting up validation sequence...\n");

let isPayloadValid = true;

if (typeof incomingPayload.username === 'string') {
    console.log("PASS: 'username' is a valid String.");
} else {
    console.error("FAIL: 'username' must be a String.");
    isPayloadValid = false;
}

if (typeof incomingPayload.age === 'number') {
    console.log("PASS: 'age' is a valid Number.");
} else {
    console.error("FAIL: 'age' must be a Number.");
    isPayloadValid = false;
}

if (typeof incomingPayload.hasAgreedToTerms === 'boolean') {
    console.log("PASS: 'hasAgreedToTerms' is a valid Boolean.");
} else {
    console.error("FAIL: 'hasAgreedToTerms' must be a Boolean.");
    isPayloadValid = false;
}

if (incomingPayload.profilePicture === null) {
    console.log("PASS: 'profilePicture' is explicitly Null.");
} else {
    console.error("FAIL: 'profilePicture' must be strictly Null.");
    isPayloadValid = false;
}

if (typeof incomingPayload.loyaltyPoints === 'undefined') {
    console.log("PASS: 'loyaltyPoints' is Undefined.");
} else {
    console.error("FAIL: 'loyaltyPoints' must be Undefined.");
    isPayloadValid = false;
}

console.log("\n Validation Results ");
if (isPayloadValid) {
    console.log("SUCCESS: Payload is completely valid. Ready for database insertion.");
} else {
    console.error("ERROR: Payload validation failed. Rejecting incoming request.");
}