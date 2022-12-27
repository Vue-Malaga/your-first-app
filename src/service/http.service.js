export const sendRequest = async (method, url, body = null) => {
    console.log(`Request info: method -> ${method}, url -> ${url}`);
    return fetch(url, {
        method,
        body,
    }).then((response) => response.json());
};

export const get = (url) => sendRequest('GET', url);
export const post = (url, body) => sendRequest('POST', url, body);