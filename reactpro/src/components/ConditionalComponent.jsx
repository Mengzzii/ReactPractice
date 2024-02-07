import Code from "./Code";
import Welcome from "./Welcome";

export default function ConditionalComponent() {
  const display = false;
  return display ? <Code /> : <Welcome />;
}
