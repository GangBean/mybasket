import React from "react";
import "@testing-library/jest-dom";
import { fireEvent, render, act } from "@testing-library/react";
import RecommendationBox, { BudgetRangeError } from "../../src/footer/RecommendationBox";

describe("RecommendationBox component test", () => {
    test("BudgetInput을 갖습니다.", () => {
        const { container } = render(<RecommendationBox />);

        expect(container.querySelector('.budgetInput')).toBeInTheDocument();
    });

    test("RecommendationButton을 갖습니다.", () => {
        const { container } = render(<RecommendationBox />);

        expect(container.querySelector('.recommendationButton')).toBeInTheDocument();
    });

    test("BudgetInput에 양수를 입력할 수 있습니다.", async () => {
        const { container } = render(<RecommendationBox />);
        const testValue = 10000;

        const budgetInput = container.querySelector('.budgetInput');

        await fireEvent.change(budgetInput, { target: { value: testValue } });

        expect(Number(budgetInput.value)).toBe(testValue);
    });

    test("BudgetInput에 양수값을 입력하고 버튼을 눌러 추천을 받을 수 있습니다.", async () => {
        const mockOnSubmit = jest.fn();
        const { container } = render(<RecommendationBox onSubmit={mockOnSubmit} />);
        const testValue = 10000;

        const budgetInput = container.querySelector('.budgetInput');
        const recommendationButton = container.querySelector('.recommendationButton');

        await fireEvent.change(budgetInput, { target: { value: testValue } });
        await fireEvent.click(recommendationButton);

        expect(mockOnSubmit).toHaveBeenCalledWith(testValue);
    });

    // test.each([
    //     { input: 0, error: new BudgetRangeError(0) },
    //     { input: -10000, error: new BudgetRangeError(-10000) },
    // ])('BudgetInput에 $input을 입력하고 추천버튼을 누르면 오류가 발생합니다.', async ({ input, error }) => {
    //     const mockOnSubmit = jest.fn();
    //     const { container } = render(<RecommendationBox onSubmit={mockOnSubmit} />);
    //     const testValue = input;

    //     const budgetInput = container.querySelector('.budgetInput');
    //     const recommendationButton = container.querySelector('.recommendationButton');

    //     await fireEvent.change(budgetInput, { target: { value: testValue } });
    //     // await fireEvent.click(recommendationButton);

    //     const e = await expect(async () => {
    //         await fireEvent.click(recommendationButton);
    //         // throw new BudgetRangeError(input);
    //     });


    //     // e.rejects.toThrowError(error);

    //     // try {
    //     //     await fireEvent.click(recommendationButton);
    //     //     throw new BudgetRangeError(input);
    //     // } catch (e) {
    //     //     expect(e).toBeInstanceOf(BudgetRangeError);
    //     //     expect(e.message).toBe("예산은 양의 정수만 입력가능합니다: " + input);
    //     // }
    // });
});