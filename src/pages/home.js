import React, { useEffect, useState } from "react";

import EarthImage from "../earth.png";
import Form from "../components/Form";
import Card from "../components/Card";
import { getAllCampaigns } from "../solana";
import Header from "../components/Header";

const Home = () => {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    getAllCampaigns().then((val) => {
      setCards(val);
    });
  }, []);
  return (
    <div
      style={{
        flexDirection: "column",
        backgroundColor: "#040930",
      }}
    >
      <Header />
      <div
        style={{
          backgroundImage: `url(${EarthImage})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "100vh",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: "rgba(0, 5, 47, 0.88)",
            boxShadow: "20px 20px 10px 0px #040930",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100%",
          }}
        >
          <div>
            <h1
              style={{
                color: "white",
                fontSize: "120px",
                fontWeight: "bold",
                position: "absolute",
                top: "20%",
                left: "16%",
              }}
            >
              DONATE
            </h1>
            <h1
              style={{
                color: "white",
                fontSize: "120px",
                fontWeight: "bold",
                position: "absolute",
                top: "36%",
                left: "40%",
              }}
            >
              FOR
            </h1>
            <h1
              style={{
                fontSize: "120px",
                fontWeight: "bold",
                position: "absolute",
                top: "52%",
                left: "40%",
                background:
                  "linear-gradient(89.95deg, #AA0000 23.35%, rgba(255, 255, 255, 0.5) 96.96%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              EARTHQUAKE
            </h1>
          </div>
        </div>
      </div>

      <div
        style={{
          backgroundColor: "#040930",
          height: "100%",

          alignItems: "center",
          flexDirection: "column",
          display: "flex",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            padding: "20px",
          }}
        >
          <h1
            style={{
              color: "white",
              fontSize: "60px",
              fontWeight: "bold",
              marginTop: "10px",
            }}
          >
            DONATE FOR EARTHQUAKE
          </h1>
        </div>
        <div>
          {
            //Card varsa gösterme formu
            cards.length === 0 ? (
              <div
                style={{
                  display: "flex",
                  height: "80vh",
                }}
              >
                <Form />
              </div>
            ) : (
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "start",
                  width: "100%",
                  flexWrap: "wrap",

                  height: "100vh",
                }}
              >
                {cards.map((e, idx) => (
                  <Card
                    key={e.pubId.toString()}
                    data={{
                      title: e.name,
                      description: e.description,
                      amount: e.amount_donated.toString(),
                      image: e.image_link,
                      id: e.pubId,
                    }}
                    setCards={setCards}
                  />
                ))}
              </div>
            )
          }
        </div>
      </div>
    </div>
  );
};

export default Home;
