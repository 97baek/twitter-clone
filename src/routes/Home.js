import React, { useState } from "react";
import { dbService } from "fbase";

const Home = () => {
  console.log(dbService);
  const [tweet, setTweet] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    dbService.collection("tweets").add({
      tweet,
      createdAt: new Date(),
    });
    setTweet("");
  };

  const onChange = (e) => {
    setTweet(e.target.value);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          name="tweet"
          value={tweet}
          onChange={onChange}
          type="text"
          placeholder="What's on your mind?"
          maxLength={120}
        />
        <input type="submit" value="Tweet" />
      </form>
    </div>
  );
};

export default Home;
