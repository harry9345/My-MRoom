import React from "react";
import "./Header.css";
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "Estonia" };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <form>
        <label>
          <select
            className="btn"
            value={this.state.value}
            onChange={this.handleChange}
          >
            <option value="English">English</option>
            <option value="Suomi">Suomi</option>
            <option value="Norsk">Norsk</option>
            <option value="Svesnka">Svesnka</option>
            <option value="Dansk">Dansk</option>
            <option value="Deutsch">Deutsch</option>
          </select>
        </label>
      </form>
    );
  }
}
export default Header;
