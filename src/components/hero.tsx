import React from "react"
import Lottie from "react-lottie-player"
import lottieJson from "../my-animation.json"

const Hero = () => {
  return (
    <div className="h-screen p-24 block bg-slate-600">
      <h1 className="flex-row text-white text-3xl font-mono w-full pb-8">
        Hi, I'm
      </h1>
      <h2 className="flex-row text-amber-400 text-6xl pb-20">Jack Wolfe</h2>
      <div className="flex snap-x...">
        <div className="snap-center">
          <img
            src="https://images.unsplash.com/photo-1604999565976-8913ad2ddb7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80"
            alt=""
          />
        </div>
        <div className="snap-center">
          <img
            src="https://images.unsplash.com/photo-1604999565976-8913ad2ddb7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80"
            alt=""
          />
        </div>
        <div className="snap-center">
          <img
            src="https://images.unsplash.com/photo-1604999565976-8913ad2ddb7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80"
            alt=""
          />
        </div>
      </div>
      <Lottie loop animationData={lottieJson} play />
    </div>
  )
}

export default Hero
