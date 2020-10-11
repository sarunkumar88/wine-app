import React, { useState, useMemo, Fragment } from 'react';

import { Banners } from '../../constants/banner';

import styled from '@emotion/styled'

const Button = styled.button(
  {
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 0,
    background: '#fff',
    width: '100px',
    height: '45px',
    border: 'none',
    margin: '2px',
    color: '#000',
    border: '1px solid #000'
  },
  props => ({
    background: props.current.name === props.active.name && props.current.color,
    color: props.current.name === props.active.name && '#fff'
  })
)

const Banner = () => {
  const [ banner, setBanner ] = useState(Banners[0]),
    bannerImage = require(`../../${banner.url}`).default;

  return (
    <Fragment>
      {banner && <img src={bannerImage} alt={banner.name} /> }
      <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <h3 style={{marginRight: '10px'}}><strong>Your case options </strong></h3>
        {
          Banners.map(val => {
            return <Button current={val} active={banner} key={val.id} onClick={() => setBanner(val)}>{val.name}</Button>
          })
        }
      </div>
    </Fragment>
  )
}

export default Banner;
