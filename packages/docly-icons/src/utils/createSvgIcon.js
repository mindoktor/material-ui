import React from 'react';
import pure from 'recompose/pure';
// import SvgIcon from '@material-ui/core/SvgIcon';

function createSvgIcon(path, displayName) {
  // let Icon = props => <SvgIcon {...props}>{path}</SvgIcon>;
  let Icon = props => <svg {...props}>{path}</svg>;

  Icon.displayName = `${displayName}Icon`;
  Icon = pure(Icon);
  Icon.muiName = 'SvgIcon';

  Icon.defaultProps = {
    // width: 56,
    // height: 56,
    color: 'inherit',
    fontSize: 'default',
    viewBox: '0 0 56 56',
  };
  return Icon;
}

export default createSvgIcon;
