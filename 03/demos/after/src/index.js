import React from 'react';
import {render} from 'react-dom'


import "bootstrap/dist/css/bootstrap.min.css";

function Hi(){
    return <p>Hi</p>
}

render(<Hi/>,document.getElementById('app'));
