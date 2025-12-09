You have a couple of minor issues in your function:

1. **Typo:** `fucntion` should be `function`.
2. **Parameters:** For `a` and `b` to be available inside the function, they
need to be passed in as parameters.

Here's the corrected and improved version:

```javascript
function sum(a, b) {
return a + b;
}

// How to use it:
let result = sum(5, 3); // Calls the function with 5 for 'a' and 3 for 'b'
console.log(result); // This will output: 8

let anotherResult = sum(10, -2);
console.log(anotherResult); // This will output: 8
```

**Explanation of Changes:**

* `function`: The correct keyword to define a function in JavaScript.
* `sum(a, b)`: We've added `a` and `b` inside the parentheses. These are called
**parameters**. When you call the `sum` function, you will provide values for
`a` and `b`.
* `return a + b;`: This line correctly adds the values of `a` and `b` (which are
now provided when the function is called) and returns their sum.