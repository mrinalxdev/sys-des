"use client"

import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const ProblemPage = ({  }) => {
  const [answer, setAnswer] = useState('');
  const [feedback, setFeedback] = useState(null);

  // Mock problem data - in real app, fetch based on problemId
  const problem = {
    id: 1,
    title: "Design Twitter",
    difficulty: "hard",
    description: `Design a simplified version of Twitter with the following features:
    1. Users can post tweets
    2. Users can follow other users
    3. Users can view their timeline (tweets from users they follow)
    4. Users can like and retweet
    
    Consider the following:
    - Scale: 100M active users
    - 1M tweets per day
    - Timeline should load quickly
    - System should be highly available`,
    requirements: [
      "Describe the high-level architecture",
      "Explain data models and database choices",
      "Discuss scalability approaches",
      "Address potential bottlenecks"
    ]
  };

  const handleSubmit = async () => {
    alert("Answer Submitted")
  };

  return (
    <div className="bg-slate-900 min-h-screen">
      <div className="grid grid-cols-2 gap-4 h-screen">
        {/* Problem Description Panel */}
        <Card className="m-4 bg-slate-800 text-white overflow-y-auto">
          <CardContent className="p-6">
            <h1 className="text-3xl font-bold mb-4">{problem.title}</h1>
            <div className="space-y-4">
              <div className="prose prose-invert">
                <h2 className="text-xl font-semibold mb-2">Problem Description</h2>
                <p className="whitespace-pre-wrap">{problem.description}</p>
                
                <h2 className="text-xl font-semibold mt-6 mb-2">Requirements</h2>
                <ul className="list-disc pl-4">
                  {problem.requirements.map((req, index) => (
                    <li key={index} className="mb-2">{req}</li>
                  ))}
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Answer Panel */}
        <Card className="m-4 bg-slate-800 text-white overflow-y-auto">
          <CardContent className="p-6">
            <div className="flex flex-col h-full">
              <h2 className="text-xl font-semibold mb-4">Your Solution</h2>
              <Textarea
                className="flex-grow mb-4 min-h-[400px] bg-slate-900 text-white"
                placeholder="Write your system design solution here..."
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
              />
              <Button 
                className="w-full"
                onClick={handleSubmit}
              >
                Submit Solution
              </Button>

              {feedback && (
                <div className="mt-4 p-4 rounded bg-slate-900">
                  <h3 className="text-lg font-semibold mb-2">Feedback</h3>
                  <div className="space-y-2">
                    {Object.entries(feedback).map(([category, score]) => (
                      <div key={category} className="flex justify-between">
                        <span>{category}:</span>
                        <span className="font-semibold">3/10</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ProblemPage;