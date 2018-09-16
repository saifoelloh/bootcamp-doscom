import React from 'react';
import {Col, Container, Row} from 'reactstrap';

import {Kegiatan} from '../components/index.js';

export default class Activity extends React.Component {
  render() {
    console.log(this.props.data[0]);
    return (
      <div id="about">
        <div className="warna-orange" />
        <div className="text-center p-md-5 judul-kegiatan">
          <h1 className="font-weight-bold mt-md-3 mb-md-0">Bootcamp Doscom</h1>
          <p>Beberapa kegiatan yang dilakukan dalam bootcamp doscom.</p>
        </div>
        <div className="kotak-kegiatan">
          <Row className="mx-auto">
            {this.props.data.map(datum => {
              return (
                <Col sm={3}>
                  <Kegiatan data={datum} />
                </Col>
              );
            })}
          </Row>
        </div>
      </div>
    );
  }
}
