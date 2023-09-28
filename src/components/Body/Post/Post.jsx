// @ts-ignore
import Avatar from "@mui/material/Avatar";
// @ts-ignore
import React, { forwardRef } from 'react';
import InputOption from '../Feed/InputOption';
import PropTypes from 'prop-types';
import './Post.css';
// @ts-ignore
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
// @ts-ignore
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
// @ts-ignore
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
// @ts-ignore
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';

const Post = forwardRef(({ name, description, message, photoUrl }, ref) => {
  return (
    <div ref={ref} className="post">
        <div className="post_header">
          <Avatar src={photoUrl}></Avatar>
          <div className="postInfo">
            <h2>{name}</h2>
            <p>{description}</p>
          </div>
        </div>
        <div className="post_body">
          <p>{message}</p>
        </div>
        <div className="post_buttons">
          <InputOption Icon={ThumbUpAltOutlinedIcon} title="Like" color="gray" />
          <InputOption Icon={ChatOutlinedIcon} title="Comment" color="gray" />
          <InputOption Icon={ShareOutlinedIcon} title="Share" color="gray" />
          <InputOption Icon={SendOutlinedIcon} title="Send" color="gray" />
        </div>
    </div>
  );
});

Post.displayName = 'Post';
Post.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  photoUrl: PropTypes.string.isRequired,
};
export default Post;