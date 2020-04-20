import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getPosts } from '../../actions/post';
import Spinner from '../../components/Spinner';
import PostItem from './PostItem';

const Posts = ({ getPosts, post: { posts, loading }}) => {
    useEffect(() => {
        getPosts();
    },[getPosts]);

    return loading ? <Spinner /> : (
        <>
            <h4 className="title is-4">Most Recent Posts</h4>
            <div className="columns">
                {posts.map(post => (
                    <PostItem key={post._id} post={post} />
                ))}
            </div>
        </>
    );
};

Posts.propTypes = {
    getPosts: PropTypes.func.isRequired,
    post: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    post: state.post
});
export default connect(mapStateToProps, { getPosts })(Posts);