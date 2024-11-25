import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import Link from "next/link";

const ProblemList = () => {
  const problems = [
    {
      id: 1,
      title: "Design Twitter",
      difficulty: "hard",
      description: "Design a simplified version of Twitter with core functionalities",
      category: "Social Media",
      completionRate: "35%"
    },
    {
      id: 2,
      title: "URL Shortener",
      difficulty: "medium",
      description: "Create a service that converts long URLs to short aliases",
      category: "Web Services",
      completionRate: "58%"
    },
    {
      id: 3,
      title: "Key-Value Store",
      difficulty: "easy",
      description: "Design a distributed key-value storage system",
      category: "Databases",
      completionRate: "72%"
    }
  ];

  const getDifficultyColor = (difficulty : any) => {
    switch (difficulty.toLowerCase()) {
      case 'easy':
        return 'bg-green-500';
      case 'medium':
        return 'bg-yellow-500';
      case 'hard':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div className="bg-slate-900 min-h-screen p-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl text-white font-semibold">System Design Challenges</h1>
          <div className="flex gap-4">
            <Badge variant="secondary">Easy</Badge>
            <Badge variant="secondary">Medium</Badge>
            <Badge variant="secondary">Hard</Badge>
          </div>
        </div>
        
        <div className="grid gap-4">
          {problems.map((problem) => (
            <Link href={`/problems/${problem.id}`} key={problem.id}>
              <Card className="hover:bg-slate-800 transition-colors">
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-xl text-white">{problem.title}</CardTitle>
                    <Badge className={getDifficultyColor(problem.difficulty)}>
                      {problem.difficulty}
                    </Badge>
                  </div>
                  <CardDescription className="text-slate-400">
                    {problem.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between text-sm text-slate-400">
                    <span>{problem.category}</span>
                    <span>Completion Rate: {problem.completionRate}</span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProblemList;