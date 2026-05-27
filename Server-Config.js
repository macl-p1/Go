const baseUrl = "https://api.backend-server.com";
const port = 8080;

const allowedIPs = ["192.168.1.50","10.0.0.25"];

console.log("Booting up sever config sequence...\n");

let connectionAttempts = 0;

for(let currAttempt = 1; currAttempt <= 3; currAttempt++){
    console.log(`Pinging database... (Attempt ${currAttempt})`);
    connectionAttempts = currAttempt;
}

console.log(`\nDatabase Connection established after ${connectionAttempts} attempts`);

console.log("Updating firewall rules");
allowedIPs.push("172.16.254.1");

const finalConfig = {
    serverUrl : baseUrl,
    serverPort : port,
    databaseRetries : connectionAttempts,
    whitelistedIPs : allowedIPs 
};

console.log("\nFinal System Config");
console.log(finalConfig);




