import React from 'react';
import Auxi from '../../hoc/Auxi';

const layout=(props)=>(
    <Auxi>
        <div>toolbar,sidedrawer,backdrop</div>
        <main>
            {props.children}
        </main> 
    </Auxi>
    
)

export default layout;