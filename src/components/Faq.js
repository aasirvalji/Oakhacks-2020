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
              <h3>Your squads plans</h3>
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails id="expansion-events-panel">
   <p>yeet</p>
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
              <h3>Your squads plans</h3>
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails id="expansion-events-panel">
   <p>yeet</p>
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
