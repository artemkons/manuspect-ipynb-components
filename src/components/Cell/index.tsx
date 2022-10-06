import { useState } from 'react'

import Editor from 'react-simple-code-editor';
import Prism from 'prismjs'
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism.css';

import './index.sass'

const Cell = () => {
    const [code, setCode] = useState('print("Hello world!")')

    return (
        <div className='cell'>
            <div className='cell__prompt'>
                In [3]:
            </div>
            <Editor
                value={code}
                onValueChange={code => setCode(code)}
                // TODO Find python syntax highlighter
                highlight={code => Prism.highlight(code, Prism.languages.js, 'js')}
                padding={10}
                style={{
                    fontFamily: '"Fira code", "Fira Mono", monospace',
                    fontSize: 12,
                }}
            />
        </div>)
}

export default Cell
