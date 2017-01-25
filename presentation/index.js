// Import React
import React from "react";

// Import Spectacle Core tags
import {
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  elm: require("../assets/elm-lang.png"),
  performance: require("../assets/performance.png"),
  george: require("../assets/george.gif"),
  loveAndSupport: require("../assets/love_and_support.jpg")
};

preloader(images);

const theme = createTheme({
  primary: "#60b4cc",
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
            <Link href="https://github.com/hugheskatie/elm-entary">
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

          <Slide transition={["slide"]} bgColor="primary" notes="You can even put notes on your slide. How awesome is that?">
            <CodePane
              lang="jsx"
              textSize=".5em"
              source={`ERROR in ./src/Main.elm
Module build failed: Error: Compiler process exited with error Compilation failed
-- NAMING ERROR -------------------------------------- ./src/States/DropDown.elm

Cannot find variable \`lass\`

69|                 [ i [ lass "fa fa-twitter" ] []
                        ^^^^
Maybe you want one of the following?

  class
  abs
  Html.Attributes.class
  Basics.abs`}
              margin="20px auto"
            />
            <Heading size={2} caps fit textColor="white" textFont="primary">
              Your code is bad but you are not
            </Heading>
          </Slide>

          <Slide transition={["slide"]} bgColor="primary" notes="You can even put notes on your slide. How awesome is that?">
          <Heading size={4} caps textColor="white" textFont="primary">
            Gosh darn polite
          </Heading>
            <CodePane
              lang="jsx"
              textSize=".5em"
              source={`To install Bogdanp/elm-combine I would like to add the following
dependency to elm-package.json:

    "Bogdanp/elm-combine": "2.2.1 <= v < 3.0.0"

May I add that to elm-package.json for you? [Y/n] Y

Some new packages are needed. Here is the upgrade plan.

  Install:
    Bogdanp/elm-combine 2.2.1
    elm-lang/lazy 1.0.0

Do you approve of this plan? [Y/n] Y
Starting downloads...

  ● elm-lang/lazy 1.0.0
  ● Bogdanp/elm-combine 2.2.1

Packages configured successfully!`}
              margin="20px auto"
            />
          </Slide>

          <Slide transition={["slide"]} bgColor="primary" notes="You can even put notes on your slide. How awesome is that?">
            <Heading fit>
              Learning Haskell
            </Heading>
            <Heading fit>
              Charming as fuck
            </Heading>
            <Link href="https://see-you-legislator.surge.sh/">
              <Heading fit textColor="elmDarkGrey">
                See You Legislator
              </Heading>
            </Link>
            <Link href="https://github.com/hugheskatie/see-you-legislator">
              <Text textSize="1em" textColor="elmDarkGrey" lineHeight={3}>View on Github</Text>
            </Link>
          </Slide>

          <Slide transition={["slide"]} bgColor="white" notes="You can even put notes on your slide. How awesome is that?">
            <CodePane
              lang="jsx"
              textSize=".75em"
              source={`var Elm = require('dist/elm/app.js');
  var node = document.getElementById('elm-app');
  var app = Elm.App.embed(node);`}
              margin="20px auto"
            />
            <Heading size={2} caps fit textColor="primary" textFont="primary">
              Using with JavaScript
            </Heading>
          </Slide>

          <Slide transition={["slide"]} bgColor="white" notes="You can even put notes on your slide. How awesome is that?">
            <Heading size={2} caps fit textColor="primary" textFont="primary">
              Using with React
            </Heading>
            <CodePane
              lang="jsx"
              textSize=".75em"
              source={`import Elm from 'react-elm-components';
  import { App } from '../dist/elm/app.js';

  function render() {
    return <Elm src={App} />;
  }`}
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
            <Link href="https://github.com/halfzebra/create-elm-app">
              <Text textSize="3em" textColor="elmDarkGrey">create-elm-app</Text>
            </Link>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
