import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useDispatch, useSelector } from "react-redux";
import { setRichText } from "../stores/richTextSlice";

const RichTextEditor = () => {
  const dispatch = useDispatch();
  const textContent = useSelector((state) => state.richText.content);

  useEffect(() => {
    dispatch(setRichText(textContent));
  }, [dispatch]);

  const handleChange = (value) => {
    dispatch(setRichText(value));
  };

  return (
    <div>
      <ReactQuill
        value={textContent}
        onChange={handleChange}
        theme="snow"
        placeholder="Start typing..."
        className="mt-2 min-h-[120px] leading-[1.5] p-2 border border-gray-300 rounded-md  resize-none w-[420px]"
      />
    </div>
  );
};

export default RichTextEditor;
