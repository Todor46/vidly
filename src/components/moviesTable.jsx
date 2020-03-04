import React, { Component } from 'react';
import auth from '../services/authService';
import Like from './common/like';
import Table from './common/table';
import { Link } from 'react-router-dom';

class MoviesTable extends Component {
  columns = [
    {
      path: 'title',
      label: 'Title',
      content: movie => <Link to={`/movies/${movie._id}`}>{movie.title}</Link>
    },
    { path: 'genre.name', label: 'Genre' },
    { path: 'numberInStock', label: 'Stock' },
    { path: 'dailyRentalRate', label: 'Rate' },
    {
      key: 'like',
      content: movie => (
        <Like onLike={() => this.props.onLike(movie)} liked={movie.liked} />
      )
    },
    {
      key: 'delete',
      content: movie =>
        auth.getCurrentUser() &&
        auth.getCurrentUser().isAdmin && (
          <button
            onClick={() => this.props.onDelete(movie)}
            className="btn btn-md btn-danger"
          >
            Delete
          </button>
        )
    }
  ];

  // deleteColumn = {
  //   key: 'delete',
  //   content: movie => (
  //     <button
  //       onClick={() => this.props.onDelete(movie)}
  //       className="btn btn-md btn-danger"
  //     >
  //       Delete
  //     </button>
  //   )
  // };

  // constructor() {
  //   super();
  //   const user = auth.getCurrentUser();
  //   if (user && user.isAdmin) this.columns.push(this.deleteColumn);
  // }

  render() {
    const { movies, sortColumn, onSort } = this.props;
    return (
      <Table
        data={movies}
        columns={this.columns}
        sortColumn={sortColumn}
        onSort={onSort}
      />
    );
  }
}

export default MoviesTable;
