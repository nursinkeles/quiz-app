import { ButtonProps } from "../types/Type";

export const Button = ({ text, onClick }: ButtonProps) => {
  return (
    <div className="center">
      <button className="btn" onClick={onClick}>
        {text}
      </button>
    </div>
  );
};
