import React from 'react';
import {Col, Row} from 'reactstrap';

import '../custom.css';

const Kegiatan = props => {
  return (
    <div className="kegiatan mb-md-5">
      <div className="keg-kotak" />
      <Row className="py-3 px-4">
        <Col sm={3}>
          <img src={props.data.image} alt={props.data.description} />
        </Col>
        <Col sm={9}>
          <div>
            <h4>{props.data.title}</h4>
            <p>{props.data.description}</p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Kegiatan;
