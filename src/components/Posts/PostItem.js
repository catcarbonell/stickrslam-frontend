import React from 'react';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addLike, removeLike, deletePost } from '../../actions/post';
import './Posts.css';

const PostItem = ({ addLike, removeLike, deletePost, auth, 
    post: { _id, text, title, coverImg, avatar, user, likes, comments, date }
}) => {
   
    return (
      
            <div className="column box tile is-4 post-container">
                
                <div className="post-title">
                <Link to={`/post/${_id}`}>{!title ? <h4 className="subtitle is-5">untitled post</h4> : <h4 className="subtitle is-5">{title}</h4>}</Link>
                </div>
                <span>&#64; <Moment format="YYYY/MM/DD">{date}</Moment></span>
                <br />
                {coverImg && <div className="image"><img src={coverImg} alt="a sticker" /></div>}

                <div className="post-text">
                    <p>{text}</p>
                </div>
                <div className="post-footer">
                  
                    <p>
                        <button onClick={e => addLike(_id)} className="post-footer-btn">
                            <i className="far fa-thumbs-up"></i>
                        </button> 
                        <span>{likes.length}</span>
                    </p>
                    <p>
                        <button onClick={e => removeLike(_id)} className="post-footer-btn">
                            <i className="far fa-thumbs-down"></i>
                        </button> 
                    </p>

                    <p>
                        <Link to={`/post/${_id}`}> 
                            <button className="post-footer-btn">
                                <i className="far fa-comments"></i>
                            </button>
                        </Link>
                        <span>{comments.length}</span>
                        <Link to={`/post/${_id}`}> 
                            <button className="post-footer-btn">
                               Add Comment
                            </button>
                            
                        </Link>
                    </p>
                  
                        <p>
                            <button onClick={e => deletePost(_id)} className="post-footer-btn">
                                <i className="fas fa-trash-alt"></i>
                            </button>
                        </p>
                        <p><span className="icon"><i className="fas fa-edit"></i></span></p>
                </div>
            </div>

    )
}

PostItem.propTypes = {
    post: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
    addLike: PropTypes.func.isRequired,
    removeLike: PropTypes.func.isRequired,
    deletePost: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    auth: state.auth
})
export default connect(mapStateToProps, { addLike, removeLike, deletePost })(PostItem)
