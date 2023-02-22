const Icons = (icon) => {
  switch (icon) {
    case "Thunderstorm":
      icon = "icons/thunderstorms-rain.svg";
      console.log("tormento");
      break;
    case "Drizzle":
      icon = "icons/drizzle.svg";
      console.log("drizzle");
      break;
    case "Rain":
      icon = "icons/rain.svg";
      console.log("rain");
      break;
    case "Snow":
      icon = "icons/snow.svg";
      console.log("snow");
      break;
    case "Clear":
      icon = "icons/clear-day.svg";
      console.log("clear");
      break;
    case "Atmosphere":
      icon = "icons/weather.svg";
      console.log("atmosphere");
      break;
    case "Clouds":
      icon = "icons/fog.svg";
      console.log("clouds");
      break;
    case "Fog":
      icon = "icons/fog.svg";
      console.log("fog");
      break;
    case "Haze":
      icon = "icons/haze.svg";
      console.log("haze");
      break;
    case "Smoke":
      icon = "icons/smoke.svg";
      console.log("smoke");
      break;

    default:
        icon = "icons/clear-day.svg";
        console.log("Limpo");
      break;
  }
  return icon
};

export default Icons;
