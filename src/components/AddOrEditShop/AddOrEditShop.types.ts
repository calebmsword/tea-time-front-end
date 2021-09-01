import { ITeaShop } from "../../entities";

interface Props {
    route: {
        params: {
            mode: string;
            teaShop?: ITeaShop;
        }
    }
}

export interface HasValue {
    value: string;
}

export default Props;