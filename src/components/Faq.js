import React, { useState} from 'react'

// Material ui imports
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

// React transition imports
import Slide from 'react-reveal/Slide';

import '../styles/Faq.css'

const Faq = () => {

    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };
    
    return (
        <>
        <div className='faq'>
        <Slide right>
        <h2>FAQs</h2>
      </Slide>
        <div className='faq-container'>
        <ExpansionPanel
          expanded={expanded === `panel1`}
          onChange={handleChange(`panel1`)}
          id="expansion-events-panel-container"
        >
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel1bh-content`}
            id={`panel1bh-content`}
          >
            <Typography>
              <h5>How will communication work since the Hackathon is virtual?</h5>
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails id="expansion-events-panel">
   <p>We will be using Slack and Zoom as our main communication tool. Once you have been accepted we will add you to our slack chat, and provide you with all the necessary Zoom call links!</p>
            <br />
            <div id="expansion-button-container"></div>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel
          expanded={expanded === `panel2`}
          onChange={handleChange(`panel2`)}
          id="expansion-events-panel-container"
        >
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel1bh-content`}
            id={`panel1bh-content`}
          >
            <Typography>
              <h5>How will judging work?</h5>
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails id="expansion-events-panel">
   <p>We will be putting each team in a Zoom call with a judge! Then you can share your screen and show off what you built! More on this soon!</p>
            <br />
            <div id="expansion-button-container"></div>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel
          expanded={expanded === `panel3`}
          onChange={handleChange(`panel3`)}
          id="expansion-events-panel-container"
        >
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel1bh-content`}
            id={`panel1bh-content`}
          >
            <Typography>
              <h5>Who can participate?</h5>
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails id="expansion-events-panel">
   <p>Anyone with any skill level is eligible to apply for OakHacks!</p>
            <br />
            <div id="expansion-button-container"></div>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel
          expanded={expanded === `panel4`}
          onChange={handleChange(`panel4`)}
          id="expansion-events-panel-container"
        >
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel1bh-content`}
            id={`panel1bh-content`}
          >
            <Typography>
              <h5>What if I have never attended a hackathon?</h5>
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails id="expansion-events-panel">
   <p>Don’t worry, our hackathon is beginner-friendly! We have workshops from industry leaders that you can attend to learn! In addition, we will have mentors that will help you along the way!</p>
            <br />
            <div id="expansion-button-container"></div>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel
          expanded={expanded === `panel5`}
          onChange={handleChange(`panel5`)}
          id="expansion-events-panel-container"
        >
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel1bh-content`}
            id={`panel1bh-content`}
          >
            <Typography>
              <h5>Does OakHacks cost any money to attend?</h5>
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails id="expansion-events-panel">
   <p>Nope! Thanks to our awesome sponsors, attending OakHacks is free of charge!</p>
            <br />
            <div id="expansion-button-container"></div>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel
          expanded={expanded === `panel6`}
          onChange={handleChange(`panel6`)}
          id="expansion-events-panel-container"
        >
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel1bh-content`}
            id={`panel1bh-content`}
          >
            <Typography>
              <h5>How big can my team be?</h5>
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails id="expansion-events-panel">
   <p>Teams can include a max of 4 people!</p>
            <br />
            <div id="expansion-button-container"></div>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel
          expanded={expanded === `panel7`}
          onChange={handleChange(`panel7`)}
          id="expansion-events-panel-container"
        >
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel1bh-content`}
            id={`panel1bh-content`}
          >
            <Typography>
              <h5>How do I apply to be a part of the hackathon?</h5>
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails id="expansion-events-panel">
   <p>Easy! Scroll up to the apply section, click apply now and fill out the typeform</p>
            <br />
            <div id="expansion-button-container"></div>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel
          expanded={expanded === `panel8`}
          onChange={handleChange(`panel8`)}
          id="expansion-events-panel-container"
        >
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel1bh-content`}
            id={`panel1bh-content`}
          >
            <Typography>
              <h5>I don’t have a team, what do I do?</h5>
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails id="expansion-events-panel">
   <p>Don’t worry, once accepted, we will be adding you to our Slack group, where you can meet people and form teams!</p>
            <br />
            <div id="expansion-button-container"></div>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel
          expanded={expanded === `panel9`}
          onChange={handleChange(`panel9`)}
          id="expansion-events-panel-container"
        >
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel1bh-content`}
            id={`panel1bh-content`}
          >
            <Typography>
              <h5>When does the event start? And when does the hacking session start?</h5>
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails id="expansion-events-panel">
   <p>The hackathon starts at 10:00 am on September the 12th. Opening ceremonies will be an hour long. The hacking begins at 11:00 am</p>
            <br />
            <div id="expansion-button-container"></div>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel
          expanded={expanded === `panel10`}
          onChange={handleChange(`panel10`)}
          id="expansion-events-panel-container"
        >
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel1bh-content`}
            id={`panel1bh-content`}
          >
            <Typography>
              <h5>Can I invite people outside of the Halton region?</h5>
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails id="expansion-events-panel">
   <p>100% yes! Since it's virtual, anyone is eligible to apply!</p>
            <br />
            <div id="expansion-button-container"></div>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        </div>
        {/* End events display panel */}
        </div>
      </>
    )
}

export default Faq;
