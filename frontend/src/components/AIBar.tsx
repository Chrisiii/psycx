import { Bar, Dot, Text, Btn } from "../styles/AiBar.styles";

export default function AIBar() {
  return (
    <Bar>
      <Dot />
      <Text>
        <span>AI Assistant</span> — Ask me anything. Product recs, shoot ideas,
        caption help, task planning. Embedded everywhere.
      </Text>
      <Btn>ASK AI ↗</Btn>
    </Bar>
  );
}
