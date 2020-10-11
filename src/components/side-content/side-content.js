import React from 'react';

import { sideContent } from '../../constants/side-content';
import { SideContentContainer, Title, ListUl, ListLi } from './styles';

const SideContent = () => {
  return (
    <SideContentContainer>
      <Title>Included with Your Case:</Title>
      <ListUl>
        {
          sideContent.images.filter(val => val.id <= 2).map(val =>{
            return (<ListLi key={val.id}><img src={require(`../../${val.url}`).default} /></ListLi>)
          })
        }
        {
          sideContent.content.map(({id, imgUrl, textHighlight, content}) => {
            return(<ListLi key={id}>
              <div style={{width: '15%'}}>
                <img src={require(`../../${imgUrl}`).default} />
              </div>
              <div style={{width: '85%'}}>
                <strong>{textHighlight}</strong>
                {content}
              </div>
            </ListLi>)
          })
        }
        {
          sideContent.images.filter(val => val.id > 2).map(val =>{
            return (<ListLi key={val.id}><img src={require(`../../${val.url}`).default} /></ListLi>)
          })
        }
      </ListUl>
    </SideContentContainer>
  )
}

export default SideContent;
