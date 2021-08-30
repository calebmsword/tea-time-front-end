import { shallow, ShallowWrapper } from "enzyme";

import LoadingSearchedShops from "./LoadingSearchedShops.component";

let wrapper:ShallowWrapper;

describe('testing LoadingSearchedShops', () => {
    it('displays nothing if Tea Shops are loading', () => {
        wrapper = shallow( <LoadingSearchedShops loading={false} />);
        expect(wrapper.children().length).toBe(0);
    });

    it('displays something if tea shops are loading', () => {
        wrapper = shallow( <LoadingSearchedShops loading={true} />);
        expect(wrapper.children().length).toBeGreaterThan(0);
    });
});