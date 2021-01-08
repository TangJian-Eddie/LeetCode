const largestRectangleArea = (heights) => {
  let maxArea = 0;
  const stack = [];
  heights = [0, ...heights, 0];
  for (let i = 0; i < heights.length; i++) {
    while (heights[i] < heights[stack[stack.length - 1]]) {
      // 当前bar比栈顶bar矮
      const stackTopIndex = stack.pop(); // 栈顶元素出栈，并保存栈顶bar的索引
      maxArea = Math.max(
        maxArea,
        heights[stackTopIndex] * (i - stack[stack.length - 1] - 1)
      );
    }
    stack.push(i); // 当前bar比栈顶bar高了，入栈
  }
  return maxArea;
};
