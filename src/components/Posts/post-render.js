import React, {Component,useState} from 'react';
import Posts from "./posts";


function PostRender (data) {
    const [posts] = useState(data);

        return (
            <div>
                <div className="post-container">
                    {
                        posts.data.map((post) => <Posts data = {post} key={post.id}/> )
                    }
                </div>

            </div>
        );

}

export default PostRender;