import localFont from "next/font/local";

const davidExtralight = localFont({
  src: "../fonts/david_01_extralight.woff2",
  display: "swap",
});

const exposureFont = localFont({
  src: "../fonts/Exposure.ttf",
  display: "swap",
});

export default function About() {
  return (
    <div
      style={{
        padding: "24px",
        marginBottom: "96px",
        maxWidth: "850px",
        margin: "0 auto",
      }}
    >
      <p
        className={`${exposureFont.className} hover-variable-settings`}
        style={{
          fontSize: "60px",
          fontStyle: "normal",
          fontWeight: "400",
          lineHeight: "90%",
          letterSpacing: "-1.7px",
          color: "#2D46CA",
          paddingBottom: "24px",
        }}
      >
        About
      </p>
      <p className={davidExtralight.className} style={{ fontSize: "18px" }}>
        {`in my five years in the fantasy land of san francisco i haven't done too much. on a typical day i might be walking up the beautiful hills looking at the jumble of buildings, waiting for the world to show me something. sometimes i try to explain what happens in a notebook. future me will find it pleasant to re-read and reconnect with all the transient emotions and first-times and confusing things.  moments that will never be again. as an activity, writing slows me down. a verbal discussion is nice but happens at a pace so much faster and then i forget most of what is said. i like to write about the interesting things people say. it takes a lot of effort and memory to recall the good qualities a person has or things they said. clearly i must sound like someone who has been working remotely for too long and is losing his superior mental facilities.`}
      </p>
      <br />

      <p className={davidExtralight.className} style={{ fontSize: "18px" }}>
        {`we don't write letters to each other like our parents did, and their parents did, and before that you just chilled in the village and didn't worry about all this. how is it that the most context i get for the beautiful people in my life is a june photo dump. the dissonance between being an observer inside of my head, with access to all my thoughts, which are constant and big and changing always. to transition from observing all of that, to looking at what people share on the internet is jarring. there is a shallowness to the internet that is not congruent with how we really are. what a way to live. `}
      </p>
      <br />

      <p className={davidExtralight.className} style={{ fontSize: "28px" }}>
        {`im interested how we feel more comfortable sharing pictures than we do our words. it is a very easy thing to share pictures that make us appear invincible and very impressive. i am finding it much harder to share words that essentially achieve the exact opposite. we haven't been trained for this kind of expression.`}
      </p>
      <br />

      <p className={davidExtralight.className} style={{ fontSize: "18px" }}>
        {`the whole thing is a funny business and unusual. as a result of our culture im connected to hundreds of people online and its an IV drip of pure poison and then there is the consideration of my sanity. of the handful of lovely people in that cesspool who know me and want to engage over the long distance, this project is for you. maybe i am egotistical and think someone will read a single word but i like to make things and coding this site was fun.  i like to write too. all photos are ones that i have taken and the code for this site can be found on github `}
        <a
          href="https://github.com/brandonshearin/personal-website-2"
          target="__blank"
          style={{
            color: "#FA4639",
            textDecoration: "underline",
          }}
        >
          here
        </a>
        .
      </p>
      <br />
    </div>
  );
}
