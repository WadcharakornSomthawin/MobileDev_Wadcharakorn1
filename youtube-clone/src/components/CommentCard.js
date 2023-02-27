import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";

const CommentCard = () => {

    const [comment, setComment] = useState(null);

    useEffect(()=>{
        fetchFromAPI(
            `search?part=snippet&relatedToVideoId=${videoId}&type=video`
          ).then((data) => {
            console.log(data);
            setViedos(data.items);
          })
    })

  return (
    <div>CommentCard</div>
  )
}

export default CommentCard