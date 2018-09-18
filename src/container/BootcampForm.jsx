import React from 'react';
import Axios from 'axios';
import swal from 'sweetalert';
import {
  Button,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
} from 'reactstrap';

export default class BootcampForm extends React.Component {
  state = {
    name: '',
    nim: '',
    phone: '',
    mail: '',
    faculty: '',
    gender: '',
    data: [],
  };
  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  postHandler = () => {
    let doc = {
      name: this.state.name,
      nim: this.state.nim,
      phone: this.state.phone,
      mail: this.state.mail,
      faculty: this.state.faculty,
      gender: this.state.gender,
    };
    Axios.post('https://broken-stallion.glitch.me/', doc).then(res => {
      console.log(res, '<<<<<<<<<<<<<<');
      if (res.data.status_code == 702) {
        swal({
          title: `Ada yg belum di-isi tuh gan`,
          icon: 'error',
        });
      } else {
        swal({
          title: `Selamat Bergabung ${this.state.name}`,
          icon: 'success',
        });
        this.setState({
          name: '',
          nim: '',
          phone: '',
          mail: '',
          faculty: '',
          gender: '',
        });
      }
    });
  };
  render() {
    return (
      <div id="register" className="kotak-daftar">
        <Container className="p-md-5">
          <Row>
            <Col sm={8}>
              <h1 className="my-md-4">DAFTAR SEKARANG</h1>
              <Form>
                <Row>
                  <Col sm={6}>
                    <FormGroup>
                      <Label>
                        <small className="text-muted">Nama Lengkap:</small>
                      </Label>
                      <Input
                        type="text"
                        name="name"
                        value={this.state.name}
                        placeholder="Silahkan ketik disini"
                        onChange={this.changeHandler}
                        required
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label>
                        <small className="text-muted">NIM:</small>
                      </Label>
                      <Input
                        type="text"
                        name="nim"
                        value={this.state.nim}
                        placeholder="Silahkan ketik disini"
                        onChange={this.changeHandler}
                      />
                    </FormGroup>
                    <FormGroup tag="fieldset">
                      <legend>
                        <small className="text-muted">Jenis Kelamin:</small>
                      </legend>
                      <FormGroup check inline>
                        <Label check>
                          <Input
                            type="radio"
                            name="gender"
                            value="laki-laki"
                            checked={this.state.gender === 'laki-laki'}
                            onChange={this.changeHandler}
                          />
                          Laki-laki
                        </Label>
                      </FormGroup>
                      <FormGroup check inline>
                        <Label check>
                          <Input
                            type="radio"
                            name="gender"
                            value="perempuan"
                            checked={this.state.gender === 'perempuan'}
                            onChange={this.changeHandler}
                          />
                          Perempuan
                        </Label>
                      </FormGroup>
                    </FormGroup>
                    <Button
                      color="warning"
                      className="text-light font-weight-bold"
                      onClick={() => {
                        this.postHandler();
                      }}>
                      DAFTAR
                    </Button>
                  </Col>
                  <Col sm={6}>
                    <FormGroup>
                      <Label>
                        <small className="text-muted">Nomor Handphone:</small>
                      </Label>
                      <Input
                        type="tel"
                        name="phone"
                        value={this.state.phone}
                        placeholder="Silahkan ketik disini"
                        onChange={this.changeHandler}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label>
                        <small className="text-muted">Email:</small>
                      </Label>
                      <Input
                        type="email"
                        name="mail"
                        value={this.state.mail}
                        placeholder="Silahkan ketik disini"
                        onChange={this.changeHandler}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label>
                        <small className="text-muted">Jurusan:</small>
                      </Label>
                      <Input
                        type="text"
                        name="faculty"
                        value={this.state.faculty}
                        placeholder="Silahkan ketik disini"
                        onChange={this.changeHandler}
                      />
                    </FormGroup>
                  </Col>
                </Row>
              </Form>
            </Col>
            <Col sm={4} className="text-center my-auto">
              <h1>NOTE</h1>
              <p>
                "Bagi yang tidak mendapatkan <br />
                tiket bootcamp / kehabisan kuota <br />
                tidak perlu khawatir karna bootcamp <br />
                merupakan acara pengenalan <br />
                jadi masih dianggap <br />
                menjadi anggota doscom"
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
