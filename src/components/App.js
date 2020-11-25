import React from "react";
import "./../styles/App.css";

// Do not alter the states const and values inside it.
const states = [
  {
    name: "Madhya Pradesh",
    cities: [
      {
        name: "Indore",
        towns: [
          {
            name: "Mhow"
          },
          {
            name: "Dewas"
          }
        ]
      },
      {
        name: "Bhopal",
        towns: [
          {
            name: "Manit"
          },
          {
            name: "Berasia"
          }
        ]
      },
      {
        name: "Gwalior",
        towns: [
          {
            name: "Ajaypur"
          }
        ]
      }
    ]
  },
  {
    name: "Jharkhand",
    cities: [
      {
        name: "Dhanbad",
        towns: [
          {
            name: "IIT(ISM) Dhanbad"
          },
          {
            name: "Hirapur"
          }
        ]
      },
      {
        name: "Wasseypur",
        towns: [
          {
            name: "Sardar khan's"
          },
          {
            name: "Faizal khan's"
          }
        ]
      },
      {
        name: "Mirzapur",
        towns: [
          {
            name: "Kaleen bhaiya's"
          },
          {
            name: "Guddu bhaiya's"
          }
        ]
      }
    ]
  },
  {
    name: "Assam",
    cities: [
      {
        name: "Guwhati",
        towns: [
          {
            name: "Amin"
          },
          {
            name: "Jalah"
          }
        ]
      },
      {
        name: "Jungle1",
        towns: [
          {
            name: "Tiger found at IIT Guwahati"
          },
          {
            name: "Leopard found in IIT Guwahati"
          }
        ]
      },
      {
        name: "Tezpur",
        towns: [
          {
            name: "Dibrugarh"
          },
          {
            name: "Silchar"
          }
        ]
      }
    ]
  },
  {
    name: "Bihar",
    cities: [
      {
        name: "Patna",
        towns: [
          {
            name: "Sonpur"
          },
          {
            name: "Maner"
          }
        ]
      },
      {
        name: "Gaya",
        towns: [
          {
            name: "Bakraur"
          },
          {
            name: "Barachatti"
          }
        ]
      },
      {
        name: "Darbhanga",
        towns: [
          {
            name: "Singhwara"
          },
          {
            name: "Jale"
          }
        ]
      }
    ]
  }
];

function App() {
  let [currentState, setCurrentState] = React.useState(states[0].name);
  let [cities, setCities] = React.useState(states[0].cities);
  let [currentCity, setCurrentCity] = React.useState(cities[0].name);
  let [towns, setTowns] = React.useState(cities[0].towns);
  let [currentTown, setCurrentTown] = React.useState(towns[0].name);

  let onStateChange = (event) => {
    setCurrentState(event.target.value);
  };
  let onCityChange = (event) => {
    setCurrentCity(event.target.value);
  };
  let onTownChange = (event) => {
    setCurrentTown(event.target.value);
  };
  React.useEffect(() => {
    let state = states.filter(
      (state) => state.name === currentState.toString()
    );
    setCities(state[0].cities);
  }, [currentState]);

  React.useEffect(() => {
    let city = cities.filter((city) => city.name === currentCity.toString());
    setTowns([...city[0].towns]);
  }, [currentCity]);

  React.useEffect(() => {
    setCurrentCity(cities[0].name);
  }, [cities]);

  React.useEffect(() => {
    setCurrentTown(towns[0].name);
  }, [towns]);
  return (
    <div id="main">
      <select onChange={onStateChange} value={currentState}>
        {states.map((state, index) => (
          <option
            key={"state" + (index + 1)}
            id={"state" + (index + 1)}
            value={state.name}
          >
            {state.name}
          </option>
        ))}
      </select>
      <select onChange={onCityChange} value={currentCity}>
        {cities.map((city, index) => (
          <option
            key={"city" + (index + 1)}
            id={"city" + (index + 1)}
            value={city.name}
          >
            {city.name}
          </option>
        ))}
      </select>
      <select onChange={onTownChange} value={currentTown}>
        {towns.map((town, index) => (
          <option
            key={"town" + (index + 1)}
            id={"town" + (index + 1)}
            value={town.name}
          >
            {town.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default App;
