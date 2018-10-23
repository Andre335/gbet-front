import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';

class LiveItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <ListItem className="live-item">
                <Card className="live-card">
                    <CardActionArea>
                        <CardMedia
                            className="live-media"
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h3">
                                {this.props.live.title}
                            </Typography>
                            <Typography variant="h5">
                                {this.props.live.description}
                            </Typography>
                            <Typography component="p">
                                By Who: {this.props.live.owner}
                            </Typography>
                            <Typography component="p">
                                When: {this.props.live.date}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            Bet
                        </Button>
                    </CardActions>
                </Card>
            </ListItem>
        )
    }
}

export default LiveItem;