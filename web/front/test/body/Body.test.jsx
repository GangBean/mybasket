import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Body from "../../src/body/Body";

describe("Body component test", () => {
    test("메인 페이지 상태일때 MainPage component를 갖습니다.", () => {
        const { container } = render(<Body state={"main"}></Body>);
        
        expect(container.querySelector(".mainPage")).toBeInTheDocument();
    });

    test("로그인 페이지 상태일때 LoginPage component를 갖습니다.", () => {
        const { container } = render(<Body state={"login"}></Body>);

        expect(container.querySelector(".loginPage")).toBeInTheDocument();
    });
    test("마이페이지 상태일때 MyPage component를 갖습니다.", () => {
        const { container } = render(<Body state={"myPage"}></Body>);

        expect(container.querySelector(".myPage")).toBeInTheDocument();
    });
});
