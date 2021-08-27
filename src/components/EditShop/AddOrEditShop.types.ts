import { ITeaShop } from "../../entities";

interface Props {
    mode: string;
    teaShop: ITeaShop;
}

export interface HasPlaceholder {
    placeholder: string;
}

export default Props;