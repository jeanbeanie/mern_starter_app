/* src/components/pages/PageContainer.jsx */
/* @flow */

import * as React from 'react';
import NotFound from './NotFound';

class PageContainer extends React.Component <{title?: string, children:React.Node}> {
  constructor(props: {title?: string}) {
    super(props);
    this.state = {
      title: this.props.title,
      children: this.props.children || 'NotFound',
    }
  }

  componentDidMount() {
    this.loadInitialData();
  }

  loadInitialData() {
    const promises = [];
    promises.push(this.props.loadInitialData())
    Promise.all(promises).then((data) => {
      this.setState(data[0]);
    }).catch(err => console.log('Error loading data in PageContainer', err));
  }

  render() {
    const { title } = this.state;
    const components = {
      NotFound
    };
    const Children = components[this.state.children];
    return (
      <div>
        <h1>{title}</h1>
        {<Children />}
      </div>
    );
  }
}

export default PageContainer;
