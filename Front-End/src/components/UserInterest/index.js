import React from 'react';

import {
  User,
  UserBt,
  UserScroll,
} from './styles.js';

export default function userInterest({data}) {
  return (
    <UserScroll horizontal={true} showsHorizontalScrollIndicator={false}>
      {data.map((user, index) => (
          <UserBt key={index} activeOpacity={0.9}>
            {console.log(index)}
            <User source={user}/>
          </UserBt>
        )
      )}
    </UserScroll>
  )
}