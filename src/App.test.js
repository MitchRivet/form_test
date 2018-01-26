import React from "react";
import { shallow, mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import FormApp from "./app/FormApp.js";

configure({ adapter: new Adapter() });

it("renders without crashing", () => {
  shallow(<FormApp />);
});

describe("Form", () => {
  it("has the correct title", () => {
    const wrapper = mount(<FormApp />);
    expect(wrapper.find("h1").text()).toBe("Form Test");
  });
});

//todo
// describe('Form', () => {
//   describe('Submit Button', () => {
//     const wrapper = mount(<FormApp />)
//     console.log(wrapper)
//     it('Shows loading after submission', () => {
//       const button = wrapper.find('#submitButton')
//       button.simulate('click')
//       console.log(wrapper.find('#loadMessage'))
//       expect(wrapper.find('h1').text()).toBe("Form Test")
//     })
//   })
//})
