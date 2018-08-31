import React, { Fragment } from 'react';
import ScriptSteps from './ScriptSteps';
import { Card, CardTitle, CardText, Container, Row, Col} from 'reactstrap';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import CardHeader from 'reactstrap/lib/CardHeader';
import CardBody from 'reactstrap/lib/CardBody';
// import Button from 'reactstrap/lib/Button';
import Button from '@material-ui/core/Button';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import '../styles/base/_settings.scss';


const ContentBody = () => (

  
    <div className="container-fluid">
    <Fragment>
        <Container>

            <Col>
            <Paper className='script-steps-card'>
                    <CardHeader>Script Steps</CardHeader>
                    <ScriptSteps />
                </Paper> 
            </Col>
                
            <Col>
                <Paper className="paper-container">

                    <Card className="content-body">
                        <CardBody >
                            <Typography component="p">
                            " Sedut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
                            </Typography>
                            <Typography component="p">
                            " Sedut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
                            </Typography>
                        </CardBody>
                    </Card>
                                
                    <Button variant="fab" className="body-card-button-pass" >Pass</Button>
                    <Button variant="fab" className="body-card-button-fail">Fail</Button>

                </Paper>
            </Col>
            
        </Container>
    </Fragment>

    </div>

);

export default ContentBody;