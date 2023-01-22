import React, { useCallback } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { inputTitleState } from "../states/inputTitleState.ts";

const InputTask = () => {
  // useRecoilValueでinputTitleで定義したdefaultの値を取得できる
  const inputTitle = useRecoilValue(inputTitleState);
  //
  const setInputTitle = useSetRecoilState(inputTitleState);

  const onChange = useCallback(
    (e) => {
      setInputTitle(e.target.value);
      console.log(inputTitle);
    },
    [inputTitle]
  );

  return (
    <div className="inputField">
      <input type="text" className="inputTitle" onChange={onChange} />
      <button type="button">Add</button>
    </div>
  );
};

export default InputTask;
