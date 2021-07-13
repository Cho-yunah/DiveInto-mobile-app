import React, { useState } from 'react';

export default function useInputText(initialValue: string) {
  const [inputText, setInputText] = useState(initialValue);

  const handleTextInput = (text: string) => {
    setInputText(text);
  };

  return [inputText, handleTextInput, setInputText];
}
