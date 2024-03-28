import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap';


const JokeApp = () => {
  const [joke, setJoke] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchJoke();
  }, []);

  const fetchJoke = async () => {
    try {
      const response = await axios.get('https://api.chucknorris.io/jokes/random');
      setJoke(response.data);
    } catch (error) {
      setError('Error fetching joke');
    }
  };

  const handleNewJoke = () => {
    fetchJoke();
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="custom-card">
            <h1 className="text-center mb-4">Chuck Norris Joke</h1>
            {error && <p className="text-danger text-center">{error}</p>}
            {joke && (
              <Card className="mb-3">
                <Card.Body>
                  <Card.Text className="text-center joke-text">{joke.value}</Card.Text>
                </Card.Body>
              </Card>
            )}
            <div className="text-center">
              <Button variant="primary" onClick={handleNewJoke}>Get Another Joke</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JokeApp;
