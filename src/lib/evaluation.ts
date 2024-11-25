interface Problem {
  id: number;
  title: string;
  keyComponents: string[];
  requiredConcepts: string[];
  scalabilityFactors: string[];
}

interface EvaluationResult {
  acrchitectureScore: number;
  scalability: number;
  completenessScore: number;
  technicalAccuracyScore: number;
  overallScore: number;
}

function evaluateAnswer(answer: string, problem: Problem) {}

function evaluateArchitecture(answer: string, keyComponents: string[]): number {
  let score = 0;
  const maxScore = 10;

  keyComponents.forEach((componenet) => {
    if (answer.includes(componenet.toLowerCase())) {
      score += maxScore / keyComponents.length;
    }
  });

  const patterns = [
    'microservices',
    'load balancer',
    'caching',
    'database',
    'api gateway'
  ]

  patterns.forEach(pattern => {
    if (answer.includes(pattern)){
        score += 1;
    }
  })
  return Math.min(Math.round(score), maxScore);
}
