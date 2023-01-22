import React from 'react';
import InvertColorsIcon from '@mui/icons-material/InvertColors';
import MUIRichTextEditor from '../../src/MUIRichTextEditor';

const save = (data: string) => {
  console.log(data);
};

function CustomInlineToolbar() {
  return (
    <MUIRichTextEditor
      label="Try selecting some text to show the inline toolbar..."
      inlineToolbar
      inlineToolbarControls={['bold', 'italic', 'my-style', 'link']}
      onSave={save}
      customControls={[
        {
          name: 'my-style',
          icon: <InvertColorsIcon />,
          type: 'inline',
          inlineStyle: {
            backgroundColor: 'black',
            color: 'white',
          },
        },
      ]}
    />
  );
}

export default CustomInlineToolbar;
