import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap';
import { nanoid } from '@reduxjs/toolkit';
import { postAdded } from '../../Posts/PostsSlice';
import { useDispatch } from 'react-redux';

const AddPostForm = () => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const onTitleChanged = e => setTitle(e.target.value)
    const onContentChanged = e => setContent(e.target.value)
    const dispatch = useDispatch();

    const addPostAction = (e) => {
        e.preventDefault();
        if (title && content) {
            dispatch(postAdded({
                id: nanoid(),
                title,
                content
            }))
        }
        setTitle("");
        setContent("");
    }

    return (
        <section className="container">
            <h2>Add a New Post</h2>
            <Form onSubmit={addPostAction}>

                <Form.Control type="text"
                    id="postTitle"
                    name="postTitle"
                    className="mb-3"
                    value={title}
                    placeholder="Post title"
                    onChange={onTitleChanged}

                />

                <Form.Control
                    as="textarea"
                    placeholder="Leave a comment here"
                    id="postContent"
                    className="mb-3"
                    name="postContent"
                    value={content}
                    onChange={onContentChanged}
                    style={{ height: '100px' }}
                />

                <Button type="submit">Save Post</Button>
            </Form>

        </section>
    )
}

export default AddPostForm;