import { useNavigate } from "react-router-dom";
import style from "./index.module.css";

export default function AdminSideBar() {
  const navigate = useNavigate();

  const componentSelectionHandler = (e) => {
    switch (e.target.id) {
      case "categories":
        return navigate("/soyadmin/categories");
      case "reviews":
        return navigate("/soyadmin/reviews");
      case "users":
        return navigate("/soyadmin/users");
      default:
        return;
    }
  };

  return (
    <aside className={style.aside}>
      <div className={style.controlPanel}>Control Panel</div>
      <nav className={style.optionNav}>
        <div className={style.optionDiv} onClick={componentSelectionHandler}>
          <p id="users" className={style.optionP}>
            User monitoring
          </p>
        </div>
        <div className={style.optionDiv} onClick={componentSelectionHandler}>
          <p id="reviews" className={style.optionP}>
            All Reviews
          </p>
        </div>
        <div className={style.firstOptionDiv} onClick={componentSelectionHandler}>
          <p id="categories" className={style.optionP}>
            Category management
          </p>
        </div>
        <div className={style.lasOptionDiv} onClick={componentSelectionHandler}>
          <p className={style.optionP}>Option 4</p>
        </div>
      </nav>
    </aside>
  );
}
