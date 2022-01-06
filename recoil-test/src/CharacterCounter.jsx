import React from "react";
import { atom, selector, useRecoilState, useRecoilValue } from "recoil";

const textState = atom({
  key: "textState",
  default: "",
});

const charCountState = selector({
  key: "charCountState",
  get: ({ get }) => {
    const text = get(textState);

    return text.length;
  },
});

export default function CharacterCounter() {
  return (
    <div>
      <TextInput></TextInput>
      <CharacterCount></CharacterCount>
    </div>
  );
}

function TextInput() {
  const [text, setText] = useRecoilState(textState);

  const onChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <input type="text" value={text} onChange={onChange} />
      <br />
      Echo: {text}
    </div>
  );
}

function CharacterCount() {
  const count = useRecoilValue(charCountState);

  return <React.Fragment>Character Count: {count}</React.Fragment>;
}
