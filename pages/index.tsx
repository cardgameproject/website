// Imports
import Link from "next/link"; // Local routing
import Layout from "@components/Layout"; // Layout wrapper
import { defaultCards } from "@utils/constants"; // Cards to render
import styles from "@styles/pages/Home.module.scss"; // Styles

// Types
import type { ReactElement } from "react";

export default function Home(): ReactElement {
  const contractAddress = "";
  // Quicklinks to render
  const quicklinks: Record<string, string>[] = [
    { name: "OpenSea", url: "https://opensea.io/collection/cardgameproject" },
    {
      name: "Twitter",
      url: "https://twitter.com/cardgameproject",
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
            Feel free to use card game in any way you want.
          </p>
        </div>

        {/* Rendering sample cards */}
        <div className={styles.home__feature}>
          <span>Example Cards:</span>
          {getRandomThreeCards().map(({ id, attributes }, i) => (
            // For each card , render item and link to OpenSea
            <a
              href={`https://opensea.io/assets/${contractAddress}/${id}`}
              target="_blank"
              rel="noopener noreferrer"
              key={i}
              className={styles.home__bag}
            >
              <div className={styles.home__bag_attributes}>
                <span>#{id}</span>
                <ul>
                  {attributes.map((attribute, i) => (
                    <li key={i}>
                      <span>{attribute}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </a>
          ))}
        </div>
      </div>
    </Layout>
  );
}
