import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, useParams } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import Paper from "@material-ui/core/Paper";
import HomeIcon from "@material-ui/icons/Home";
import InfoIcon from "@material-ui/icons/Info";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import CloseIcon from "@material-ui/icons/Close";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import {
  red,
  pink,
  purple,
  deepPurple,
  indigo,
  blue,
  lightBlue,
  cyan,
  teal,
  green,
  lightGreen,
  lime,
  yellow,
  amber,
  orange,
  deepOrange,
  brown,
  grey,
  blueGrey
} from "@material-ui/core/colors";

import "react-tiger-transition/styles/main.min.css";
import {
  Navigation,
  Route,
  Screen,
  Link,
  scale,
  glideIn,
  glideOut,
  drop,
  flip,
  glide
} from "react-tiger-transition";

// inject styles
scale({
  name: "scale",
  scale: 1.2,
  exit: {
    delay: 100
  }
});
glide({
  name: "glide-left",
  direction: "left",
  opacity: 0.3
});
glide({
  name: "glide-right",
  direction: "right",
  opacity: 0.3
});
glideIn({
  name: "glideIn-left",
  direction: "left"
});
glideIn({
  name: "glideIn-top",
  direction: "top"
});
glideOut({
  name: "glideOut-bottom",
  direction: "bottom"
});
glideOut({
  name: "glideOut-right",
  direction: "right"
});
flip({
  name: "flip-right",
  direction: "right",
  duration: 200
});
flip({
  name: "flip-left",
  direction: "left",
  duration: 200
});

const colors = [
  { color: lime[500], name: "lime", id: 0 },
  { color: red[500], name: "red", id: 1 },
  { color: blue[500], name: "blue", id: 2 },
  { color: purple[500], name: "purple", id: 3 },
  { color: deepOrange[500], name: "deep-orange", id: 4 },
  { color: grey[500], name: "grey", id: 5 },
  { color: indigo[500], name: "indigo", id: 6 },
  { color: pink[500], name: "pink", id: 7 },
  { color: brown[500], name: "brown", id: 8 },
  { color: cyan[500], name: "cyan", id: 9 },
  { color: lightBlue[500], name: "light-blue", id: 10 },
  { color: green[500], name: "green", id: 11 },
  { color: deepPurple[500], name: "deep-purple", id: 12 },
  { color: yellow[500], name: "yellow", id: 13 },
  { color: orange[500], name: "orange", id: 14 },
  { color: amber[500], name: "amber", id: 15 },
  { color: teal[500], name: "teal", id: 16 },
  { color: blueGrey[500], name: "blue-grey", id: 17 },
  { color: lightGreen[500], name: "light-green", id: 18 }
];

const useStyles = makeStyles(theme => ({
  screen: {
    backgroundColor: "white"
  },
  loginScreen: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    backgroundColor: "white"
  },
  margin: {
    margin: theme.spacing(2)
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  menu: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  feedItemRoot: {
    margin: theme.spacing(2)
  },
  cancelAuth: {
    position: "absolute",
    top: 0,
    right: 0,
    margin: theme.spacing(2)
  },
  hide: {
    opacity: 0,
    visibility: "hidden",
    zIndex: -1
  },
  previous: {
     height: `calc(100% - 64px)`,
    position: "absolute",
    width: "50%",
    top: 64,
    left: 0,
    zIndex: 3
  },
  next: {
    height: `calc(100% - 64px)`,
    position: "absolute",
    width: "50%",
    top: 64,
    right: 0,
    zIndex: 3
  },
  code: {
    color: deepOrange[500],
    fontSize: 14,
    fontFamily: "monospace",
    backgroundColor: grey[100],
    borderRadius: 5,
    padding: theme.spacing(0.4, 0.6, 0.4, 0.6)
  }
}));

document.getElementById("root").style.height = "100vh";
document.getElementById("root").style.backgroundColor = "#333";

const App = () => {
  const classes = useStyles();
  const hideInsteadOfUnmount = {
    mountOnEnter: true,
    unmountOnExit: false,
    onExited: node => node.classList.add(classes.hide),
    onEnter: node => node.classList.remove(classes.hide)
  }

  return (
    <Router>
      <Navigation>
        <Route
          exact
          path="/"
          transitionProps={{...hideInsteadOfUnmount}}
        >
          <FeedScreen />
        </Route>

        <Route exact path="/login">
          <LoginScreen />
        </Route>

        <Route exact path="/Register">
          <RegisterScreen />
        </Route>

        <Route exact path="/menu" transitionProps={{...hideInsteadOfUnmount}}>
          <MenuScreen />
        </Route>

        <Route exact path="/about">
          <AboutScreen />
        </Route>

        <Route exact path="/detail/:color">
          <DetailScreen />
        </Route>
      </Navigation>
    </Router>
  );
};

export default App;

// screens

const FeedScreen = () => {
  const classes = useStyles();
  return (
    <Screen className={classes.screen}>
      <SimpleHeader title="Feed" />
      <Toolbar />
      <FeedList />
    </Screen>
  );
};

const AboutScreen = () => {
  const classes = useStyles();
  return (
    <Screen className={classes.screen}>
      <SimpleHeader title="About" />
      <Toolbar />
      <Typography className={classes.margin}>
        This is a simple example of how to use this package, here are some points to notice:
      </Typography>
      <Typography className={classes.margin}>
        1 - The <Code>transitionProps</Code> on the route of the <Code>FeedScreen</Code> ensure that this route don't get unmounted, but at the same time remains hidden when you are on other routes. For example, try deleting the <Code>onEnter</Code> and <Code>onExited</Code> properties and then navigating to <Code>/login</Code> and clincking on the <Code>/register</Code> link.
      </Typography>
      <Typography className={classes.margin}>
        2 - As the <Code>FeedScreen</Code> do not get unmounted, it will keep around and remember scroll position when you open a <Code>/detail/:color</Code> page and come back.
      </Typography>
      <Typography className={classes.margin}>
        3 - The most complex screen is the <Code>DetailScreen</Code>. It has the <Code>display</Code> prop to allow transitioning between routes on the same <Code>path</Code>. Notice how it is rendering 3 routes every time, this is useful because despite we know the lenght of the colors, it is pretending we don't, like a real case where we are fetching the previous and next links every time we are on a different <Code>path</Code>.
      </Typography>
      <Typography className={classes.margin}>
        4 - Unlike if we were defining transitions in the routes, it is very simple to arrive on the same route with different transitions, for example in the <Code>/login</Code> path, you can arrive with 2 different transitions, coming from the paths <Code>/regitser</Code> and <Code>/</Code> or <Code>/about</Code> or <Code>/menu</Code>.
      </Typography>
      <Toolbar />
    </Screen>
  );
};

const LoginScreen = () => {
  const classes = useStyles();
  return (
    <Screen className={classes.loginScreen}>
      <AuthCancel />
      <TextField className={classes.margin} defaultValue="Username or email" />
      <TextField
        className={classes.margin}
        type="password"
        defaultValue="Password"
      />
      <Button
        className={classes.margin}
        color="primary"
        variant="contained"
        component={Link}
        to="/"
        transition="scale"
      >
        Login
      </Button>
      <Typography className={classes.margin}>
        New here?{" "}
        <Link to="/register" transition="flip-left">
          Register
        </Link>
        .
      </Typography>
    </Screen>
  );
};

const RegisterScreen = () => {
  const classes = useStyles();
  return (
    <Screen className={classes.loginScreen}>
      <AuthCancel />
      <TextField className={classes.margin} defaultValue="Username" />
      <TextField className={classes.margin} defaultValue="Email" />
      <TextField
        className={classes.margin}
        type="password"
        defaultValue="Password"
      />
      <TextField
        className={classes.margin}
        type="password"
        defaultValue="Password"
      />
      <Button
        className={classes.margin}
        color="primary"
        variant="contained"
        component={Link}
        to="/"
        transition="scale"
      >
        Register
      </Button>
      <Typography className={classes.margin}>
        Old here?{" "}
        <Link to="/login" transition="flip-right">
          Login
        </Link>
        .
      </Typography>
    </Screen>
  );
};

const MenuScreen = () => {
  const classes = useStyles();
  return (
    <Screen className={classes.screen}>
      <Menu />
    </Screen>
  );
};

const DetailScreen = () => {
  const classes = useStyles();
  const { color } = useParams();
  const [colorObj, setColorObj] = useState({});

  useEffect(() => {
    // need to handle error if there is not color from param
    if (color) {
      const current = colors.filter(c => c.name === color)[0];
      const next = current.id < 18 ? colors[current.id + 1] : colors[0];
      const previous = current.id > 0 ? colors[current.id - 1] : colors[18];
      setColorObj({
        previous,
        current,
        next
      });
    }
  }, [color]);

  const { current, next, previous } = colorObj;

  if (!current) return <div key="fake-key"/>;

  return (
    <Screen>
      <Screen display>
        <Route
          key={current.id}
          exact
          path={`/detail/${current.name}`}
          screen
          screenProps={{
            style: {
              backgroundColor: current.color
            }
          }}
        >
          <DetailHeader color={current.name} />
          <Link to={`/detail/${previous.name}`} transition="glide-right">
            <div className={classes.previous} />
          </Link>
          <Link to={`/detail/${next.name}`} transition="glide-left">
            <div className={classes.next} />
          </Link>
        </Route>

        <Route
          key={next.id}
          exact
          path={`/detail/${next.name}`}
          screen
          screenProps={{
            style: {
              backgroundColor: next.color
            }
          }}
        >
          <DetailHeader color={next.name} />
        </Route>

        <Route
          key={previous.id}
          exact
          path={`/detail/${previous.name}`}
          screen
          screenProps={{
            style: {
              backgroundColor: previous.color
            }
          }}
        >
          <DetailHeader color={previous.name} />
        </Route>
      </Screen>
    </Screen>
  );
};

// components

// copy from
// https://material-ui.com/components/app-bar/#simple-app-bar
const SimpleHeader = ({title}) => {
  const classes = useStyles();
  return (
    <div>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <Link
              to="/menu"
              transition="glideIn-top"
              style={{ color: "white" }}
            >
              <MenuIcon />
            </Link>
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            {title}
          </Typography>
          <Button
            component={Link}
            color="inherit"
            to="/login"
            transition="scale"
          >
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

const DetailHeader = ({ color }) => {
  const classes = useStyles();
  return (
    <div>
      <AppBar position="static" color="default">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <Link to="/" transition="glideOut-right">
              <ArrowBackIcon />
            </Link>
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            {color}
          </Typography>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};

const AuthCancel = () => {
  const classes = useStyles();

  return (
    <Link className={classes.cancelAuth} to="/" transition="scale">
      <CloseIcon />
    </Link>
  );
};

const Menu = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <List component="nav" aria-label="main mailbox folders">
        <ListItem button component={Link} to="/" transition="glideOut-bottom">
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Feed" />
        </ListItem>
        <ListItem
          button
          component={Link}
          to="/about"
          transition="glideOut-bottom"
        >
          <ListItemIcon>
            <InfoIcon />
          </ListItemIcon>
          <ListItemText primary="About" />
        </ListItem>
      </List>
      <Divider />
      <ListItem button component={Link} to="/login" transition="scale">
        <ListItemIcon>
          <ExitToAppIcon />
        </ListItemIcon>
        <ListItemText primary="Login" />
      </ListItem>
    </div>
  );
};

const FeedItem = ({ color }) => {
  const classes = useStyles();
  return (
    <Paper className={classes.feedItemRoot}>
      <Link to={`/detail/${color.name}`} transition="glideIn-left">
        <div
          style={{ backgroundColor: color.color, width: "100%", height: 200 }}
        />
      </Link>
    </Paper>
  );
};

const FeedList = () => {
  return (
    <React.Fragment>
      {colors.map(color => (
        <FeedItem key={color.id} color={color} />
      ))}
    </React.Fragment>
  );
};


const Code = ({children}) => {
  const classes = useStyles();
  return (
    <span className={classes.code}>
      {children}
    </span>
  )
}
