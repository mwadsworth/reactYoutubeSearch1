import React, { Component } from 'react';
import _ from "lodash";
import { Container, Row, Col } from "reactstrap";
import API from "./utils/API";
import SearchBar from "./components/SearchBar";
import VideoDetail from "./components/VideoDetail";
import { VideoList, VideoListItem } from "./components/VideoList";



class App extends Component {
  state = {
    videos: [],
    selectedVideo: null
  }

  componentDidMount() {
    //call that youtube api//
   this.searchYouTube("kittens in mittens"); 
  }

  //template... function declaration
  searchYouTube = term => {
    API.searchYouTube(term)
      //.then will capture the return value from the call above//
      .then(res => this.setState({ videos: res.data.items, selectedVideo: res.data.items[0] }))
      .catch(err => console.log(err));
  } 

  onVideoSelect = selectedVideo => {
      this.setState({ selectedVideo: selectedVideo });
  }

  throttledSearch = _.debounce(this.searchYouTube, 800);

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <h1>Magical Youtube React Search</h1>
            <SearchBar searchYouTube={this.searchYouTube} />
          </Col>
        </Row>
        <Row>
          <Col md="8">
            <VideoDetail selectedVideo={this.state.selectedVideo} />
          </Col>
          <Col md="4">
            <VideoList>
             {/*.map takes  in an array and gives you a new array of the
             same length i nreturn, modified however you specify... in this
             case, our new array will be an array of VideoListItem components,
             one for each video in our original array! */} 
      
              {this.state.videos.map(video => (
                <VideoListItem
                 video={video} 
                 key={video.id.videoId}
                 selectedVideo={this.state.selectedVideo} 
                 onVideoSelect={this.onVideoSelect}
                 />
              ))}
            </VideoList>
          </Col>
        </Row>
      </Container>
    );
  }

}



export default App;
