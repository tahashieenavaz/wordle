import LetterProps from "../interfaces/LetterInterface";

export default function Letter({ letter }: LetterProps) {
  return (
    <>
      <div className="letter">{letter}</div>
    </>
  );
}
