import React from "react";
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Divider } from "@mui/material";


export default function Post({ post }) {
  return (
    <Box sx={{ mx: "auto", width: '100%', maxWidth: 500 }}>
      <Typography variant="h5" gutterBottom component="div" sx={{ mx: "auto" }}>
        <Link to={`/post/${post.id}`} className="link"> {post.title} </Link>
      </Typography>
      <Typography variant="button" display="block" gutterBottom>
        by: <Link to={`/?user=${post.user_name}`} className="link">
          {post.user_name}
        </Link>
      </Typography>
      <Typography variant="caption" display="block" gutterBottom>
        Posted: {new Date(post.created_at).toDateString()}
      </Typography>
      <Typography variant="body2" gutterBottom>
        {post.body?.length < 100 ? post.body : (post.body?.substring(0, 99) + '...')}
      </Typography>
      <Divider />
    </Box >
  );
}