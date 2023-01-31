import "./index.css";
const SuggestItem = (props) => {
  let { search, onClickSuggest } = props;
  const clickedSuggest = () => {
    onClickSuggest(search);
  };
  return (
    <div className="item-container" onClick={clickedSuggest}>
      <p>{search}</p>
      <img
        src="https://cdn-icons-png.flaticon.com/512/6941/6941879.png"
        className="arrow-img"
      />
    </div>
  );
};

export default SuggestItem;
