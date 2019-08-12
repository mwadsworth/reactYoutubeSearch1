import React from "react"

// pulling props.selectedVedio off into the const name "selectedVideo'//
const VideoDetail = ({ selectedVideo }) => {
    //the first time this componenet renders will be *BEFORE* the axios call to youtube
    //comesback with the initial search resultes and saves them to state... that means
    //initially, we won't have a selectedVideo object, as selectedVideo will be null, so:
    if (!selectedVideo) return <h2>Loading Spinner Goes Here</h2>;

    //once the results comeback from the initial axios call they get saved to state
    //in the App.js componenet... this triggers a re-render of this component, with
    // selectedVideo equal to an objecto f video data, thus bypassing the 'if' above
    // and running the code below: 
    const videoId = selectedVideo.id.videoId;
    const videoUrl = `https://www.youtube.com/embed/${videoId}?rel=0`;

    return (
        <section>
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" title={selectedVideo.snippet.title} src= {videoUrl} allowFullScreen></iframe>
            </div>
            <h2>{selectedVideo.snippet.title}</h2>
            <p>{selectedVideo.snippet.description}</p>
        </section>
    )
}

export default VideoDetail;


