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
    <div style={{ padding: "24px", marginBottom: "96px" }}>
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
        since i have lived in san francisco i have filled five books with
        writing, and i return to them to revisit all the feelings and the
        confusions and the dreams. all the transient emotions and first-times
        that have come to me. writing is how i wrangle the inner monologue into
        a story that makes sense. and i'm wondering how other people are
        contextualizing their lives and decisions too. we don't write letters to
        each other like our parents did, and their parents did, and before that
        you just chilled in the village and didn't worry about all this muck.
        how is it that the most context i have for the beautiful people in my
        life is a june photo dump. what a way to live this is.
      </p>
      <br />

      <p className={davidExtralight.className} style={{ fontSize: "28px" }}>
        im interested that we feel more comfortable sharing pictures than we do
        our words. i see many beautiful pictures but not many beautiful words
        and maybe i follow the wrong people but maybe the big companies haven't
        given us a nice way to share our words.
      </p>
      <br />

      <p className={davidExtralight.className} style={{ fontSize: "18px" }}>
        i have nearly one thousand follows on instagram at the moment, sixty
        percent of which are probably from a troll farm in pakistan. the next
        thirty five percent are a mixed bag of people from high school P.E.
        class, or someone i thought was cute at a bar, or a guy i met during
        rush freshman year who i dapped up on campus but haven't dapped in
        years. of the remaining 15 people who actually know me and want to
        engage over the long distance, this project is for you.
      </p>
      <br />

      <p className={davidExtralight.className} style={{ fontSize: "18px" }}>
        maybe i am egotistical and actually think someone will read a single
        word but i like to make things and coding this site was fun. i like to
        write too. all photos are ones that i have taken and the code for this
        site can be found on github{" "}
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
