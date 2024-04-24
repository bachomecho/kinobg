import { modalTitle } from "./utils";

describe("modalTitle", () => {
	it("should return the correct marginMid value when title length is greater than or equal to midLength", () => {
		const title = "Време разделно";
		const midLength = 11;
		const marginMid = 14;
		const expected = 13;
		const result = modalTitle(title, midLength, marginMid);
		expect(result).toEqual(expected);
	});

	it("should return the correct marginMid value when title length is less than midLength", () => {
		const title = "Козият рог";
		const midLength = 11;
		const marginMid = 14;
		const expected = 15;
		const result = modalTitle(title, midLength, marginMid);
		expect(result).toEqual(expected);
	});
});
