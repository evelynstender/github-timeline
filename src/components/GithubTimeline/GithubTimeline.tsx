import React from "react";

import Emoji from "react-emoji-render";

import { format } from "date-fns";

import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  Alert,
  AlertTitle,
} from "@material-ui/lab";
import GitHubIcon from "@material-ui/icons/GitHub";

import {
  Typography,
  Paper,
  Link,
  Box,
  CircularProgress,
} from "@material-ui/core";

import { GithubRepo } from "../../interfaces";
import { ClassNameMap } from "@material-ui/styles";

import { useStyles } from "../../styles";

import AppStore from "../../store";

const truncateDescription = (description: string): string => {
  if (description.length > 146) return description.slice(0, 147) + "...";

  return description;
};

const formatDate = (dateToFormat: string): string => {
  const date = new Date(dateToFormat);
  return format(date, "dd MMM yyyy");
};

const isLastRepo = (index: number, reposLength: number) => {
  return reposLength - 1 !== index;
};

const buildTimelineItem = (
  { name, description, createdAt, url }: GithubRepo,
  index: number,
  reposLength: number,
  classes: ClassNameMap<"paper" | "typography" | "timelineContent">
) => {
  return (
    <TimelineItem key={index}>
      <TimelineSeparator>
        <TimelineDot variant="outlined" color="primary">
          <GitHubIcon color="primary" />
        </TimelineDot>
        {isLastRepo(index, reposLength) && <TimelineConnector />}
      </TimelineSeparator>
      <TimelineContent className={classes.timelineContent}>
        <Paper
          onClick={() => {
            window.open(url, "_blank");
          }}
          elevation={2}
          className={classes.paper}
        >
          <Typography align="center" color="primary" variant="h5">
            {name}
          </Typography>
          <Typography variant="body1" className={classes.typography}>
            <Emoji options={{}} text={truncateDescription(description)} />
          </Typography>
          {""}
          <Typography variant="caption">
            {"Created at: " + formatDate(createdAt)}
          </Typography>
        </Paper>
      </TimelineContent>
    </TimelineItem>
  );
};

const errorComponent = (username: string) => {
  return (
    <Alert variant="filled" severity="error">
      <AlertTitle>Error</AlertTitle>
      Could not get repositories from <strong>{username}</strong>. Are you sure
      this user exists?
    </Alert>
  );
};

const loadingComponent = (classes: ClassNameMap<"loading">) => {
  return (
    <Box component="div" className={classes.loading}>
      <CircularProgress />
    </Box>
  );
};

const timelineComponent = (
  repos: GithubRepo[],
  username: string,
  classes: ClassNameMap<"paper" | "typography" | "timelineContent" | "username">
) => {
  return (
    <>
      <Typography variant="h5" align="center">
        Repositories from{" "}
        <Link
          href={`https://github.com/${username}`}
          className={classes.username}
          target="_blank"
          rel="noreferrer"
        >
          {username}
        </Link>
      </Typography>

      <Timeline align="alternate">
        {repos.map((repo, index) => {
          return buildTimelineItem(repo, index, repos.length, classes);
        })}
      </Timeline>
    </>
  );
};

const GithubTimeline = () => {
  const classes = useStyles();

  const { username, repos, isLoading, error } = React.useContext(AppStore);

  let content = <></>;

  if (error) {
    content = errorComponent(username);
  } else {
    if (isLoading === true) {
      content = loadingComponent(classes);
    }
    if (isLoading === false) {
      content = timelineComponent(repos, username, classes);
    }
  }

  return (
    <Box component="div" className={classes.timelineWrapper}>
      {content}
    </Box>
  );
};

export default GithubTimeline;
