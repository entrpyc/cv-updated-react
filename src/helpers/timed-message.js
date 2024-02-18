export default class TimedMessage {
  constructor(message) {
    this.message = message || false;
    this.visible = false;
    this.onVisibilityUpdate = () => {};
    this.timeoutId = false;
  }

  setMessage(msg) {
    this.message = msg;
  }

  setVisible(visibleVal) {
    if (visibleVal) {
      if (this.timeoutId) clearTimeout(this.timeoutId);

      this.timeoutId = setTimeout(() => {
        this.visible = false;
        this.timeoutId = null; // Reset timeout ID
        this.onVisibilityUpdate(this.visible);
      }, 8000);
    }

    this.visible = visibleVal;
    this.onVisibilityUpdate(this.visible);
  }

  setMessageWithTimeout = (str) => {
    if(str === false) {
      this.setVisible(false);
      return;
    }

    this.setMessage(str);
    this.setVisible(true);
  }

  setOnVisibilityUpdate(cb) {
    this.onVisibilityUpdate = cb;
  }
}
