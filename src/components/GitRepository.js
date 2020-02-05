import React, { Component } from 'react';

export default class GitRepository extends Component {

    static compare(a, b) {
        if (a.updated_at > b.updated_at) return -1;
        if (a.updated_at < b.updated_at) return 1;
        return 0;
    }

    render() {
        console.log(this.props.repo);
        return(
            <div>
                <a href={this.props.repo.clone_url}>{this.props.repo.name}</a>
                <p>{this.props.repo.description}</p>
            </div>
        );
    }
}