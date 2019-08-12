import React from "react";
import styled from "styled-components";

const List = styled.ul`
    list-style: none;
    padding-left: 0;
`
const ListItem = styled.li`
    margin-bottom: 1em;
    text-align: right;
    img {
        border: ${props => props.active ? "5px solid palevioletred" : "2px solid gray"};
        border-radius 10px;
        cursor: pointer;
        :hover {
            border-color: red;
        }
    }
`

const VideoList = props => {
    //gives permssion for this to act as a wrapper element and for other elelemnts
    //(components) to be renedered inside
    return (
        <List>{props.children}</List>
    )
}
// ({ video }) takes the value stored at props.video ( remember, props is the object of key/value)
// pair-format attributes passed in from the parent component!) and destructures it into its 
//own variable, 'video'... that way, any time we want to use it, we can do so via video.wather
// rather than props.video.wathever
const VideoListItem = ({ video, selectedVideo, onVideoSelect }) => {
    console.log(video);
    return (
        <ListItem active={video === selectedVideo }>
            <img 
            src={video.snippet.thumbnails.medium.url} 
            alt={video.snippet.title} 
            onClick={() => onVideoSelect(video)}
            />
        </ListItem>
    )
}

export { VideoList, VideoListItem };