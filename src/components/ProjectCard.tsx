import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image?: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  category: string;
}

export default function ProjectCard({
  title,
  description,
  image,
  technologies,
  liveUrl,
  githubUrl,
  category
}: ProjectCardProps) {
  return (
    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white/80 backdrop-blur-sm border border-gray-200">
      {/* Project Image */}
      <div className="relative overflow-hidden rounded-t-lg">
        {image ? (
          <img 
            src={image} 
            alt={title}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-48 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
            <div className="text-4xl font-bold text-gray-400">{title.charAt(0)}</div>
          </div>
        )}
        <div className="absolute top-4 left-4">
          <Badge variant="secondary" className="bg-white/90 text-gray-700">
            {category}
          </Badge>
        </div>
      </div>

      <CardHeader>
        <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
          {title}
        </CardTitle>
        <CardDescription className="text-gray-600 line-clamp-2">
          {description}
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <Badge 
              key={tech} 
              variant="outline" 
              className="text-xs bg-blue-50 text-blue-700 border-blue-200"
            >
              {tech}
            </Badge>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2 pt-2">
          {liveUrl && (
            <Button 
              asChild 
              size="sm" 
              className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            >
              <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink size={16} className="mr-2" />
                Live Demo
              </a>
            </Button>
          )}
          {githubUrl && (
            <Button asChild variant="outline" size="sm" className="flex-1">
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <Github size={16} className="mr-2" />
                Code
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}