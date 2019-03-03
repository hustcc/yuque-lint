import DingRobot from 'ding-robot';
import { getDescription } from 'lint-md';

export const ding = (token, title, errors) => {
  const robot = new DingRobot(token);

  const texts = errors.map(error => {
    const { start, end ,text, type } = error;
    return `- ${start.line}:${start.column}-${end.line}:${end.column}  [${type}]  ${getDescription(type).message}  ${text}`;
  });

  // robot.
  robot.markdown(`yuque-lint: ${title}`, texts.join('\n'));
};
