import React from 'react';
import { Loader } from 'semantic-ui-react'

import './style.css';

export default function Load() {
  return (
    <div className="load_wrapper">
        <Loader active inline='centered' />
    </div>
  );
}
