import { useEffect, useState } from "react";

import styles from "../styles/Home.module.css";

import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import ShareLocationIcon from "@mui/icons-material/ShareLocation";

import Icons from "../components/icons";

import Lottie from "react-lottie";
import animationData from "../public/lottie/36622-sunny-rainy.json";

export default function Home() {
  const [search, setSearch] = useState("");
  const [values, setValues] = useState("");
  const [icon, setIcons] = useState("");

  const ID = "527f55ad48d1aba08f562b838215d912";

  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&lang=pt_br&appid=${ID}`;

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const getData = async () => {
    await fetch(URL)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data.cod >= 400) {
          setValues(false);
        } else {
          setIcons(data.weather[0].main);
          setValues(data);
          console.log("xsxsxs", data);
        }
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      setSearch(e.target.value);
    }
  };

  useEffect(() => {
    getData();
  }, [search]);

  return (
    <div className={styles.container}>
      <div className={styles.lottie}>
        <Lottie options={defaultOptions} height={400} width={400} />
      </div>
      <h1>Veja aqui como esta o clima da sua cidade.</h1>
      <div className={styles.search}>
        <TextField
          id="outlined-basic"
          label="Buscar por Cidade"
          variant="outlined"
          autoFocus
          helperText="Pesquise por uma cidade e aperte ENTER"
          onKeyDown={handleSearch}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <ShareLocationIcon />
              </InputAdornment>
            ),
          }}
        />
      </div>

      <div>
        {values ? (
          <main>
            <div className={styles.card}>
              <h3>{values.name}</h3>
              <p>{values.main.temp.toFixed(0)}&deg;</p>
              <img src={Icons(icon)} alt="icon-weather" />
              <div>
                <p>
                  min {values.main.temp_min.toFixed(0)}&deg; | m??x{" "}
                  {values.main.temp_max.toFixed(0)}&deg;
                </p>
              </div>
              <div>
                {values.weather.map((e) => {
                  return <p>{e.description}</p>;
                })}
              </div>
            </div>
          </main>
        ) : (
          <div>
            <h3> Cidade n??o encontrada ... </h3>
          </div>
        )}
      </div>
    </div>
  );
}
