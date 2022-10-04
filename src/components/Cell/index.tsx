import SyntaxHighlighter from 'react-syntax-highlighter'

import './index.sass'

const Cell = () => {
    return (
        <div className='cell'>
            <div className='cell__prompt'>
                In [3]:
            </div>
            <SyntaxHighlighter language='python'>
                print(hello world)
            </SyntaxHighlighter>
        </div>)
}

export default Cell
