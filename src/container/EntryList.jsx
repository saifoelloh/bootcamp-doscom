import * as Axios from 'axios';
import React from 'react';
import {Container} from 'reactstrap';

class EntryList extends React.Component {
  state = {
    data: [],
    loading: true,
  };
  componentDidMount() {
    Axios.get(
      'https://sheets.googleapis.com/v4/spreadsheets/1h524rhDMB4jLjyXwct1Ea2PzMO79qE0Anc7FjHvEjF4/values/pendaftaran?key=AIzaSyA6ueH19L6zpGkDuBCg7Ik3lwbWdnF8WSQ',
    ).then(res => {
      console.log(res, '>>>>>>>>>>>>>>>>>>');
      this.setState({
        data: res.data.values,
        loading: false,
      });
      console.log(this.state.data, '<<<<<<<<<<<<<<<<<');
    });
  }
  render() {
    return (
      <div>
        {this.state.loading ? (
          <h1>Loading</h1>
        ) : (
          this.state.data.map(datum => {
            return (
              <Container>
                <p>{datum[0]}</p>
                <p>{datum[1]}</p>
                <p>{datum[2]}</p>
                <p>{datum[3]}</p>
                <p>{datum[4]}</p>
                <p>{datum[5]}</p>
              </Container>
            );
          })
        )}
      </div>
    );
  }
}

export default EntryList;
