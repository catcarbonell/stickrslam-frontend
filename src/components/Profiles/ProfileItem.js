import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProfileItem = ({ 

    profile: {
        user: { _id},
        username,
        avatar,
        website,
        twitter,
        facebook,
        instagram,
        bio
    }
}) => {
    return (
        <div className="box ProfileItem">
            {avatar && <div className="Profile-avatar-container"><img className="Profile-avatar" src={avatar} alt="profile" /></div>}

            <Link to={`/profile/${_id}`}><p className="subtitle is-5">{username}</p></Link>
            <br />
            <div className="socials">
                {twitter && <span className="icon socials"><a href={twitter} target="new"><i className="fab fa-lg fa-twitter"></i></a></span>}
                {facebook && <span className="icon socials"><a href={facebook} target="new"><i className="fab fa-lg fa-facebook"></i></a></span>}
                {instagram && <span className="icon socials"><a href={instagram} target="new"><i className="fab fa-lg fa-instagram"></i></a></span>}
                {website && <span className="icon socials"><a href={website} target="new"><i className="fas fa-lg fa-link"></i></a></span>}
                <div>
                    <h4 className="is-3">About Me:</h4>
                    {bio && <p>{bio}</p>}
                </div>
            </div>
        </div>
    )
}

ProfileItem.propTypes = {
    profile: PropTypes.object.isRequired,
}

export default ProfileItem
