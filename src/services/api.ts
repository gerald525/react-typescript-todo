import axios from "axios";

const api = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL,
});
export default class HttpRequest {

    async getRequest(path: string) {
        const response = await api.get(path);
        return response;
    }

    async postRequest(path: string, data: any) {
        const response = await api.post(path, data);
        return response;
    }

    async putRequest(path: string, data: any) {
        const response = await api.put(path, data);
        return response;
    }

    async deleteRequest(path: string) {
        const response = await api.delete(path);
        return response;
    }

    setHeaders(token: string) {
        api.defaults.headers["Authorization"] = `Bearer ${token}`;
    }
}