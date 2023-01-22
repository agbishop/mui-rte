import React from 'react';
import MUIRichTextEditor from '../../src/MUIRichTextEditor';

function InlineToolbar() {
  return (
    <MUIRichTextEditor
      label="Try selecting some text to show the inline toolbar..."
      inlineToolbar
    />
  );
}

export default InlineToolbar;
