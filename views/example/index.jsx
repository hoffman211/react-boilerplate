import React from 'react'
import { Link } from 'react-router'
/* globals alert */

class Example extends React.Component{
  render(){
    return (
      <div>
        <h2>Accounts</h2>
        <Link to="/">Home</Link>
        <div onClick={() => alert('wow')}>Proof client renders! click me!</div><br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam placerat gravida ex sed fringilla. Duis finibus condimentum mi id pharetra. Nunc non ex ut purus maximus suscipit sed at quam. Aliquam erat volutpat. Duis bibendum elit vitae bibendum condimentum. Pellentesque vel aliquet eros. Quisque ultricies id ligula id suscipit. Suspendisse tempus ex ut dui congue, non finibus dui hendrerit. Praesent vitae tincidunt est. Phasellus ut urna semper, pretium dui sit amet, malesuada dolor. Nulla ut eleifend odio, in lacinia lorem.
          Nam non risus porttitor, luctus erat nec, scelerisque risus. Vestibulum imperdiet scelerisque mi, eget tincidunt tortor faucibus a. Phasellus massa neque, vehicula at luctus vitae, fermentum at elit. Mauris finibus urna non mauris iaculis venenatis. Curabitur vitae nisl vel ante tempus convallis at eget turpis. Aliquam convallis et erat finibus lobortis. Suspendisse semper velit non ex elementum, et blandit eros porttitor. Nullam vitae bibendum arcu. Cras porta finibus vehicula. Ut pellentesque maximus purus, vel lobortis neque cursus sit amet. Nulla turpis sapien, commodo fermentum augue et, euismod imperdiet lacus. Aliquam non sagittis ex. Pellentesque imperdiet enim a lectus tincidunt aliquet. Cras posuere, nulla eget malesuada sollicitudin, enim nibh scelerisque ipsum, ut pellentesque nisl elit non sem.
          Cras diam risus, imperdiet non quam a, cursus efficitur ligula. Mauris accumsan neque at fermentum mattis. Vestibulum convallis faucibus velit eu dignissim. Donec ornare ultricies metus a volutpat. Nam viverra lacinia dui, vitae tempus dui elementum in. Sed mattis magna sed tortor faucibus mattis. Phasellus lacinia pellentesque enim vitae porta.
          Aenean imperdiet, urna eu ullamcorper fermentum, est lorem feugiat neque, a lobortis velit velit sit amet lectus. Duis ut ex sodales, posuere tellus at, egestas arcu. Duis dui tortor, tristique aliquet tellus ut, volutpat lacinia orci. Donec fringilla sodales lacus. Nullam varius ultricies leo, ac semper massa volutpat et. Proin a sapien id nulla sodales lacinia ut nec est. Duis aliquam, mauris ac posuere porttitor, libero metus tincidunt lorem, non venenatis lacus magna eget nisi. In vestibulum quam et arcu facilisis varius. Cras cursus sagittis ultricies. Praesent sollicitudin velit turpis, eget ornare quam molestie at. Praesent posuere metus in hendrerit ultrices. Donec vel efficitur sem. Fusce non ex pulvinar, pellentesque dui sed, faucibus dui.
          Curabitur sollicitudin, neque sed fringilla facilisis, libero metus vulputate felis, sit amet fringilla ex massa in nulla. Nulla dignissim ante leo, vitae interdum ante congue sed. Sed efficitur ipsum dictum massa vestibulum congue. Cras pharetra, ipsum sit amet pulvinar mattis, nisi sem varius nisl, eget viverra magna metus et neque. In magna eros, sagittis at dignissim vitae, lacinia vel tellus. Morbi elementum, lectus a malesuada laoreet, diam sapien eleifend velit, in venenatis magna odio id nunc. Fusce blandit risus ac mi dapibus, eget suscipit neque maximus. Suspendisse et ante id nibh ornare dignissim. In at imperdiet nisl. Cras rutrum maximus magna, id fermentum urna venenatis vitae.
      </div>
    )
  }
}
module.exports = Example
