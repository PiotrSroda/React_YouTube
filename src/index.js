import _ from 'lodash';
import React, { Component } from "react";
import ReactDOM from "react-dom";
import YTSearch from "youtube-api-search";
import VideoList from "./Components/video_list";
import SearchBar from "./Components/search_bar";
import VideoDetail from "./Components/video_detail";

const API_KEY = "AIzaSyAOqCy9U3bHruonBmv-pM4RgV8RQ5qQIw0";

// Create a new component - producing a new html

class App extends Component {
constructor (props) {
  super (props);

this.state = {
    videos: [] ,
    selectedVideo: null

  };

  this.videoSearch ();
  }

  videoSearch(term) {
  YTSearch ({key: API_KEY, term: term},  (videos) => {
    this.setState ({
        videos : videos, // Can be just videos without videos: videos
        selectedVideo:videos[0]
      }); //this.setState ({ videos : videos }) is condensed as per ES6 to just videos (( WORKS ONLY WHEN THE PROPERTY AND VARIABLE IS THE SAME NAME
    });
  }

render () {
    const videoSearch = (term) => { this.videoSearch(term) }




   return (
    <div>
      <SearchBar onSearchTermChange={videoSearch} />
      <VideoDetail video={this.state.selectedVideo}/>
      <VideoList
      onVideoSelect = {selectedVideo => this.setState({selectedVideo}) } // w domysle jest ({selectedVideo: videos }) z podrzednych komponentow czyli state selectedVideos TO videos
      videos= {this.state.videos}/>
     </div>
   );
 }
}

// Take the component's HTML and produce it on the page (As in DOM)
ReactDOM.render(<App />, document.querySelector(".container"));
