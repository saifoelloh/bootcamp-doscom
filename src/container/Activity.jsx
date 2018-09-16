import React from 'react';
import {Col, Container, Row} from 'reactstrap';

import {Kegiatan} from '../components/index.js';

export default class Activity extends React.Component {
  render() {
    console.log(this.props.data[0]);
    return (
      <div className="kotak-kegiatan">
        <div className="text-center p-md-5 judul-kegiatan">
          <h1>Included</h1>
          <p>Beberapa kegiatan yang dilakukan dalam bootcamp doscom.</p>
        </div>
        <Container className="p-md-5 p-sm-3">
          <Row>
            {this.props.data.map(datum => {
              return (
                <Col sm={4}>
                  <Kegiatan data={datum} />
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
    );
  }
}
