import React, { Component } from 'react'
import {
  NavLink,
} from 'react-router-dom'

import { Block } from '../../components/block'

import '../home/main.scss'

import notFound1 from '../../assets/img/notFound/Page-not-found.png'

class NotFound extends Component {
  constructor(props) {
    super(props)

    this.textInput = React.createRef()
    this.focusTextInput = this.focusTextInput.bind(this)
  }

  focusTextInput() {
    this.textInput.current.focus()
  }

  render() {
    const notFound = [
      (
        <table>
          <tbody>
            <tr>
              <td><h2>Ooops!!</h2></td>
            </tr>
            <tr>
              <td>
                <div>
                  <ul>
                    <li><p>We cant find the page you are looking for.</p></li>
                    <li><p>Error code: 404.</p></li>
                    <li><p>Return to the <NavLink to="/movies-socket">homepage</NavLink></p></li>
                  </ul>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      ),
    ]

    return (
      <main>
        {/* monoblock whole line, row reverse */}
        <div className="mono-block">
          <Block
            bgTemplate="template3"
            hasImage
            hasMessage
            hasTitle={false}
            isMonoblock
            isReverse // '1.image & 2.text' or '1.text & 2.image'
            source={notFound1}
            text={notFound[0]}
            title="THE title"
          />
        </div>
      </main>
    )
  }
}

export default NotFound
