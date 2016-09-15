var React = require("react");

var CountdownForm = React.createClass({
  onSubmiterino: function(event) {
    event.preventDefault();

    var strSeconds = this.refs.seconds.value;
    if (strSeconds.match(/^[0-9]*$/)) {
      this.refs.seconds.value = "";
      this.props.onSetCountdown(parseInt(strSeconds, 10));
    }
  },
  render: function() {
    return(
      <div>
        <form action="" ref="form" onSubmit={this.onSubmiterino} className="countdown-form">
          <input type="text" placeholder="type the time in seconds" ref="seconds"/>
          <button className="button expanded">Start</button>
        </form>
      </div>
    );
  }
});

module.exports = CountdownForm;