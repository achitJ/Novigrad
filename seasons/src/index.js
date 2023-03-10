import React from 'react'
import ReactDOM from 'react-dom'

// const App = () => {
//   window.navigator.geolocation.getCurrentPosition(
//     (position) => {
//       console.log(position)
//     },
//     (err) => {
//       console.log(err)
//     }
//   )

//   return <div>Hi There</div>
// }

class App extends React.Component {
  render() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position)
      },
      (err) => {
        console.log(err)
      }
    )

    return <div>Latitude: </div>
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
