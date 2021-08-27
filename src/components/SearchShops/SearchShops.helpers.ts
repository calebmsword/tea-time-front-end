import { ITeaShop, TeaShop, Address, TeaShopsState, State } from "../../entities";

/**
 * This function is meant to be passed as the callback to a filter function:
 * 
 * ```
 * const someArr:TeaShop[] = [...]
 * const filtered = someArr.filter(byHavingPropertyWhoseValueIs('somestring'));
 * ```
 * 
 * This would return an array containing TeaShops with some property (name, 
 * street, areaCode, etc) that case-insensitively includes 'some string'.
 * 
 * If the string parameters contains whitespace only, an empty array will be 
 * returned.
 * 
 * @param text_ any string
 * @returns callback function of type `(arg0: ITeaShop) => boolean`
 */
export const byHavingPropertyWhoseValueIncludes = (text_:string) => (teaShop:ITeaShop) => {
    const text = text_.toLowerCase();
    if (text === '' || !text.replace(/\s/g, '').length) {
        // see https://stackoverflow.com/questions/10261986/how-to-detect-string-which-contains-only-spaces/50971250
        return false;
    }
    let propertyContainsText:boolean = false;
    for(const property of Object.values(teaShop)) {
        if (typeof property === 'object') {
            for(const nestedProperty of Object.values(property)) {
                propertyContainsText = propertyContainsText || (nestedProperty as string).toLowerCase().includes(text);
            }
        } else if (typeof property === 'string') {
            propertyContainsText = propertyContainsText || property.toLowerCase().includes(text);
        }
    }
    return propertyContainsText;
}
