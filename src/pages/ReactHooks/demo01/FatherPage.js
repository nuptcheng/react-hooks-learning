import React, { useState, useEffect } from 'react';
import ChildPage from './ChildPage';


export default function FatherPage() {
  const person = {
    name: 'zhangyun',
    gender: 'male',
    age: 22,
  };

  const education = {
    highSchool: '南师附中',
    university: '南京邮电大学',
  };


  return (
    <ChildPage
      person={person}
      education={education}
    />
  );
}
