const InfoPage = () => {
  const selectedCategoryId = JSON.parse(
    localStorage.getItem("category") || "null"
  );
  return <div>Category:{selectedCategoryId}</div>;
};

export default InfoPage;
