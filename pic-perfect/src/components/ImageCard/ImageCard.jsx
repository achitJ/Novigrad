import React from "react";

class ImageCard extends React.Component {
    render() {
        const { alt_description, urls: {thumb: url} } = this.props.image;

        return (
            <img
                src={url}
                alt={alt_description}
            />
        );
    }
}

export default ImageCard;