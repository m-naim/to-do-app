import React, { useState } from 'react';
import { IconButton, Input } from '@material-ui/core';
import AddCircleOutlinedIcon from '@material-ui/icons/AddCircleOutlined';

function AddForm({ add, label }:any) {
  const [input, setInput] = useState('');
  const handleSubmit = (e: any) => {
    e.preventDefault();
    add(input);
    setInput('');
  };

  return (
    <form className="add-form" noValidate autoComplete="off" onSubmit={handleSubmit}>
      <Input className="input" placeholder={label} value={input} onChange={(e) => setInput(e.target.value)} />

      <IconButton edge="end" aria-label="delete" onClick={handleSubmit}>
        <AddCircleOutlinedIcon fontSize="large" color="primary" />
      </IconButton>
    </form>
  );
}

export default AddForm;
