import React, { useState, useEffect, Fragment } from 'react';

import { jsx, css } from '@emotion/core'
/** @jsx jsx */
const inputClass = css`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`
const error = css`
  color: #b94a48;
  background-color: #f2dede;
  border-color: #eed3d7;
  padding: 10px;
  border: 1px solid #eed3d7;
  border-radius: 3px;
`
const transitionEffect = css`
  background: #fff;
  color: #000;   

  transition: all 5s ease-in-out;
  width: 100%;
`

const warningMessage = css`
  padding: 10px;
  transition: all 5s ease-in-out;
  width: 100%;

  text-shadow: 0 1px 0 rgba(255,255,255,.5);
  background-color: #fcf8e3;
  border: 1px solid #fbeed5;
  border-radius: 4px;
`
const Form = () => {
  const [ zip, setZip ] = useState('');
  const [ data, setData ] = useState({});
  const [ message, setMessage ] = useState(undefined);

  
  useEffect(() => {
    setMessage('');

    const handleErrors = (response) => {
      if (!response.ok) {
          throw Error("Details don't exist for the zipcode entered");
      }
      return response.json();
    }

    if(!isNaN(zip) && zip.length === 5) {
      setMessage('');
      fetch(`https://www.wsjwine.com/api/address/zipcode/${zip}`)
        .then(handleErrors)
        .then(response => setData(response))
        .catch(error => setMessage(error.message))

    } else {
      zip && setMessage("please enter a valid zip and try again");
      setData({});
    }
  }, [zip])

  return (
    <Fragment>
      <label>Zipcode</label>
      <input css={inputClass} type="text" maxLength="5" value={zip} onChange={(e) => setZip(e.target.value)} />
      {message && <div css={error}>{message}</div> }
      {data?.response && (
        <div css={transitionEffect}>
          <label>State</label>
          <input css={inputClass} type="text" onChange={(e) => setData({...data, stateName: e,target,value})} value={data.response.stateName} />
          <label>City</label>
          <input css={inputClass} type="text" onChange={(e) => setData({...data, city: e,target,value})} value={data.response.city} />
        </div>
      )}
      {
        data?.response?.stateCreateMsg && (
        <div css={warningMessage}>{data.response.stateCreateMsg}</div>
        )
      }
    </Fragment>
  )
}

export default Form;
