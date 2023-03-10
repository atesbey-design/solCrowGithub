import { useState, useEffect } from "react";
import { donateToCampaign, getAllCampaigns, withdraw } from "../solana";

import { Keypair } from "@solana/web3.js";

const Card = ({ data, setCards }) => {
  const [amount, setAmount] = useState(0);
  const onDonate = async (e) => {
    e.preventDefault();
    await donateToCampaign(data.id, amount);
    let newCards = await getAllCampaigns();
    setCards(newCards);
  };
  const onWithdraw = async (e) => {
    e.preventDefault();
    try {
      await withdraw(data.id, amount);
      alert("Withdraw successful!");
    } catch (e) {
      console.log(e);
      alert("only admin can withdraw");
    }
    let newCards = await getAllCampaigns();
    setCards(newCards);
  };

  const [sliceKey, setSliceKey] = useState();
  const [adminArray, setAdminArray] = useState([]);
  const keySlice = (key) => {
    return key.slice(0, 5) + "..." + key.slice(-5);
  };
  useEffect(() => {
    getAllCampaigns().then((val) => {
      setCards(val);

      let accountFromSeed = Keypair.fromSeed(val[0].admin);

      setSliceKey(keySlice(accountFromSeed.publicKey.toBase58()));

      val.forEach((e, index) => {
        let accountFromSeed = Keypair.fromSeed(e.admin);
        adminArray.push({
          admin: accountFromSeed.publicKey.toBase58(),
          index: index,
        });
        setAdminArray(() => adminArray);
      });
    });
  }, [setCards, adminArray]);

  console.log("admin", adminArray);
  return (
    <div
      className="ui card"
      style={{
        margin: "6px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="image">
        <img src={data.image} alt="take" />
      </div>
      <div
        className="content"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div className="header">{data.title}</div>
        <div className="meta">
          <span>Raised: </span>
          <span
            style={{
              color: "green",

              fontWeight: "bold",
            }}
          >
            {data.amount}
          </span>
        </div>
        <div className="description">{data.description}</div>
      </div>
      <div className="extra content">
        <form
          className="ui form"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <div className="field">
            <label>Donate:</label>
            <input
              type="text"
              name="amount"
              placeholder="Fund amount"
              style={{
                backgroundColor: "#F8F1FF",
              }}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
          <button
            className="ui button"
            type="submit"
            onClick={(e) => onDonate(e)}
            style={{
              backgroundColor: "#985ACE",
              color: "white",
            }}
          >
            Donate
          </button>
        </form>
        <div className="ui divider"></div>
        <div className="meta">
          <span>Admin: {sliceKey}</span>
        </div>

        <form
          className="ui form"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <div className="field">
            <label>Withdraw:</label>
            <input
              type="text"
              name="amount"
              placeholder="Fund amount"
              style={{
                backgroundColor: "#F8F1FF",
              }}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
          <button
            className="ui button"
            type="submit"
            onClick={(e) => onWithdraw(e)}
            style={{
              backgroundColor: "#985ACE",
              color: "white",
            }}
          >
            Withdraw
          </button>
        </form>
      </div>
    </div>
  );
};

export default Card;
