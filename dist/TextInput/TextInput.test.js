import React from "react";
import TextInput from "./TextInput";
import renderer from "react-test-renderer";
describe("TextInput", function () {
  it("renders properly", function () {
    var tree = renderer.create(React.createElement(TextInput, {
      label: "Email",
      placeholder: "name@example.com"
    })).toJSON();
    expect(tree).toMatchSnapshot();
  });
});