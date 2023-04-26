import { Button } from "../components/Button";
import { useNavigate } from "react-router-dom";
import { useSelectedCategory } from "../hooks/useSelectedCategory";
const InfoPage = () => {
  const { selectedCategoryName, selectedDifficulty } = useSelectedCategory();
  const navigate = useNavigate();

  const handleClick = () => navigate("/questions");

  return (
    <div className="info-quiz">
      <p>
        <b>Category:</b> {selectedCategoryName?.name}
      </p>
      <p>
        <b>Difficulty:</b> {selectedDifficulty}
      </p>
      <p>
        <b> Number Of Questions:</b> 10
      </p>
      <p>
        <b> Question type:</b> Multiple
      </p>
      <Button text="START" onClick={handleClick} />
    </div>
  );
};

export default InfoPage;
