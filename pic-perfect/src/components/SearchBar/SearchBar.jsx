import React from "react";
import "./SearchBar.css";

class SearchBar extends React.Component {
    state = { 
        term: '' 
    };

    render() {
        return (
            <div className="ui segment">
                <div className="ui transparent left input">
                    <input 
                        type="text" 
                        value={this.state.term}
                        placeholder="Search..."
                        onChange={(event) => this.setState({ term: event.target.value })}
                    />
                    <button 
                        className="ui icon button"
                        onClick={() => {
                            this.props.onSubmit(this.state.term);
                            this.setState({ term: '' });
                        }}
                    >
                        <i className="search icon"></i>
                    </button>
                </div>
            </div>
        )
    }
}

export default SearchBar;