import { PropTypes } from 'prop-types';
import React, { PureComponent } from 'react';

class NoLibraryBadFormView extends PureComponent {
  render() {
    const {
      firstName,
      lastName,
      onFirstNameChange,
      onLastNameChange,
      onSubmit,
    } = this.props;
    return (
      <form
        onSubmit={onSubmit}
      >
        <h1>No Library Bad</h1>
        <div>
          <input
            onChange={onFirstNameChange}
            value={firstName}
          />
        </div>
        <div>
          <input
            onChange={onLastNameChange}
            value={lastName}
          />
        </div>
        <div>
          <button
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    );
  }
}

NoLibraryBadFormView.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  onFirstNameChange: PropTypes.func.isRequired,
  onLastNameChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default NoLibraryBadFormView;
