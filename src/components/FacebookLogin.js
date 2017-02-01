import React from 'react'
// import { auth } from '../utils/AuthService'

export default class FaceBookLogin  extends Component {

  const FacebookButton = () => {
  return (
    <div className='facebook-button'>
      {auth.isSignedIn
        ? <button onClick={() => auth.signOut()}>Sign Out as {auth.profile.name}</button>
        : <button onClick={() => auth.signIn()}>Sign In</button>}
    </div>
  )
}
