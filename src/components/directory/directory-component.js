import React from 'react';

import MenuItem from '../menu-item/menu-item.js';

import './directory-styles.scss';

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: 'hats',
          imageUrl: 'https://www.toptrendsguide.com/wp-content/uploads/2020/06/Mens-Hat-Styles.jpg',
          id: 1,
          linkUrl:'hats'
        },
        {
          title: 'jackets',
          imageUrl: 'https://cdn.newsapi.com.au/image/v1/eedcb3a88508a924026fc24a14711d8a?width=650',
          id: 2,
          linkUrl:''
        },
        {
          title: 'sneakers',
          imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
          id: 3,
          linkUrl:''
        },
        {
          title: 'womens',
          imageUrl: 'https://assets.vogue.in/photos/60825f5c9958e4848057446d/1:1/w_1600%2Cc_limit/Aditi-rao-hydari-in-crop-top-and-zara-jeans.jpg',
          size: 'large',
          id: 4,
          linkUrl:''
        },
        {
          title: 'mens',
          imageUrl: 'https://www.iwmbuzz.com/wp-content/uploads/2020/02/virat-kohli-the-superstar-fashion-icon.jpg',
          size: 'large',
          id: 5,
          linkUrl:''
        }
      ]
    };
  }

  render() {
    return (
      <div className='directory-menu'>
        {this.state.sections.map(({ id,...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps}/>
        ))}
      </div>
    );
  }
}

export default Directory;