import React from "react";
import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import "@leenguyen/react-flip-clock-countdown/dist/index.css";
import { DarkLogo } from "../assets/logos/Logo";
import classes from "./Launching.module.css";

const Launching = () => {
  return (
    <>
      <section className={classes.page}>
        <div className={classes.overlay}></div>

        <div className={classes.page_content}>
          <DarkLogo width="300px" />
          <h3 className={classes.h3}>
            Explore the animated universe with AnimHub. 🚀
          </h3>
          <FlipClockCountdown
            className={classes.flip_clock}
            to={
              new Date("2023-09-26T12:00:00").getTime() +
              10 * 24 * 3600 * 1000 +
              5000
            }
            labels={["DAYS", "HOURS", "MINUTES", "SECONDS"]}
            labelStyle={{
              fontSize: 10,
              fontWeight: 500,
              textTransform: "uppercase",
            }}
            // digitBlockStyle={{ width: 100, height: 100, fontSize: 30 }}
            dividerStyle={{ color: "black", height: 2 }}
            separatorStyle={{ color: "#FFA31A", size: "6px" }}
            duration={0.5}
          />
        </div>
      </section>
    </>
  );
};

export default Launching;
