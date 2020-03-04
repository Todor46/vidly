import React from 'react';

const Like = props => {
  let classes = 'like fa fa-heart' + (props.liked === true ? '' : '-o');
  return <i onClick={props.onLike} className={classes} aria-hidden="true"></i>;
};

export default Like;
