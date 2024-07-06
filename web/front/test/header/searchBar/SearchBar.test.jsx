import React from "react";
import '@testing-library/jest-dom';
import { fireEvent, render } from "@testing-library/react";
import SearchBar from "../../../src/header/searchBar/SearchBar";

describe('SearchBar 컴포넌트 테스트', () => {
    test('서치바는 입력 박스를 갖습니다.', () => {
        const { container } = render(<SearchBar />);

        const inputBox = container.querySelector('.searchInputBox');

        expect(inputBox).toBeInDocument();
    });

    test('서치바는 서치 버튼을 갖습니다.', () => {
        const { container } = render(<SearchBar />);

        const searchButton = container.querySelector('.searchButton');

        expect(searchButton).toBeInDocument();
    });

    test('입력 박스에 값을 넣고 엔터를 누르면 검색결과창으로 이동합니다.', async () => {
        const mockSubmit = jest.fn();
        const testInput = "test";

        const { container } = render(<SearchBar onSubmit={mockSubmit} />);

        const inputBox = container.querySelector('.searchInputBox');

        await fireEvent.change(inputBox, { target: { value: testInput } });
        await fireEvent.keyDown(inputBox, { key: 'Enter', code: 'Enter' });

        expect(mockSubmit).toHaveBeenCalledWith(testInput);
    });

    test('입력 박스에 값을 넣고 서치 버튼을 누르면 검색결과창으로 이동합니다.', async () => {
        const mockSubmit = jest.fn();
        const testInput = "test";

        const { container } = render(<SearchBar onSubmit={mockSubmit} />);

        const inputBox = container.querySelector('.searchInputBox');
        const searchButton = container.querySelector('.searchButton');

        await fireEvent.change(inputBox, { target: { value: testInput } });
        await fireEvent.click(searchButton);

        expect(mockSubmit).toHaveBeenCalledWith(testInput);
    });
});
