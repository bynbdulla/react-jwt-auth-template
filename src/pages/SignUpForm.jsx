import { useState } from "react"

const SignUpForm = () => {

    const initialState = {
        username: '',
        password: '',
        confirmPassword: '',
    }

    const [formData, setFormData] = useState(initialState)

    const handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value})
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log('the form was submitted')
        setFormData(initialState)
    }

    return (
        <section>
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                Username:
                <input type="text" name="username" onChange={handleChange} value={formData.username} />
                Password:
                <input type="password" name="password" onChange={handleChange} value={formData.password} />
                Confirm Password:
                <input type="password" name="confirmPassword" onChange={handleChange} value={formData.confirmPassword} />
                <button type="submit">Sign Up</button>
                <button>Cancel</button>
            </form>
        </section>
    )
}

export default SignUpForm

