import React from 'react'
import Carousel from 'react-elastic-carousel';
import Card from './Card';

export const Skills = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 1, itemsToScroll: 1, pagination: false  },
    { width: 175, itemsToShow: 1, itemsToScroll: 1, pagination: false  },
    { width: 250, itemsToShow: 2, itemsToScroll: 2, pagination: false },
    { width: 550, itemsToShow: 4, itemsToScroll: 2, pagination: false },
  ]


  return (
    <div className='skills__container'>
        <Carousel breakPoints={breakPoints} >
            {/* <Card name={'Swift'} image={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg"} /> */}
            <Card name={"JavaScript"} image={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"} />
            <Card name={"React"} image={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"} />
            <Card name={"Flutter"} image={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg"} />
            <Card name={"Linux"} image={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg"} />
            <Card name={"HTML"} image={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"} />
            <Card name={"CSS"} image={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"} />
            <Card name={"Sass"} image={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"} />
            <Card name={"Dart"} image={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg"} />
            <Card name={"NodeJS"} image={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"} />
            <Card name={"Angular"} image={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-plain.svg"} />
            <Card name={"BootStrap"} image={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg"} />
            <Card name={"Git"} image={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"} />
            <Card name={"Github"} image={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"} />
            <Card name={"Java"} image={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"} />
            <Card name={"Mongo"} image={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"} />
            <Card name={"MySQL"} image={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"} />
        </Carousel>
    </div>
  )
}
