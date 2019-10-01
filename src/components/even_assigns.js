import React from 'react';


export default function EvenAssigns () {
    return (
      /* eslint import/no-webpack-loader-syntax: off */
      <div dangerouslySetInnerHTML={ {__html: require("html-loader!./assigns.html") } }  />
    );
}

