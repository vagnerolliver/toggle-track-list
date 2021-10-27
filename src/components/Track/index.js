import React, { useState } from "react";

export const Track = ({ id, title, thumbnailUrl, handleChange }) => {
  const [_title, setTitle] = useState(title);
  const [idEdit, setIdEdit] = useState(false);

  return (
    <div>
      {idEdit ? (
        <input
          value={_title}
          onChange={(event) => setTitle(event.target.value)}
        />
      ) : (
        "title"
      )}
      <h2>{title}</h2>
      <img src={thumbnailUrl} alt={title} onClick={() => setIdEdit(!idEdit)} />
    </div>
  );
};
