import Component from './component';
import injectSheet from './styles';
import container from './container';

export default container(
  injectSheet(
    Component,
  ),
);
