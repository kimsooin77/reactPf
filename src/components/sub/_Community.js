import React, {useEffect, useRef, useState} from "react";

function _Community() {
    const frame = useRef(null);
    const input = useRef(null);
    const [post,setPost] = useState('');
    const [postList, setPostList] = useState([]);

    const insertPost = () => {
        setPostList([...postList, post]);
        console.log(postList);
        
    }

    useEffect(() => {
        frame.current.classList.add("on");
        setPost('');
    },[])

    return(
        <main ref={frame}>
            <div className="inner">
                <h1>Community</h1>

                <section className="inputBox">
                    <input 
                    ref={input}
                    type="text" 
                    value={post}
                    onChange={ e => setPost(e.target.value)}
                    />
                    <button
                        onClick={insertPost}
                    >save</button>
                </section>

                <section className="showList">
                    
                </section>
            </div>
        </main>
    )
}

export default _Community;