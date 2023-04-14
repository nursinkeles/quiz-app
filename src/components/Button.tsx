interface ButtonProps {
  text: string;
  onClick: () => void;
}

export const Button = ({ text, onClick }: ButtonProps) => {
  return (
    <button className="btn" onClick={onClick}>
      {text}
    </button>
  );
};
