import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Container} from 'reactstrap';

const Kegiatan = props => {
  return (
    <div>
      <Container className="text-center p-md-3">
        <img src={props.data.image} alt="" style={{width: '100%'}} />
        <div>
          <h4>{props.data.title}</h4>
          <p>
            <small>{props.data.description}</small>
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Kegiatan;
