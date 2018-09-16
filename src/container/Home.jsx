import React from 'react';
import Axios from 'axios';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Col, Container, Row} from 'reactstrap';

import {Header} from '../components/index.js';
import {Activity, BootcampForm} from './index.js';

class Home extends React.Component {
  state = {
    act: [
      {
        title: 'Pengenalan',
        description:
          'Pengenalan apa itu komunitas doscom dan seperti apa kami.',
        image: '',
      },
      {
        title: 'Kegiatan',
        description: 'Apa-apa saja kegiatan dan acara yang kami lakukan.',
        image: '',
      },
      {
        title: 'Games',
        description: 'Banyak games seru dalam kegiatan bootcamp.',
        image: '',
      },
      {
        title: 'Ilmu Baru',
        description:
          'Banyak ilmu dari para sesepuh doscom yang akan diberikan dan pastinya bermanfaat.',
        image: '',
      },
      {
        title: 'Teman Baru',
        description: 'Banyak teman baru yang pastinya seru-seru.',
        image: '',
      },
      {
        title: 'Stiker',
        description:
          'Ada juga merchendise berupa sticker dari bootcamp dan hadiah lainya.',
        image: '',
      },
    ],
    data: [],
  };

  componentDidMount() {
    Axios.get('http://localhost:8000/').then(res => {
      console.log(res.data);
      this.setState({
        data: res.data,
        loading: false,
      });
    });
  }
  render() {
    return (
      <div>
        <div className="welcome position-relative">
          <Header />
          <div className="position-absolute kotak-tengah text-center">
            <img src="../assets/logo.png" alt="" />
            <h3>
              Sebuah kegiatan untuk mengenal kami,
              <br /> Dinus Open Source Community
            </h3>
          </div>
        </div>
        <Activity data={this.state.act} />
        <div className="jadwal">
          <Row style={{height: '100%'}}>
            <Col sm={9} className="schedule">
              <div class="kotak-tengah pl-md-5 pb-md-5">
                <h1>Tempat Kegiatan</h1>
                <h4>Jl. Ampel Gading, Bandungan</h4>
              </div>
            </Col>
            <Col
              sm={3}
              className="d-flex flex-column text-right justify-content-around">
              <div>
                <h2>Sabtu & Minggu</h2>
                <p>Tanggal 20.21 September 2018</p>
              </div>
              <div>
                <h2>40 Orang</h2>
                <p>Kuota Peserta Kegiatan</p>
              </div>
              <div>
                <h2>Rp. 60.000</h2>
                <p>Biaya pendaftaran</p>
              </div>
            </Col>
          </Row>
        </div>
        <div className="tech-meet p-md-5">
          <Container className="text-light text-center">
            <div className="lingkaran bulat mx-auto d-flex align-items-center justify-content-center">
              <h1 className="text-dark m-0">TM</h1>
            </div>
            <div className="my-md-5">
              <h1>Technical Meeting</h1>
              <p>
                Akan diadakan sebelum kegiatan bootcamp
                <br /> Para peserta dimohon tetap memantau group telegram
              </p>
            </div>
          </Container>
        </div>
        <BootcampForm />
        <div className="p-md-5 kontak">
          <Container>
            <Row>
              <Col sm={4} className="text-right">
                <div className="lingkaran bulat mx-auto d-flex align-items-center justify-content-center" />
                <div className="text-center kontak-person my-md-3">
                  <h3>Bayu Grafit</h3>
                  <p>
                    <small>0823-2259-7622</small>
                  </p>
                  <p>
                    <small>Telegram: @Grafiters</small>
                  </p>
                </div>
              </Col>
              <Col sm={4} className="text-center my-auto">
                <h1>Kontak</h1>
                <p>Untuk keterangan lebih lanjut</p>
              </Col>
              <Col sm={4} className="text-left">
                <div className="lingkaran bulat mx-auto d-flex align-items-center justify-content-center" />
                <div className="text-center kontak-person my-md-3">
                  <h3>Ilham Haqqi</h3>
                  <p>
                    <small>0858-4238-8767</small>
                  </p>
                  <p>
                    <small>Telegram: @ahmadhaqqer</small>
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="footer p-md-5">
          <Container>
            <Row>
              <Col sm={4} className="text-right">
                sekretariat@gmail.com
              </Col>
              <Col sm={4} className="text-center">
                www.doscom.org
              </Col>
              <Col sm={4} className="text-left">
                <a
                  href="https://www.facebook.com/groups/doscomedia/"
                  target="_blank"
                  className="mr-md-3">
                  <FontAwesomeIcon icon={['fab', 'facebook']} size="lg" />
                </a>
                <a
                  href="https://twitter.com/doscomedia?lang=en"
                  target="_blank"
                  className="mr-md-3">
                  <FontAwesomeIcon icon={['fab', 'twitter']} size="lg" />
                </a>
                <a
                  href="https://www.instagram.com/doscomedia/?hl=en"
                  target="_blank"
                  className="mr-md-3">
                  <FontAwesomeIcon icon={['fab', 'instagram']} size="lg" />
                </a>
              </Col>
            </Row>
            <span />
          </Container>
        </div>
      </div>
    );
  }
}

export default Home;
