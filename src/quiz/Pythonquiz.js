import React, { useState } from 'react';
import axios from 'axios';
import './Javaquiz.css'
export const Pythonquiz = () => {
    const [user, setUser] = useState({
        name: '',
        email: '',
        answers: {
            q1: '',
            q2: '',
            q3: '',
            q4: '',
            q5: '',
            q6: '',
            q7: '',
            q8: '',
            q9: '',
            q10: '',
        },
    });
    const [score, setScore] = useState(0);
    const [scores, setScores] = useState([]);
    const [showScores, setShowScores] = useState(false);

    // Correct answers
    const correctAnswers = {
        q1: "Use of pointers",
        q2: "4 bytes",
        q3: "No default value",
        q4: "Internal",
        q5: "java.util",
        q6: "int",
        q7: "extends",
        q8: "ArrayIndexOutOfBoundsException",
        q9: "The variable’s value cannot be changed once assigned.",
        q10: "Both a and c",
    };

    const assign = (e) => {
        const { name, value } = e.target;
        setUser((prevUser) => ({
            ...prevUser,
            answers: {
                ...prevUser.answers,
                [name]: value,
            },
        }));
    };

    const calculateScore = () => {
        let newScore = 0;
        Object.keys(correctAnswers).forEach((question) => {
            if (user.answers[question] === correctAnswers[question]) {
                newScore += 1;
            }
        });
        return newScore;
    };

    const submitQuiz = async (e) => {
        e.preventDefault();

        const calculatedScore = calculateScore();
        setScore(calculatedScore);

        const userData = {
            name: user.name,
            email: user.email,
            score: calculatedScore,
        };

        try {
            const response = await axios.post('http://localhost:8080/api/scores/add', userData);
            console.log('Score saved:', response.data);
            alert('Your score has been saved successfully!');
        } catch (error) {
            console.error('Error saving score:', error);
            alert('Failed to save the score. Please try again later.');
        }
    };

    const fetchScores = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/api/scores/${user.email}`);
            setScores(response.data);
            setShowScores(true);
        } catch (error) {
            console.error('Error fetching scores:', error);
            alert('Failed to fetch scores. Please try again later.');
        }
    };

    return (
        <div className="javaquiz-container">
            <h1>PYTHON MCQ TEST</h1>
            <form onSubmit={submitQuiz}>
                <div>
                    <label>Enter your name:</label>
                    <input
                        type="text"
                        name="name"
                        value={user.name}
                        onChange={(e) => setUser({ ...user, name: e.target.value })}
                        required
                    />
                </div>
                <div>
                    <label>Enter your email:</label>
                    <input
                        type="email"
                        name="email"
                        value={user.email}
                        onChange={(e) => setUser({ ...user, email: e.target.value })}
                        required
                    />
                </div>

                {/* Question 1 */}
                <div>
                    <h5>
                        <label>What is the output of the following code?</label>
                        <label>print(type([]) is list)
                        </label>
                    </h5>
                    <p>
                        <input
                            type="radio"
                            name="q1"
                            value="True"
                            onChange={assign}
                        />  True
                        <input
                            type="radio"
                            name="q1"
                            value="False"
                            onChange={assign}
                        />False
                        <input
                            type="radio"
                            name="q1"
                            value="list"
                            onChange={assign}
                        /> list
                        <input
                            type="radio"
                            name="q1"
                            value="Error"
                            onChange={assign}
                        />Error
                    </p>
                </div>

                {/* Question 2 */}
                <div>
                    <h5>
                        <label>Which of the following is not a valid Python data type?</label>
                    </h5>
                    <p>
                        <input
                            type="radio"
                            name="q2"
                            value="List"
                            onChange={assign}
                        />List
                        <input
                            type="radio"
                            name="q2"
                            value="Tuple"
                            onChange={assign}
                        />Tuple
                        <input
                            type="radio"
                            name="q2"
                            value="Set"
                            onChange={assign}
                        />Set
                        <input
                            type="radio"
                            name="q2"
                            value="Array"
                            onChange={assign}
                        />Array
                    </p>
                </div>

{/* Question 3 */}
<div>
                    <h5>
                        <label>What does len() function do?</label>
                    </h5>
                    <p>
                        <input
                            type="radio"
                            name="q3"
                            value="Returns the length of a string."
                            onChange={assign}
                        />Returns the length of a string.
                        <input
                            type="radio"
                            name="q3"
                            value="Returns the number of elements in a list."
                            onChange={assign}
                        />Returns the number of elements in a list.
                        <input
                            type="radio"
                            name="q3"
                            value="Returns the number of characters in a dictionary."
                            onChange={assign}
                        />Returns the number of characters in a dictionary.
                        <input
                            type="radio"
                            name="q3"
                            value="All of the above."
                            onChange={assign}
                        />All of the above.
                    </p>
                </div>

                {/* Question 4 */}
                <div>
                    <h5>
                        <label>Which of the following is used to create an empty set in Python?</label>
                    </h5>
                    <p>
                        <input
                            type="radio"
                            name="q4"
                            value="{}"
                            onChange={assign}
                        />{}
                        <input
                            type="radio"
                            name="q4"
                            value="[]"
                            onChange={assign}
                        />[]
                        <input
                            type="radio"
                            name="q4"
                            value="set()"
                            onChange={assign}
                        />set()
                        <input
                            type="radio"
                            name="q4"
                            value="set[]"
                            onChange={assign}
                        />set[]
                    </p>
                </div>
                {/* Question 5 */}
                <div>
                    <h5>
                        <label>What is the output of the following code? x = 10
y = 2
print(x ** y)
</label>
                    </h5>
                    <p>
                        <input
                            type="radio"
                            name="q5"
                            value="12"
                            onChange={assign}
                        />12
                        <input
                            type="radio"
                            name="q5"
                            value="20"
                            onChange={assign}
                        />20
                        <input
                            type="radio"
                            name="q5"
                            value="100"
                            onChange={assign}
                        />100
                        <input
                            type="radio"
                            name="q5"
                            value="1000"
                            onChange={assign}
                        />1000
                    </p>
                </div>
                {/* Question 6 */}
                <div>
                    <h5>
                        <label>Which of the following functions is used to open a file in Python?</label>
                    </h5>
                    <p>
                        <input
                            type="radio"
                            name="q6"
                            value="open()"
                            onChange={assign}
                        />open()
                        <input
                            type="radio"
                            name="q6"
                            value="long"
                            onChange={assign}
                        />long
                        <input
                            type="radio"
                            name="q6"
                            value="void"
                            onChange={assign}
                        />void
                        <input
                            type="radio"
                            name="q6"
                            value="Object"
                            onChange={assign}
                        />Object
                    </p>
                </div>
                {/* Question 7 */}
                <div>
                    <h5>
                        <label>Which keyword is used to define a subclass in Java?</label>
                    </h5>
                    <p>
                        <input
                            type="radio"
                            name="q7"
                            value="super"
                            onChange={assign}
                        />super
                        <input
                            type="radio"
                            name="q7"
                            value="extends"
                            onChange={assign}
                        />extends
                        <input
                            type="radio"
                            name="q7"
                            value="implements"
                            onChange={assign}
                        />implements
                        <input
                            type="radio"
                            name="q7"
                            value="inherit"
                            onChange={assign}
                        />inherit
                    </p>
                </div>
                {/* Question 8 */}
                <div>
                    <h5>
                        <label>Which exception is thrown when an array is accessed with an invalid index?</label>
                    </h5>
                    <p>
                        <input
                            type="radio"
                            name="q8"
                            value="ArrayStoreException"
                            onChange={assign}
                        />ArrayStoreException
                        <input
                            type="radio"
                            name="q8"
                            value="NullPointerException"
                            onChange={assign}
                        />NullPointerException
                        <input
                            type="radio"
                            name="q8"
                            value="ArrayIndexOutOfBoundsException"
                            onChange={assign}
                        />ArrayIndexOutOfBoundsException
                        <input
                            type="radio"
                            name="q8"
                            value="ClassCastException"
                            onChange={assign}
                        />ClassCastException
                    </p>
                </div>
                {/* Question 9 */}
                <div>
                    <h5>
                        <label>What does the final keyword indicate when applied to a variable?</label>
                    </h5>
                    <p>
                        <input
                            type="radio"
                            name="q9"
                            value="The variable must be initialized at runtime."
                            onChange={assign}
                        />The variable must be initialized at runtime.
                        <input
                            type="radio"
                            name="q9"
                            value="The variable can only be modified within the class."
                            onChange={assign}
                        />The variable can only be modified within the class.
                        <input
                            type="radio"
                            name="q9"
                            value="The variable’s value cannot be changed once assigned."
                            onChange={assign}
                        />The variable’s value cannot be changed once assigned.
                        <input
                            type="radio"
                            name="q9"
                            value="The variable is static."
                            onChange={assign}
                        />The variable is static.
                    </p>
                </div>
                {/* Question 10 */}
                <div>
                    <h5>
                        <label>Which of the following is a marker interface?</label>
                    </h5>
                    <p>
                        <input
                            type="radio"
                            name="q10"
                            value="Serializable"
                            onChange={assign}
                        />Serializable
                        <input
                            type="radio"
                            name="q10"
                            value="Runnable"
                            onChange={assign}
                        />Runnable
                        <input
                            type="radio"
                            name="q10"
                            value="Cloneable"
                            onChange={assign}
                        />Cloneable
                        <input
                            type="radio"
                            name="q10"
                            value="Both a and c"
                            onChange={assign}
                        />Both a and c
                    </p>
                </div>

                <button type="submit">Submit</button>
            </form>

            {/* Display Score */}
            {score > 0 && (
                <h2>
                    {user.name}, your score is {score}/{Object.keys(correctAnswers).length}
                </h2>
            )}

            {/* Fetch and Show Scores */}
            <button onClick={fetchScores}>Show Previous Scores</button>
            {showScores && scores.length > 0 && (
                <div>
                    <h3>Previous Scores:</h3>
                    <ul>
                        {scores.map((s, index) => (
                            <li key={index}>
                                {s.name} ({s.email}): {s.score}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};
