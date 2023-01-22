import React from 'react';
import MUIRichTextEditor from '../../src/MUIRichTextEditor';

const save = (data: string) => {
  console.log(data);
};

function Basic() {
  return (
    <MUIRichTextEditor
      label="Type something here..."
      onSave={save}
    />
  );
}

export default Basic;
