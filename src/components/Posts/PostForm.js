import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addPost } from '../../actions/post';
import './Posts.css';

const PostForm = ({ addPost }) => {
    // const [formData, setFormData] = 
    //     useState({
    //         title: '',
    //         text: '',
    //         coverImg: '',
    //     }
    // );

    // const { title, text, coverImg } = formData;

    // const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
    
    // const onSubmit = async e => {
        // e.preventDefault();
        // addPost({ formData })
    // };
   const [text, setText] = useState('');
  
    return (
        <div className="PostForm form-modal-body">
            <div className="container">
                <h4 className="title is-4">Add A Post</h4>
            </div>
            <br />
            <form className="form"  onSubmit={e => {
                e.preventDefault();
                addPost({ text })
                setText('')
            }}>
              
                {/* <div className="field">
                    <label className="label" name="title">Title</label>
                    <div className="control">
                        <input 
                            className="post-input" 
                            name="title" 
                            type="text" 
                            value={title}
                            onChange={ e => setText(e.target.value) }
                        />
                    </div>
                </div>
                <div className="field">
                    <label className="label" name="coverImg">Cover Image URL</label>
                    <div className="control">
                        <input 
                            className="post-input" 
                            name="coverImg" 
                            type="text" 
                            value={coverImg}
                            onChange={ e => setText(e.target.value) }
                        />
                    </div>
                </div> */}

                <div className="field">
                    <label className="label" name="text">Post:</label>
                    <textarea 
                        name="text"
                        cols="30"
                        rows="5"
                        placeholder="Tell us more!"
                        className="post-textarea"
                        value={text}
                        onChange={ e => setText(e.target.value) }
                        ></textarea>
                </div>
                <div className="container form-cta-container">
                    <button className="button" type="submit">Post!</button>
                </div>
            </form>
        </div>
    )
}

PostForm.propTypes = {
    addPost: PropTypes.func.isRequired,   
}

export default connect(null, { addPost })(PostForm);
