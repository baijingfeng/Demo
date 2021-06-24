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

// 正则匹配方式
const str = "(a+b)*c+((d-e)+f)";
const reg = /\([^()]*?\)/g;
const leftBracket = "MINAR_LEFTBRACKET";
const rightBracket = "MINAR_RIGHTBRACKET";
const result = [];

function extract(str) {
  const arr = str.match(reg);
  if (arr && arr.length > 0) {
    result.push(...arr);
    for (const item of arr) {
      if (item.length > 0) {
        str = str.replace(item, `${leftBracket}${item.substr(1, item.length - 2)}${rightBracket}`);
      }
    }
    extract(str);
  }
}
console.log(result);
extract(str);
console.log(
  result.map(item => {
    return item
      .replace(new RegExp(leftBracket, "g"), "(")
      .replace(new RegExp(rightBracket, "g"), ")");
  })
);

// 正则简化
