import APIRoutes from "../../APIRoutes";
import { AxiosInstance } from "../../axios/instanceMethods";

let controller: any;

export const handleSearch = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchUrl = APIRoutes.search(event.target.value);
    if(controller !== undefined){
        controller.abort();
    }
    controller = new AbortController();
    const response = await AxiosInstance.get(searchUrl, {signal: controller.signal});
    console.log(response, 'search res');
}