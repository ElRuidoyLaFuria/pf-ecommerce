import { useState } from "react";
// import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { getProductsByName, getSearchCategory, getSearchName } from "../../redux/actions";

import style from "./index.module.css";

export default function SearchBar() {
 const dispatch = useDispatch();
 const navigate = useNavigate();

 const [textInput, setTextInput] = useState(null);
 const [emptySearch, setEmptySearch] = useState(false);

 const results = useSelector((state) => state.searchedProducts);

 //  useEffect(() => {
 //   console.log(results);
 //  });

 function onChangeHandler(e) {
  const input = e.target.value;
  if (input === "") {
   setTextInput(null);
  } else {
   setTextInput(input);
  }
 }

 function onSearchHandler(e) {
  e.preventDefault();
  if (!textInput) {
   console.log({ m: "empty search!" });
   setEmptySearch(true);
  } else {
   dispatch(getProductsByName(textInput));
   dispatch(getSearchName(textInput));
   dispatch(getSearchCategory(''))
   setEmptySearch(false);
   navigate("/results");
  }
 }

 return (
  <div className={style.mainDiv}>
   <form onSubmit={onSearchHandler}>
    <input
     className={style.textInput}
     id="inputBusqueda"
     type="text"
     placeholder="What are you looking for?"
     onChange={onChangeHandler}
    />
    <button type="submit">{">"}</button>
    {emptySearch && <p>Try searching something!</p>}
   </form>
  </div>
 );
}