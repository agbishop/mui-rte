import React from 'react'
import MUIRichTextEditor from "../../src/MUIRichTextEditor";

const InlineToolbar = () => {
    return (
        <MUIRichTextEditor
            label="Try selecting some text to show the inline toolbar..."
            inlineToolbar={true}
        />
    )
}

export default InlineToolbar
