import { keyboard } from "../utils";

export default function Keyboard() {
  return (
    <section id="keyboard">
      {keyboard.map((row) => (
        <div className="row">
          {row.map((key) => (
            <button className="key">{key}</button>
          ))}
        </div>
      ))}
    </section>
  );
}
