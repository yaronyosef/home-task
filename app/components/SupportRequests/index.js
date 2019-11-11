import React, { useEffect, memo } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import styled from 'styled-components';
import Button from 'components/Button';
import { sendSupportRequest, addSupportRequest } from '../../containers/HomePage/reducer';

const Table = styled.table`
  width: 100%;
  color: #8a96a0;
  th {
    color: #b4bac6;
    text-align: inherit;
    text-transform: uppercase;
  }
  .name {
    color: #354052;
  }
`;

class SupportRequests extends React.Component {

  timestampToTime(timestamp){
    let unixTimestamp = Date.parse(timestamp);
    return (new Date(unixTimestamp)).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
  }

  render() {
  return (
    <div>
    <Table>
      <tbody>
        <tr>
          <td className="name">Support Requests</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td><Button onClick={() => this.props.addSupportRequestFunc()}>Add</Button></td>
        </tr>
      </tbody>

      <tbody>
        <tr>
          <th>name</th>
          <th>email</th>
          <th>time</th>
          <th>phone number</th>
          <th>city</th>
          <th>status</th>
        </tr>
      </tbody>
      {
        this.props.supportRequests.map((item, i) => 
          (
            <tbody key={i}>
              <tr>
                <td className="name">{item.name}</td>
                <td>{item.email}</td>
                <td>{ this.timestampToTime(item.timestamp) }</td>
                <td>{item.phoneNumber}</td>
                <td>{item.city}</td>
                <td><Button sent={item.status === 'sent'}
                onClick={() => this.props.sendSupportRequestFunc(i)}>
                    {item.status === 'sent' ? 'Sent' : 'Send'}
                  </Button>
                </td>
              </tr>
            </tbody>
          )
        )
      }

    </Table>

    </div>
  );
  }

}

export function mapStateToProps(state) {
  return {
    supportRequests: state.home ? state.home.supportRequests : [],
  };
}


export function mapDispatchToProps(dispatch) {
  return {
    sendSupportRequestFunc: index => dispatch(sendSupportRequest(index)),
    addSupportRequestFunc: e => dispatch(addSupportRequest())
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(SupportRequests);
