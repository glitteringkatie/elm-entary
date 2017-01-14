// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fit,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import custom component
import Interactive from "../assets/interactive";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  city: require("../assets/city.jpg"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png"),
  elm: require("../assets/elm-lang.png"),
  infomercial: require("../assets/infomercial.gif"),
  loveAndSupport: require("../assets/love_and_support.jpg"),
  performance: require("../assets/performance.png"),
  george: require("../assets/george.gif"),
};

preloader(images);

const theme = createTheme({
  primary: "#60b4cc",
  elmBlue: "#60b4cc",
  elmGreen: "#7ed13b",
  elmGrey: "#5b637a",
  elmOrange: "#f0ac01",
  elmDarkGrey: "#34495e"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500}>
          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={2} fit caps lineHeight={1} textColor="black">
              Elm-entary, my dear Watson
            </Heading>
            <Heading size={1} fit caps>
              An intro to Elm
            </Heading>
            <Link href="https://github.com/hugheskatie/intro-to-elm">
              <Text textSize="1em" textColor="elmDarkGrey">View on Github</Text>
            </Link>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary" notes="You can even put notes on your slide. How awesome is that?">
            <Heading fit>Entry Level Mathematics</Heading>
            <Heading fit>Simple and user friendly</Heading>
            <Heading fit lineHeight={1.3}>Nice for React/Redux developers!</Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="white" notes="You can even put notes on your slide. How awesome is that?">
            <Heading size={2} caps textColor="primary" textFont="primary">
              Get Good
            </Heading>
            <Layout>
              <Fill>
                <Image width="100%" src={images.loveAndSupport} padding={20}/>
              </Fill>
              <Fill>
                <List
                  style={{
                    "list-style-position": "outside",
                    margin: "1.65em"
                  }}
                  textSize=".65em"
                >
                  <ListItem>Purely functional</ListItem>
                  <ListItem>Strong & static typing</ListItem>
                  <ListItem>Compiler is nice</ListItem>
                  <ListItem>The CLI is also very nice</ListItem>
                  <ListItem>Null is not a thing: Nothing or (Just Bust)</ListItem>
                  <ListItem>Pretty good performance</ListItem>
                </List>
              </Fill>
            </Layout>
          </Slide>
          <Slide transition={["slide"]} bgColor="white" notes="You can even put notes on your slide. How awesome is that?">
            <Link href="https://evancz.github.io/react-angular-ember-elm-performance-comparison/">
              <Image height="50vh" src={images.performance}/>
            </Link>
            <Image height="30vh" src={images.george}/>
          </Slide>
          <Slide transition={["slide"]} bgColor="white" notes="You can even put notes on your slide. How awesome is that?">
            <Heading size={2} caps fit textColor="primary" textFont="primary">
              My Experience
            </Heading>
            <List textColor="elmGrey">
              <ListItem>Yes</ListItem>
            </List>
          </Slide>
          <Slide transition={["slide"]} bgColor="white" notes="You can even put notes on your slide. How awesome is that?">
            <CodePane
              lang="jsx"
              textSize=".75em"
              source={`
  var Elm = require('dist/elm/app.js');
  var node = document.getElementById('elm-app');
  var app = Elm.App.embed(node);
              `}
              margin="20px auto"
            />
            <Heading size={2} caps fit textColor="elmGreen" textFont="primary">
              Using with JavaScript
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="white" notes="You can even put notes on your slide. How awesome is that?">
            <Heading size={2} caps fit textColor="elmOrange" textFont="primary">
              Using with React
            </Heading>
            <CodePane
              lang="jsx"
              textSize=".75em"
              source={`
  import Elm from 'react-elm-components';
  import { App } from '../dist/elm/app.js';

  function render() {
    return <Elm src={App} />;
  }
              `}
              margin="20px auto"
            />
          </Slide>
          <Slide transition={["slide"]} bgColor="primary" notes="You can even put notes on your slide. How awesome is that?">
            <Heading size={2} caps textColor="white" textFont="primary">
              Tell me more!
            </Heading>
            <Text textSize="3em">Join #elm-lang</Text>
              <Link href="http://elm-lang.org/">
                <Text textSize="3em" textColor="elmDarkGrey">elm-lang.org</Text>
              </Link>
            <Link href="https://www.elm-tutorial.org/">
              <Text textSize="3em" textColor="elmDarkGrey">elm-tutorial.org</Text>
            </Link>
          </Slide>

          <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
            <CodePane
              lang="jsx"
              source={require("raw!../assets/deck.example")}
              margin="20px auto"
            />
          </Slide>
          <Slide transition={["slide"]} bgImage={images.city.replace("/", "")} bgDarken={0.75}>
            <Appear fid="1">
              <Heading size={1} caps fit textColor="primary">
                Full Width
              </Heading>
            </Appear>
            <Appear fid="2">
              <Heading size={1} caps fit textColor="tertiary">
                Adjustable Darkness
              </Heading>
            </Appear>
            <Appear fid="3">
              <Heading size={1} caps fit textColor="primary">
                Background Imagery
              </Heading>
            </Appear>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary">
            <Heading caps fit>Flexible Layouts</Heading>
            <Layout>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                  Left
                </Heading>
              </Fill>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                  Right
                </Heading>
              </Fill>
            </Layout>
          </Slide>
          <Slide transition={["slide"]} bgColor="black">
            <BlockQuote>
              <Quote>Wonderfully formatted quotes</Quote>
              <Cite>Ken Wheeler</Cite>
            </BlockQuote>
          </Slide>
          <Slide transition={["spin", "zoom"]} bgColor="tertiary">
            <Heading caps fit size={1} textColor="primary">
              Inline Markdown
            </Heading>
            <Markdown>
              {`
![Markdown Logo](${images.markdown.replace("/", "")})

You can write inline images, [Markdown Links](http://commonmark.org), paragraph text and most other markdown syntax
* Lists too!
* With ~~strikethrough~~ and _italic_
* And lets not forget **bold**
              `}
            </Markdown>
          </Slide>
          <Slide transition={["slide", "spin"]} bgColor="primary">
            <Heading caps fit size={1} textColor="tertiary">
              Smooth
            </Heading>
            <Heading caps fit size={1} textColor="secondary">
              Combinable Transitions
            </Heading>
          </Slide>
          <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
            <List>
              <Appear><ListItem>Inline style based theme system</ListItem></Appear>
              <Appear><ListItem>Autofit text</ListItem></Appear>
              <Appear><ListItem>Flexbox layout system</ListItem></Appear>
              <Appear><ListItem>React-Router navigation</ListItem></Appear>
              <Appear><ListItem>PDF export</ListItem></Appear>
              <Appear><ListItem>And...</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} caps fit textColor="tertiary">
              Your presentations are interactive
            </Heading>
            <Interactive/>
          </Slide>
          <Slide transition={["spin", "slide"]} bgColor="tertiary">
            <Heading size={1} caps fit lineHeight={1.5} textColor="primary">
              Made with love in Seattle by
            </Heading>
            <Link href="http://www.formidablelabs.com"><Image width="100%" src={images.logo}/></Link>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
