import React, { Component } from 'react';
import { Link, Typography } from '@material-ui/core';

export default class GitRepository extends Component {

    static compare(a, b) {
        if (a.updated_at > b.updated_at) return -1;
        if (a.updated_at < b.updated_at) return 1;
        return 0;
    }

    render() {
        return(
            <div>
                <Link color="textPrimary" href={this.props.repo.clone_url}>{this.props.repo.name}</Link>
                <Typography color="textSecondary">{this.props.repo.description}</Typography>
            </div>
        );
    }
}