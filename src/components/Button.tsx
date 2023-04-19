interface ButtonProps {
  text: string;
  onClick: () => void;
}

export const Button = ({ text, onClick }: ButtonProps) => {
  return (
    <div className="center">
      <button className="btn" onClick={onClick}>
        {text}
      </button>
    </div>
  );
};
