import React from "react";
import Button from './globalComponents/Button/Button';
import TextField from './globalComponents/TextField/TextField'
export default () => (
<>
<h1>Welcome to React Vite Micro App!</h1>
<p>Hard to get more minimal than this React app.</p>

<TextField inputLabel='Enter Name'/>
<TextField inputLabel='Enter Name'/>
<TextField inputLabel='Enter Name'/>
<TextField inputLabel='Enter Name'/>
<TextField inputLabel='Enter Name'/>
<Button title = 'Click Here' />
<Button title = 'Submit Here' />

</>
);
