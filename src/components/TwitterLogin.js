import React from 'react'
// import { auth } from '../utils/AuthService'

export default class TwitterLogin  extends Component {

  const TwitterButton = () => {
  return (
    <div className='twitter-button'>
      {auth.isSignedIn
        ? <button onClick={() => auth.signOut()}>Sign Out as {auth.profile.name}</button>
        : <button onClick={() => auth.signIn()}>Sign In</button>}
    </div>
  )
}
