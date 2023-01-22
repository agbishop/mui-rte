import React from 'react';
import MUIRichTextEditor from '../../src/MUIRichTextEditor';

const save = (data: string) => {
  console.log(data);
};

function MaxLength() {
  return (
    <MUIRichTextEditor
      label="You can only type 10 characters..."
      maxLength={10}
      onSave={save}
    />
  );
}

export default MaxLength;
