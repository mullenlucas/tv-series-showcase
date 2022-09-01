import { commentCounter } from "./popup"
const add = (num1, num2) => {
return num1 + num2
}

test('add two numbers', () => {
    const comment = ['comment1', 'comment2']
    commentCounter(1)
    expect(add(2,2)).toBe(4)
}) 