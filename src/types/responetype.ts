import {AxiosResponse} from "axios";
import {ICar} from "../interfases/carInterface";

type IRes<T> = Promise<AxiosResponse<ICar[]>>

export  type {
    IRes
}