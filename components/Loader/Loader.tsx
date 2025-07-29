import css from "./Loader.module.css";
import { FadeLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className={css.loader}>
      <FadeLoader color="azure" />
      <p className={css.dscr}>Loading...</p>
    </div>
  );
};

export default Loader;
