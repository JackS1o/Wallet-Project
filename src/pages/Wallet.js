import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchApi } from '../actions';

class Wallet extends React.Component {
  async componentDidMount() {
    const { returnApi } = this.props;
    await returnApi();
  }

  render() {
    const { stateEmail } = this.props;
    return (
      <div>
        <header>
          <p data-testid="email-field">{ stateEmail }</p>
          <p data-testid="total-field">0</p>
          <p data-testid="header-currency-field">BRL</p>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  stateEmail: state.user.email,
});

const mapDispatchToProps = (dispatch) => ({
  returnApi: (api) => dispatch(fetchApi(api)),
});

Wallet.propTypes = {
  stateEmail: PropTypes.string.isRequired,
  returnApi: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
