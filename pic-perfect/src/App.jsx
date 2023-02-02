import React from 'react';
import {SearchBar, ImageList} from './components';
import unsplash from './api/unsplash';

class App extends React.Component {

  state = {
    images: []
  };

  onSearchSubmit = async (term) => {
    const response = await unsplash.get('/search/photos', {
      params: { 
        query: term,
        order_by: 'popular',
        per_page: 30,
        orientation: 'squarish'
      },
    });

    this.setState({ images: response.data.results });
  }


  render() {
    return (
      <div className='ui center aligned container'>
        <h1>Pic Perfect</h1>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images}/>
      </div>
    );
  }
}

export default App
