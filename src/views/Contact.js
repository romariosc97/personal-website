import React, { useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

function Contact() {
    const initial = ['Walk dog', 'Sweep floors', 'Do homework'];
    const [todos, setTodos] = useState(initial);
    return (
        <div>
            <TransitionGroup component="div" className="item-container">
                {todos.map((todo) => (
                    <CSSTransition key={todo} timeout={700} classNames="item">
                    <li className="item">
                        {todo}{' '}
                        <button
                        onClick={() => {
                            setTodos(todos.filter((t) => t !== todo));
                        }}
                        >
                        Delete
                        </button>
                    </li>
                    </CSSTransition>
                ))}
            </TransitionGroup>
        </div>
    )
}
export default Contact;