import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import BetProgressBar from './BetProgressBar';
import '../css/LiveList.css';

class LiveItem extends Component {
    constructor(props) {
        super(props);
        this.getBetsInFavor = this.getBetsInFavor.bind(this);
        this.state = {
            bets_in_favor: this.getBetsInFavor(this.props.live.bets)
        };
    }

    getBetsInFavor(bets) {
        var count = 0;
        for(var i = 0; i < bets.length; i++) {
            if (bets[i].in_favor) {
                count++;
            }
        }
        return count;      
    } 

    render() {
        return(
            <ListItem className="live-item">
                <Card className="live-card">
                    <CardActionArea>
                        <CardContent>
                            <Typography gutterBottom variant="h3" component="h2">
                                {this.props.live.title}
                            </Typography>
                            <Typography variant="h5">
                                {this.props.live.description}
                            </Typography>
                            <BetProgressBar bets_total={this.props.live.bets.length} 
                                            bets_in_favor={this.state.bets_in_favor}/>
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