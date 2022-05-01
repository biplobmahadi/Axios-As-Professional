import { AxiosRequestConfig } from "axios";
import { axiosInstance } from "../instances";

export class AxiosInstance {
    static async get(url: string, config?: AxiosRequestConfig) {
        try {
            const response = await axiosInstance.get(url, config);
            return response.data;
        } catch(error: any) {
            return error.response;
        }
    }
}
