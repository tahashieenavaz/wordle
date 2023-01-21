import LetterProps from "../interfaces/LetterInterface";

export default function ({ letter }: LetterProps) {
  return <div className="letter">{letter}</div>;
}
