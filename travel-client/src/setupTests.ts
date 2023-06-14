// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";
import mockServer from "@/mocks/server";

//테스트 전에
beforeAll(() => mockServer.listen());
//테스트가 끝난후
afterEach(() => mockServer.resetHandlers());
//모든 테스트가 끝난후
afterAll(() => mockServer.close());
