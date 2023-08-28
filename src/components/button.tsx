type ButtonProps = {
  label: string;
  onClick: (...args: any[]) => any;
};

export default function Quizbutton(props: ButtonProps) {
  const { label, onClick } = props
  return <button onClick={onClick} className="btn-gradient py-2 "><text className="text-gradient">{label}</text></button>
}
