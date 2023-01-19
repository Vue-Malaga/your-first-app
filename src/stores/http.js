import { defineStore } from "pinia";

export const useHttpStore = defineStore("http", () => {
    const sendRequest = async (method, url, body = null) => {
        const response = await fetch(url, {
            method,
            body,
            headers: {
                "Content-Type": "application/json",
            },
        });
        return await response.json();
    };

    const get = (url) => sendRequest("GET", url);
    const getById = (url, id) => sendRequest("GET", `${url}/${id}`);
    const post = (url, body) => sendRequest("POST", url, JSON.stringify(body));
    const put = (url, body) => sendRequest("PUT", url, JSON.stringify(body));

    return {
        get,
        getById,
        post,
        put,
    };
});