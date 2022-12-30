export const sendRequest = async (method, url, body = null) => {
    console.log(`Request info: method -> ${method}, url -> ${url}`);
    return fetch(url, {
        method,
        body,
        headers: {
            "Content-Type": "application/json",
        },
    }).then((response) => response.json());
};

export const get = (url) => sendRequest("GET", url);
export const getById = (url, id) => sendRequest("GET", `${url}/${id}`);
export const post = (url, body) => sendRequest("POST", url, JSON.stringify(body));
export const put = (url, body) => sendRequest("PUT", url, JSON.stringify(body));
