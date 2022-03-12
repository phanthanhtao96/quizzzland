import React, { useState, useContext } from 'react';
import { toast } from 'react-toastify';
import { TodoContext } from '../contexts/todos';
import { enterCode } from '../util/keycodes';

function Header() {
    const [text, setText] = useState('');
    const [state, dispatch] = useContext(TodoContext);
    // console.log(state, dispatch)
    

    const keydowText = (e) => {
        const newText = text.trim().length
        // console.log(newText)
        if (e.keyCode === enterCode && newText === 0) {
            toast.error('🦄 Vui lòng nhập thông tin rồi enter!', {
                position: "bottom-center",
                autoClose: 500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'dark'
                });
        }
        else if (e.keyCode === enterCode && newText > 0) {
            dispatch({
                type: "addTask",
                payload: text
            })
            toast.success(`🦄 Bạn thêm data với giá trị [${text}] thành công!`, {
                position: "bottom-center",
                autoClose: 500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'light'
                });

            setText('');
        }
        return;
    }

  return (
    <header className="header">
        <h1>Todos Hook</h1>
        <input 
            className="new-todo"
            placeholder="Nhập công việc..."
            autoFocus
            value={text}
            onChange={e => setText(e.target.value)}
            onKeyDown={keydowText}
        />
    </header>
  )
}

export default Header;