import React from 'react'
import PropTypes from 'prop-types'

const ProfilePage = ({ 
    profile: {
        username,
        avatar,
        bio,
        twitter,
        facebook,
        instagram,
        website
}}) => {
    return (
        <div>
            <h3 className="title is-3">Hi! I'm {username}!</h3>
            <div className="content form-modal-body">
                {avatar && <div><img src={avatar} alt="someone's face"/> </div>}
                {bio && <div className="container"><h5 className="section-title is-5">About Me:</h5><p>{bio}</p></div>}
                
                <br />
                
                <div className="container socials">
                    <h5 className="section-title is-5">Find Me:</h5>
                    {twitter && <span className="icon socials"><a href={twitter} target="new"><i className="fab fa-lg fa-twitter"></i></a></span>}
                    {facebook && <span className="icon socials"><a href={facebook} target="new"><i className="fab fa-lg fa-facebook"></i></a></span>}
                    {instagram && <span className="icon socials"><a href={instagram} target="new"><i className="fab fa-lg fa-instagram"></i></a></span>}
                    {website && <span className="icon socials"><a href={website} target="new"><i className="fas fa-lg fa-link"></i></a></span>}
                 
                </div>
            </div>
        </div>
    )
}

ProfilePage.propTypes = {
    profile: PropTypes.object.isRequired,
}

export default ProfilePage
