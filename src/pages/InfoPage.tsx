import { Button } from "../components/Button";
import { useNavigate } from "react-router-dom";

const InfoPage = () => {
  const navigate = useNavigate();
  const selectedCategoryName = JSON.parse(
    localStorage.getItem("categoryName") || "null"
  );

  const selectedDifficulty = JSON.parse(
    localStorage.getItem("difficulty") || "null"
  );

  const handleClick = () => navigate("/questions");

  return (
    <div>
      <p>Category:{selectedCategoryName.name}</p>
      <p> Difficulty:{selectedDifficulty}</p>
      <p> Number Of Questions : 10 </p>
      <p> Question type: Multiple</p>
      <Button text="START" onClick={handleClick} />
    </div>
  );
};

export default InfoPage;
