import React from "react";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Avatar from "@material-ui/core/Avatar";
import CardMedia from "@material-ui/core/CardMedia";
import ShareIcon from "@material-ui/icons/Share";

const CoffeeCard = (props) => {
  const { avatarUrl, imageUrl, title, subtitle, description } = props;

  return (
    <Card>
      <CardHeader
        avatar={<Avatar aria-label='recipe' src={avatarUrl} />}
        action={
          <IconButton aria-label='settings'>
            <ShareIcon />
          </IconButton>
        }
        title={title}
        subheader={subtitle}
      />
      <CardMedia style={{ height: "150px" }} image={imageUrl} />

      <CardContent>
        <Typography variant='body2' component='p'>
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size='small'>Buy Now</Button>
        <Button size='small'>Offer</Button>
      </CardActions>
    </Card>
  );
};
export default CoffeeCard;
