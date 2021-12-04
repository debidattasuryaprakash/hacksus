import Head from "next/head";
import { Button, Card } from "semantic-ui-react";
import StoryContainer from "../components/Container";
import StoryHeader from "../components/Header";
import Link from "next/link";
import { auth } from "../services/auth";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    if (auth.currentUser) {
      setCurrentUser(auth.currentUser);
    }
  }, []);
  return (
    <div>
      <Head>
        <title>stories</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <StoryHeader currentUser={currentUser} setCurrentUser={setCurrentUser} />
      {currentUser && (
        <Card.Group centered>
          <Link href="/post-story" passHref>
            <Button color="black">Post your Story</Button>
          </Link>
        </Card.Group>
      )}
      <StoryContainer />
    </div>
  );
}