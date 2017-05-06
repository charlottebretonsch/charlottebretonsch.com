import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import articles from '../../articles';

class Article extends PureComponent {
  render() {
    const { match } = this.props;
    const article = articles[match.params.slug];

    return <article>
      <div dangerouslySetInnerHTML={{__html: article() }} />
    </article>;
  }
}

Article.propTypes = {
  match: PropTypes.object.isRequired,
};

export default Article;
