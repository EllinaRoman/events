import React from "react";
import "./App.css";

export class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.onSelectFilter = this.onSelectFilter.bind(this);
    this.state = {
      projects: [
        {
          img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/mon.jpg",
          category: "Business Cards",
        },
        {
          img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg",
          category: "Websites",
        },
        {
          img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg",
          category: "Websites",
        },
        {
          img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/codystretch.jpg",
          category: "Websites",
        },
        {
          img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_003.jpg",
          category: "Business Cards",
        },
        {
          img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290.png",
          category: "Websites",
        },
        {
          img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg",
          category: "Websites",
        },
        {
          img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg",
          category: "Business Cards",
        },
        {
          img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_1.png",
          category: "Websites",
        },
        {
          img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_2.png",
          category: "Flayers",
        },
        {
          img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/the_ninetys_brand.jpg",
          category: "Websites",
        },
        {
          img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/dia.jpg",
          category: "Business Cards",
        },
        {
          img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197.jpg",
          category: "Websites",
        },
        {
          img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg",
          category: "Websites",
        },
        {
          img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg",
          category: "Business Cards",
        },
        {
          img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197_1.jpg",
          category: "Websites",
        },
        {
          img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_3.png",
          category: "Flayers",
        },
      ],
      selected: "All",
    };
  }

  onSelectFilter(filterName) {
    this.setState({ selected: filterName });
  }

  render() {
    const filters = ["All", "Websites", "Flayers", "Business Cards"];
    const filteredProjects = this.state.projects.filter((x) => {
      if (this.state.selected === "All") {
        return true;
      } else {
        if (x.category === this.state.selected) {
          return true;
        } else {
          return false;
        }
      }
    });
    return (
      <div className='container'>
        <div className='button-div'>
        <Toolbar
          filters={filters}
          selected={this.state.selected}
          onSelectFilter={this.onSelectFilter}
        />
        </div>
        <div className='project-list'>
        <ProjectList projects={filteredProjects} />
        </div>
      </div>
    );
  }
}

function Toolbar({ filters, selected, onSelectFilter }) {
  return filters.map((x) => (
    <button
      key={x}
      className={x === selected ? "selected" : "not-selected"}
      onClick={() => {
        onSelectFilter(x);
      }}
    >
      {x}
    </button>
  ));
}

function ProjectList({ projects }) {
  return projects.map((x, index) => <img src={x.img} key={x.img + index} />);
}
