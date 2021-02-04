import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Layout from '../components/layout';
import SEO from "../components/seo"


class PostTemplate extends Component {
    render() {
        const post = this.props.data.wordpressPost;

        // STEP #5: Use title and content in Gatsby.
        return (
            <Layout>
                <SEO title={post.title} />
                <h1 dangerouslySetInnerHTML={{ __html: post.title }} />
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </Layout>
        );
    }
}

PostTemplate.propTypes = {
    data: PropTypes.object.isRequired,
    edges: PropTypes.array
};

export default PostTemplate;

// STEP #4: Get current WP Post data via ID.
export const pageQuery = graphql`
    query($id: String!) {
        wordpressPost(id: { eq: $id }) {
            title
            content
        }
    }
`;