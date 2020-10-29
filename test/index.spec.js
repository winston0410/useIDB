import React from 'react'
import ReactDOM from 'react-dom'
import Img from '../src/index.js'
const chai = require('chai')
const expect = chai.expect
chai.use(require('chai-dom'))
require('global-jsdom')()

let rootContainer

beforeEach(function () {
  rootContainer = document.createElement('div')
  document.body.appendChild(rootContainer)
})

afterEach(function () {
  document.body.removeChild(rootContainer)
  rootContainer = null
})

describe('ImageObject component', function () {
  it('should provide itemType and itemScope attribute', function () {
    ReactDOM.render(<Img source={[]} src='./example.jpg'/>, rootContainer)

    const renderedBlock = rootContainer.querySelector('figure')

    expect(renderedBlock).to.have.attribute('itemScope', '')
    expect(renderedBlock).to.have.attribute('itemType', 'https://schema.org/ImageObject')
  })

  it('should not fail if source is not provided', function () {
    ReactDOM.render(<Img src='./example.jpg' />, rootContainer)

    const renderedBlock = rootContainer.querySelector('figure')
  })
})
