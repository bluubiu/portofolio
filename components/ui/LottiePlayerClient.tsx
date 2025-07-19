"use client";

import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";

const LottiePlayerClient = React.forwardRef<any, any>((props, ref) => (
  <Player ref={ref} {...props} />
));
LottiePlayerClient.displayName = "LottiePlayerClient";

export default LottiePlayerClient;
