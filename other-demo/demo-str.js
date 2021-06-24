// 给定一个字符串 str ，输出字符串中被"()"包裹的字符串

//     有效字符串需满足：

//     左括号必须用相同类型的右括号闭合。
//     左括号必须以正确的顺序闭合。

//     示例：

//     str = "(a+b)*c+((d-e)+f)"

// a+b
// (d-e)+f
// d-e

var str = "(a+b)*c+((d-e)+((f+g)*r))";
[...str].reduce(
  (acc, char, index, src) => {
    const { results, leftBrackets } = acc;
    if (char === "(") {
      leftBrackets.push(index);
    } else if (char === ")" && leftBrackets.length > 0) {
      results.push(src.slice(leftBrackets.pop() + 1, index).join(""));
    }

    return acc;
  },
  {
    results: [],
    leftBrackets: []
  }
);
