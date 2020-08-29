import React, { Component } from 'react';

import { Portfolio } from './Portfolio/Portfolio';

import { about } from './constants/About';
import { education } from './constants/Education';
import { skills } from './constants/Skills';
import { projects } from './constants/Project';
import { experiences } from './constants/Experience';
import { achievement } from './constants/Achievements';
import './App.css';

class App extends Component {
  constructor () {
    super();

    this.state = {
      selectedSection: "",
      selectedHeading: "",
      selectedQuote: "",
      about: null,
      education: null,
      skills: null,
      projects: null,
      experiences: null,
      achievement: null,
    };
  }

  componentWillMount () {
    this.setState ({ 
      about,
      education,
      skills,
      projects,
      experiences,
      achievement,
      selectedHeading: about.heading,
      selectedQuote: about.quote,
      selectedSection: "about" 
    });
  }

  handleSectionClick =  (section) => {
    this.setState({
      selectedSection: section,
      selectedHeading: this.state[section].heading,
      selectedQuote: this.state[section].quote
    })
  }

  render () {
    return (
      <div className="App">
        <Portfolio
          handleSectionClick={this.handleSectionClick}
          selectedSection={this.state.selectedSection}
          selectedHeading={this.state.selectedHeading}
          selectedQuote={this.state.selectedQuote}
          about={this.state.about}
          education={this.state.education}
          skills={this.state.skills}
          projects={this.state.projects}
          experiences={this.state.experiences}
          achievement={this.state.achievement}
        />
      </div>
    );
  }
}

export default App;