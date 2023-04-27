import * as React from "react"
import Box from "@mui/material/Box"
import Divider from "@mui/material/Divider"
import ThumbUpIcon from "@mui/icons-material/ThumbUp"
import CommentIcon from "@mui/icons-material/Comment"
import PersonIcon from "@mui/icons-material/Person"
import WatchLaterIcon from "@mui/icons-material/WatchLater"
import TimeAgo from "javascript-time-ago"
import en from "javascript-time-ago/locale/en"

export default function ListArticles(props) {
  if (!props?.data.title) {
    return null
  }

  TimeAgo.addDefaultLocale(en)
  const timeAgo = new TimeAgo("en-US")

  const created = new Date(props?.data.created_at)

  return (
    <div className="article-info" key={props?.data.ObjectID}>
      <h4>
        {props?.data.title} :&nbsp;
        {props?.data.url && (
          <a className="link" href={props.data.url}>
            {props.data.url}
          </a>
        )}
      </h4>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          width: "fit-content",
          borderRadius: 1,
          bgcolor: "3D3C42",
          color: "#FEFBF6",
          "& svg": {
            m: 1.5,
          },
          "& hr": {
            mx: 0.5,
          },
        }}
      >
        <ThumbUpIcon sx={{ fontSize: 15 }} />
        <p>{props?.data.points} &nbsp;</p>
        <Divider orientation="vertical" variant="middle" flexItem />
        <CommentIcon sx={{ fontSize: 17 }} />
        <p>{props?.data.num_comments} &nbsp;</p>
        <Divider orientation="vertical" variant="middle" flexItem />
        <PersonIcon sx={{ fontSize: 19 }} />
        <p>{props?.data.author} &nbsp;</p>
        <Divider orientation="vertical" variant="middle" flexItem />
        <WatchLaterIcon sx={{ fontSize: 17 }} />
        {/* <p>{props?.data.created_at} </p> */}
        <p>{timeAgo.format(created - 2 * 60 * 60 * 1000)} </p>
      </Box>
    </div>
  )
}
