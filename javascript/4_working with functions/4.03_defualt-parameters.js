// Functions default parameter.

const getOrg = orgName => (
    {
        company : orgName, 
        website : `www.${orgName.toLowerCase()}.com`
    }
)

console.log(JSON.stringify(getOrg("AppleComputers"), null, 1));

// From the above example, when we invoke the getOrg function, if we do not pass any argument, then we get and error. 
// Because, we have defined the function with a parameter orgName. So we need to pass an argument to avoid compliation errors. 

// Default parameters. 

const getOs = (osName = "MacOs") => (
    {
        company : osName, 
        website : `www.${osName.toLowerCase()}.com`
    }
)

console.log(JSON.stringify(getOs(), null, 1));