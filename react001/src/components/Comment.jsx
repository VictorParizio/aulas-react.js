import React from "react";
import './Comment.css'

function Comment(props) {
    return (
        <>
            <section className="comment">
                <p className="title">{props.title}</p>
                <p className="text">Texto do comentário</p>
                <p className="author">{props.author}</p>
            </section>
        </>
    )
}

export default Comment