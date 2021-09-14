// Imports
import Link from "next/link"; // Routing
import Layout from "@components/Layout"; // Layout wrapper
import styles from "@styles/pages/FAQ.module.scss"; // Page styles

// Types
import type { ReactElement } from "react";

// FAQ page
export default function FAQ(): ReactElement {
  return (
    <Layout>
      <div className={styles.faq}>
        <h2>Frequently Asked Questions</h2>

        {/* What is card game ? */}
        <div className={styles.faq__item}>
          <h3>What is Card Game?</h3>
          <p>
            Card Game is a collection of 44,444 unique trading cards.
            originally released by{" "}
            <a
              href="https://twitter.com/adecentworld"
              target="_blank"
              rel="noopener noreferrer"
            >
              Tom Decent
            </a>
            . Each card has:
            <ul>
              <li>Name</li>
              <li>A card type - creature, item, spell, or place</li>
              <li>4 different stat numbers, in each of the 4 corners of the card</li>
              <li>Up to 4 different abilites. There are 4 possible abilities for each card type.</li>

            </ul>
          </p>
          <p>
            Card Game is an unaudited project. All cards are claimable by anyone.
          </p>
        </div>

        {/* Why is card game special? */}
        <div className={styles.faq__item}>
          <h3>Why is card game special?</h3>
          <p>
            Card game has no company, art, team, or attributes.
            Card Game makes it impossible to gate-keep any creative decisions.
          </p>
        </div>

        {/* Can I create my own game that uses these cards? */}
        <div className={styles.faq__item}>
          <h3>Can I create my own game that uses these cards?</h3>
          <p>
            Yes, you are free to use Card Game in any way you want. For inspiration,
            see existing{" "}
            <Link href="/resources">
              <a>resources</a>
            </Link>{" "}
            put together by the community.
          </p>
        </div>

        {/* Can I create my set of cards? */}
        <div className={styles.faq__item}>
          <h3>Can I create my own set of cards?</h3>
          <p>
            Yes, the initial Alpha set is to show the concept of this project. 
            You can create your own set with any name and attributes you like. 
            Games can then choose what sets they wish to allow. 
          </p>
        </div>

        {/* Why launch this on Ethereum main chain when gas is so high?*/}
        <div className={styles.faq__item}>
          <h3>Why launch this on Ethereum main chain when gas is so high?</h3>
          <p>
            We are working on being able to bridge Cards to Immutable X and 
            possibly other chains in the future where gas will be much cheaper. 
            If you would like your own set of cards on another chain feel free
            to create them there. 
          </p>
        </div>


      </div>
    </Layout>
  );
}
