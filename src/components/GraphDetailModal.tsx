
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, FileText, X } from 'lucide-react';
import { GraphData } from '@/utils/graphData';

interface GraphDetailModalProps {
  graph: GraphData | null;
  isOpen: boolean;
  onClose: () => void;
}

export const GraphDetailModal = ({ graph, isOpen, onClose }: GraphDetailModalProps) => {
  if (!graph) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex justify-between items-start">
            <div className="flex-1">
              <DialogTitle className="text-2xl font-bold mb-2 text-gray-800">
                {graph.title}
              </DialogTitle>
              <div className="flex items-center gap-2 mb-4">
                <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                  {graph.category.replace('-', ' ')}
                </Badge>
                <span className="text-sm text-gray-500">Graph #{graph.id}</span>
              </div>
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-6">
          {/* Main Image */}
          <div className="relative rounded-lg overflow-hidden shadow-lg bg-gradient-to-br from-gray-50 to-gray-100">
            <img 
              src={graph.imageUrl}
              alt={graph.title}
              className="w-full h-96 object-contain bg-white"
              onError={(e) => {
                e.currentTarget.src = graph.fallbackUrl;
              }}
            />
          </div>

          {/* Description */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg border border-blue-200">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Analysis Overview</h3>
            <DialogDescription className="text-gray-700 leading-relaxed text-base">
              {graph.description}
            </DialogDescription>
          </div>

          {/* Key Insights */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <h4 className="font-semibold text-green-800 mb-2">Key Insights</h4>
              <ul className="text-green-700 text-sm space-y-1">
                <li>• Statistical significance confirmed</li>
                <li>• Clear pattern identification</li>
                <li>• Actionable business metrics</li>
              </ul>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
              <h4 className="font-semibold text-purple-800 mb-2">Methodology</h4>
              <ul className="text-purple-700 text-sm space-y-1">
                <li>• Advanced data preprocessing</li>
                <li>• Multi-dimensional analysis</li>
                <li>• Validated statistical methods</li>
              </ul>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-200">
            <Button asChild className="bg-blue-600 hover:bg-blue-700">
              <a 
                href="https://docs.google.com/document/d/14FJNFXL9X7VV43ImhrgkORoWmV7dLxqx1TMuxj4qwaY/edit?tab=t.0#heading=h.wbkfl65fpscb"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <FileText className="h-4 w-4" />
                View Full Report
                <ExternalLink className="h-3 w-3" />
              </a>
            </Button>
            <Button asChild variant="outline" className="border-purple-300 text-purple-700 hover:bg-purple-50">
              <a 
                href="https://github.com/Usaira-Shahbaz/Data-Analysis-and-Visualization-Project"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Github className="h-4 w-4" />
                GitHub Repository
                <ExternalLink className="h-3 w-3" />
              </a>
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
