// Imports
import Link from "next/link"; // Local routing
import Image from "next/image";
import Layout from "@components/Layout"; // Layout wrapper
import { contractAddress, defaultCards } from "@utils/constants"; // Cards to render
import styles from "@styles/pages/Home.module.scss"; // Styles
import CardGame from "../ethereum/cardgame";

// Types
import type { ReactElement } from "react";

export default function Home(): ReactElement {
  // Quicklinks to render
  const quicklinks: Record<string, string>[] = [
    { name: "OpenSea", url: "https://opensea.io/collection/cardgameproject" },
    {
      name: "Twitter",
      url: "https://twitter.com/cardgameproject",
    },
    {
      name: "Discord",
      url: "https://discord.gg/sRt4Hxjs"
    },
    {
      name: "Contract",
      url: `https://etherscan.io/address/${contractAddress}`,
    },
  ];

  /**
   * Selects 3 random bags from defaultBags
   * @returns {Record<string, string>[]} randomized bags
   */
  const getRandomThreeCards = () => {
    const shuffled = defaultCards.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 3);
  };

  const cardGame = new CardGame(contractAddress);

  return (
    <Layout>
      <div>
        <div className={styles.home__cta}>
          {/* CTA title */}
          <h1>Card Game</h1>

          {/* Quicklinks */}
          <ul>
            {quicklinks.map(({ name, url }, i) => {
              return (
                <li key={i}>
                  {url.startsWith("/") ? (
                    // If link to local page use Link
                    <Link href={url}>
                      <a>{name}</a>
                    </Link>
                  ) : (
                    // Else, redirect in new tab
                    <a href={url} target="_blank" rel="noopener noreferrer">
                      {name}
                    </a>
                  )}
                </li>
              );
            })}
          </ul>

          {/* CTA Description */}
          <p>
            Randomized cards generated and stored on chain <br />
            Gameplay, images, and other functionality are intentionally omitted for others to interpret.<br /> 
            Feel free to use Card Game in any way you want.
          </p>

          <div className={styles.home__mintbuttons}>
            <button onClick={() => cardGame.mint(1)}>Mint Card</button>
            <button onClick={() => cardGame.mint(15)}>Mint 15 Cards</button>
          </div>
        </div>

        {/* Rendering sample cards */}
        <div className={styles.home__feature}>
          <span>Example Cards:</span>
          {getRandomThreeCards().map(({ id, image }, i) => (
            // For each card , render item and link to OpenSea
            <a
              href={`https://opensea.io/assets/${contractAddress}/${id}`}
              target="_blank"
              rel="noopener noreferrer"
              key={i}
              className={styles.home__bag}
            >
              <Image src={image} alt={`Card #${id}`} className="card" width="300px" height="400px" />
            </a>
          ))}
        </div>
      </div>
    </Layout>
  );
}
