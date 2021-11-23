import "./signUp.css"

export default function SignUp() {
  return (
    <div className="signup">
      <h1>Sign Up</h1>
      <form className="signUpForm">
        <label>
          Username:
          <input type="text" name="username" />
        </label>
        <label>
          Password:
          <input type="password" name="password" />
        </label>
        <button className="signUpButton" >Sign Up</button>
      </form>
    </div>
  )
}