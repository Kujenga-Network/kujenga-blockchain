import React from 'react';
import { SvgIcon, SvgIconProps } from '@material-ui/core';
import { ReactComponent as KujengaIcon } from './images/kujenga.svg';

export default function Keys(props: SvgIconProps) {
  return <SvgIcon component={KujengaIcon} viewBox="0 0 150 58" {...props} />;
}
