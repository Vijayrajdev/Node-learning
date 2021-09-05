const url = require("url");

myUrl = new URL("https://vijaydev.com/helloVj?id=1000&status=active");

// Serialized url
console.log(myUrl.href);
console.log(myUrl.toString());

// Host (root domain)
console.log(myUrl.host);

// Host name (does not get port)
console.log(myUrl.hostname);

// Path name
console.log(myUrl.pathname);

// Serialized query
console.log(myUrl.search);

// Search params
console.log(myUrl.searchParams);

// Add params
myUrl.searchParams.append("abc", "123");
console.log(myUrl.searchParams);

// Loop through
myUrl.searchParams.forEach((value, name) => {
  console.log(`${name}:${value}`);
});
