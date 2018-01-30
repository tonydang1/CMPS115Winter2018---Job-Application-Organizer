import React, { Component } from 'react';

import classes from './styles.css';

class Sidebar extends Component {
  constructor(props) {
    super(props);

    this.onButtonClick = this.onButtonClick.bind(this);
  }

  onButtonClick(event) {
    document.getElementsByClassName(classes.active)[0].classList.remove(classes.active);
    event.currentTarget.classList.add(classes.active);
    this.props.compUpdate(event.currentTarget.getAttribute('data-class'));
  }

  render() {
    return (
      <div className={`${classes.sidebar}`}>
        <div className={`${classes.top}`}>
          <button 
            className={`${classes.button}`} 
            data-class="profile"
            onClick={this.onButtonClick}
          >
            <div className={`${classes.profile}`}>
              J
            </div>
          </button>

          <button 
            className={`${classes.button} ${classes.active}`}
            data-class="dashboard"
            onClick={this.onButtonClick}
          >
            <svg width="30" height="33" viewBox="0 0 40 44">
              <path fill="#FAFAFA" d="M 31.1111 17.6L 8.88889 17.6L 8.88889 13.2L 31.1111 13.2L 31.1111 17.6ZM 31.1111 26.4L 8.88889 26.4L 8.88889 22L 31.1111 22L 31.1111 26.4ZM 24.4444 35.2L 8.88889 35.2L 8.88889 30.8L 24.4444 30.8L 24.4444 35.2ZM 20 4.4C 20.5894 4.4 21.1546 4.63178 21.5713 5.04436C 21.9881 5.45694 22.2222 6.01652 22.2222 6.6C 22.2222 7.18348 21.9881 7.74305 21.5713 8.15563C 21.1546 8.56821 20.5894 8.8 20 8.8C 19.4106 8.8 18.8454 8.56821 18.4287 8.15563C 18.0119 7.74305 17.7778 7.18348 17.7778 6.6C 17.7778 6.01652 18.0119 5.45694 18.4287 5.04436C 18.8454 4.63178 19.4106 4.4 20 4.4ZM 35.5556 4.4L 26.2667 4.4C 25.3333 1.848 22.8889 0 20 0C 17.1111 0 14.6667 1.848 13.7333 4.4L 4.44444 4.4C 3.2657 4.4 2.13524 4.86357 1.30175 5.68873C 0.468252 6.51389 1.97373e-15 7.63305 9.86865e-16 8.8L 9.86865e-16 39.6C 1.97373e-15 40.767 0.468252 41.8861 1.30175 42.7113C 2.13524 43.5364 3.2657 44 4.44444 44L 35.5556 44C 36.7343 44 37.8648 43.5364 38.6982 42.7113C 39.5317 41.8861 40 40.767 40 39.6L 40 8.8C 40 7.63305 39.5317 6.51389 38.6982 5.68873C 37.8648 4.86357 36.7343 4.4 35.5556 4.4Z"/>
            </svg>
          </button>

          <button 
            className={`${classes.button}`}
            data-class="calendar"
            onClick={this.onButtonClick}
          >
            <svg width="30" height="33" viewBox="0 0 40 44">
              <path fill="#FAFAFA" d="M 35.5556 39.6L 4.44444 39.6L 4.44444 15.4L 35.5556 15.4L 35.5556 39.6ZM 28.8889 0L 28.8889 4.4L 11.1111 4.4L 11.1111 0L 6.66667 0L 6.66667 4.4L 4.44444 4.4C 1.97778 4.4 0 6.358 0 8.8L 0 39.6C 9.86865e-16 40.767 0.468252 41.8861 1.30175 42.7113C 2.13524 43.5364 3.2657 44 4.44444 44L 35.5556 44C 36.7343 44 37.8648 43.5364 38.6982 42.7113C 39.5317 41.8861 40 40.767 40 39.6L 40 8.8C 40 6.358 38 4.4 35.5556 4.4L 33.3333 4.4L 33.3333 0L 28.8889 0ZM 31.1111 24.2L 20 24.2L 20 35.2L 31.1111 35.2L 31.1111 24.2Z"/>
            </svg>
          </button>

          <button 
            className={`${classes.button}`}
            data-class="analytics"
            onClick={this.onButtonClick}
          >
            <svg width="30" height="27" viewBox="0 0 40 36">
              <path fill="#FAFAFA" d="M 40 36L 0 36L 0 0L 4 0L 4 32L 8 32L 8 14L 16 14L 16 32L 20 32L 20 6L 28 6L 28 32L 32 32L 32 22L 40 22L 40 36Z"/>
            </svg>
          </button>
        </div>

        <div className={`${classes.bottom}`}>
          <button className={`${classes.button}`}>
            <svg width="27" height="28.5" viewBox="0 0 36 38">
              <path fill="#FAFAFA" d="M 18.0041 24.9817C 16.2864 24.9817 14.639 24.2993 13.4243 23.0847C 12.2097 21.8701 11.5274 20.2227 11.5274 18.505C 11.5274 16.7872 12.2097 15.1398 13.4243 13.9252C 14.639 12.7106 16.2864 12.0282 18.0041 12.0282C 19.7218 12.0282 21.3692 12.7106 22.5838 13.9252C 23.7985 15.1398 24.4808 16.7872 24.4808 18.505C 24.4808 20.2227 23.7985 21.8701 22.5838 23.0847C 21.3692 24.2993 19.7218 24.9817 18.0041 24.9817ZM 31.7533 20.2999C 31.8273 19.7078 31.8828 19.1156 31.8828 18.505C 31.8828 17.8943 31.8273 17.2836 31.7533 16.6545L 35.6578 13.6382C 36.0094 13.3606 36.1019 12.8609 35.8799 12.4538L 32.1789 6.05112C 31.9568 5.64401 31.4572 5.47747 31.0501 5.64401L 26.4423 7.49451C 25.4801 6.77281 24.4808 6.14365 23.315 5.68102L 22.6303 0.777208C 22.5563 0.333089 22.1677 0 21.7051 0L 14.3031 0C 13.8405 0 13.4519 0.333089 13.3778 0.777208L 12.6932 5.68102C 11.5274 6.14365 10.5281 6.77281 9.56583 7.49451L 4.95809 5.64401C 4.55098 5.47747 4.05135 5.64401 3.82929 6.05112L 0.128298 12.4538C -0.112267 12.8609 -0.0012368 13.3606 0.350357 13.6382L 4.2549 16.6545C 4.18088 17.2836 4.12537 17.8943 4.12537 18.505C 4.12537 19.1156 4.18088 19.7078 4.2549 20.2999L 0.350357 23.3718C -0.0012368 23.6493 -0.112267 24.149 0.128298 24.5561L 3.82929 30.9588C 4.05135 31.3659 4.55098 31.5139 4.95809 31.3659L 9.56583 29.4969C 10.5281 30.2371 11.5274 30.8663 12.6932 31.3289L 13.3778 36.2327C 13.4519 36.6768 13.8405 37.0099 14.3031 37.0099L 21.7051 37.0099C 22.1677 37.0099 22.5563 36.6768 22.6303 36.2327L 23.315 31.3289C 24.4808 30.8478 25.4801 30.2371 26.4423 29.4969L 31.0501 31.3659C 31.4572 31.5139 31.9568 31.3659 32.1789 30.9588L 35.8799 24.5561C 36.1019 24.149 36.0094 23.6493 35.6578 23.3718L 31.7533 20.2999Z"/>
            </svg>
          </button>

          <button className={`${classes.button}`}>
            <svg width="24" height="24" viewBox="0 0 32 32">
              <path fill="#FAFAFA" d="M 19.6978 22.3822L 24.3022 17.7778L 7.11111 17.7778L 7.11111 14.2222L 24.3022 14.2222L 19.6978 9.61778L 22.2222 7.11111L 31.1111 16L 22.2222 24.8889L 19.6978 22.3822ZM 28.4444 0C 29.3874 7.89492e-16 30.2918 0.374602 30.9586 1.0414C 31.6254 1.70819 32 2.61256 32 3.55556L 32 11.8578L 28.4444 8.30222L 28.4444 3.55556L 3.55556 3.55556L 3.55556 28.4444L 28.4444 28.4444L 28.4444 23.6978L 32 20.1422L 32 28.4444C 32 29.3874 31.6254 30.2918 30.9586 30.9586C 30.2918 31.6254 29.3874 32 28.4444 32L 3.55556 32C 1.58222 32 0 30.4 0 28.4444L 0 3.55556C 0 1.58222 1.58222 0 3.55556 0L 28.4444 0Z"/>
            </svg>
          </button>
        </div>
      </div>
    );
  }
}

export default Sidebar;