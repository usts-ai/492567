import React from "react";

test("module App chargeable", () => {
  expect(() => require("./App")).not.toThrow();
});
