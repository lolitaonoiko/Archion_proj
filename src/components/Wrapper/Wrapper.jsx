import s from "./Wrapper.module.css";

const Wrapper = ({ children }) => {
  return <div className={s.wr}>{children}</div>;
};

export default Wrapper;
