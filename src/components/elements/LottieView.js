import React, {Component} from "react";
import Lottie from "react-lottie";
import Dev from "../../utils/lottie-anim/dev.json";
  
class LottieAnimation extends Component {
  render(){
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: Dev,
    };

    return(
  
      <Lottie options={defaultOptions} />
    )
  }
 
}

export default LottieAnimation