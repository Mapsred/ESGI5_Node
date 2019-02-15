import React from 'react';
import Typography from "@material-ui/core/Typography/Typography";

import Rythm from 'rythm.js';

export default class Home extends React.Component {

    state = {
        rythm: null
    };

    componentDidMount() {
        const rythm = new Rythm();
        rythm.setMusic('rythmC.mp3');

        rythm.addRythm('image', 'pulse', 0, 10, { min: 0.5, max: 1.1 });
        rythm.addRythm('content', 'color', 0, 10, {
            from: [0, 0, 255],
            to: [255, 0, 255]
        });


        rythm.setGain(0.2);

        setTimeout(() => rythm.start(), 1);

        this.setState({
            rythm: rythm
        });
    }

    render() {
        return <div>
            <Typography align="center" variant="h2">
                Best shop ever
            </Typography>
            <hr/>
            <div className='content'>
                <div style={{ width: '50%', margin: 'auto' }}>
                    <img style={{ maxWidth: '100%' }}
                         className='image'
                         src="http://sarakha63-domotique.fr/wp-content/uploads/2017/03/Shut-up-and-take-my-money.jpg"
                         alt=""/>
                </div>
            </div>
        </div>
    }
}