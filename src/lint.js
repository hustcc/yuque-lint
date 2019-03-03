import { lint } from 'lint-md';

// lint 并发送消息
export const lintMd = (markdown, configure) => {
  return markdown ? lint(markdown, configure) : [];
};
