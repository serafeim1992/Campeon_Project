import "./spinner.styles.scss";

const Spinner = () => {
  return (
    <div className="loader">
      <div className="loader__box">
        <span className="loader__box-text">Loading</span>
        <div className="loader__box-spinner"></div>
      </div>
    </div>
  );
};

export default Spinner;
