/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import { saga } from './reducer';
import reducer from './reducer';
import Chart from 'components/Chart';
import SupportRequests from 'components/SupportRequests';
import { loadData } from './reducer';

const key = 'home';

function HomePage({
  loading,
  error,
  loadDataFunc,
}) {

    useInjectReducer({ key, reducer });
    useInjectSaga({ key, saga });

    useEffect(() => {
      loadDataFunc()
    }, []);
  
  return (
      <article>
        <Helmet>
          <title>Home Page</title>
          <meta
            name="description"
            content="A React.js application homepage"
          />
        </Helmet>
        <div>


        <div style={{
          'display': 'grid',
          'gridTemplateColumns': 'repeat( auto-fit, minmax(100px, 1fr) )'
        }}>

          <Chart
            title="General results"
            count="9,401"
            color="blue"
          />

          <Chart
            title="Ratings by category"
            count="3,900"
          />

          <div style={{
            'gridTemplateColumns': '1fr 1fr',
            'display': 'grid',
            'paddingTop': '50px',
            'height': '274px',
            'gridColumn': 'span 4',
            }}>
            <span>TERM 1</span><span>85.08</span>
            <span>TERM 2</span><span>1.76</span>
            <span>TERM 3</span><span>33.42</span>
            <span>TERM 4</span><span>75.11</span>
          </div>

        </div>

        <SupportRequests/>

        </div>
      </article>
    );
}


HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  onChangeUsername: PropTypes.func,
};

export function mapStateToProps(state) {
  return {
    data: state.home ? state.home.data : [],
  };
}


export function mapDispatchToProps(dispatch) {
  return {
    loadDataFunc: evt => dispatch(loadData())
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(HomePage);
