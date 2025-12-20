import { hello } from "./main.ts";
import { expect, test } from "vitest";

test("hello says hello", () => {
	expect(hello("name")).toBe("hello name");
});
