const url = require('url');

const myUrl = new URL('https://www.google.com/search?safe=active&sxsrf=ALeKk01tG9fN4E7Vlpo9d0Tcnr4Z6ok_7g%3A1610389819668&source=hp&ei=O5n8X8qEJvG05NoPzPas0AI&q=the+irregular+at+magic+high+school+season+2&oq=the+irre&gs_lcp=CgZwc3ktYWIQAxgAMgQIIxAnMgQIIxAnMgQIIxAnMgUILhDJAzIFCC4QsQMyAgguMgIILjICCC4yBQgAELEDMgIILjoFCAAQkQI6CAguELEDEIMBOggIABCxAxCDAToLCC4QsQMQxwEQowI6BAguEEM6BAgAEEM6AggAOgcILhDJAxBDOgcIABCxAxBDOgsIABCxAxCDARDJAzoICC4QsQMQyQNQpAVYxgxg0hNoAHAAeACAAZoBiAHDBZIBAzYuMpgBAKABAaoBB2d3cy13aXo&sclient=psy-ab');

// Serialized URL
console.log(myUrl.href);

// Host
console.log(myUrl.host);

// Hostname (no port)
console.log(myUrl.hostname);

// Pathname
console.log(myUrl.pathname);

// Serialized query
console.log(myUrl.search);

// Params object
console.log(myUrl.searchParams);
