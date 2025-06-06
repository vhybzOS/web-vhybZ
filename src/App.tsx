import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { 
  Share2, 
  Undo, 
  Redo, 
  Save, 
  Plus, 
  ArrowUp, 
  MessageCircle, 
  Smartphone, 
  RotateCcw,
  Paperclip 
} from 'lucide-react';
import './App.css';

const VhybZApp: React.FC = () => {
  const [view, setView] = useState<string>('render');
  const [message, setMessage] = useState('');

  const handleUndo = () => {
    // Placeholder for undo logic
  };

  const handleRedo = () => {
    // Placeholder for redo logic
  };

  const handleSave = () => {
    // Placeholder for quick save logic
  };

  const handleRevert = () => {
    // Placeholder for revert logic
  };

  const handleShare = () => {
    // Placeholder for revert logic
  };

  const handleSendMessage = () => {
    // Placeholder for sending message logic
    setMessage('');
  };

  const handleAttachment = () => {
    // Placeholder for attachment logic
  };

  return (
    <div className="dark min-h-screen bg-background text-foreground antialiased">
      <div className='window'>
        {/* Header */}
        <header className='appbar'>
          <nav className='navbar'>
            <Button variant="ghost" size="icon" className="p-0 m-0 bg-transparent border-transparent shadow-none hover:bg-accent/10 focus:bg-transparent active:bg-transparent transition-colors" style={{color: 'hsl(var(--foreground))'}}>
              <img src="/logo.png" alt="VhybZ Logo" className='logo h-6 w-6'/>
            </Button>
            
            <div className="flex items-center bg-transparent border-transparent">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setView('render')}
                className="p-0 m-0 px-3 py-2 bg-transparent border-transparent shadow-none hover:bg-accent/10 focus:bg-transparent active:bg-transparent transition-colors"
                style={{color: view === 'render' ? 'hsl(var(--foreground))' : 'hsl(var(--foreground) / 0.7)'}}
              >
                <Smartphone className="size-5" style={{color: 'hsl(var(--foreground))'}} />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setView('chat')}
                className="p-0 m-0 px-3 py-2 bg-transparent border-transparent shadow-none hover:bg-accent/10 focus:bg-transparent active:bg-transparent transition-colors"
                style={{color: view === 'chat' ? 'hsl(var(--foreground))' : 'hsl(var(--foreground) / 0.7)'}}
              >
                <MessageCircle className="size-5" style={{color: 'hsl(var(--foreground))'}} />
              </Button>
            </div>
            
            <Button variant="ghost" size="icon" onClick={handleShare} className="p-0 m-0 bg-transparent border-transparent shadow-none hover:bg-accent/10 focus:bg-transparent active:bg-transparent transition-colors" style={{color: 'hsl(var(--foreground))'}}>
              <Share2 className="size-5" style={{color: 'hsl(var(--foreground))'}} />
            </Button>
          </nav>
        </header>

        {/* Main Content */}
        <main className='content'>
          <Card className='container border-transparent shadow-none bg-transparent'>
            <CardHeader className="flex flex-col items-center justify-center text-center pb-4">
              <CardTitle className="text-2xl font-semibold text-foreground mb-3">
                {view === 'render' ? 'Rendered content' : 'Chat history'}
              </CardTitle>
              <CardDescription className="text-center text-foreground/75 text-lg leading-relaxed max-w-md">
                {view === 'render' 
                  ? 'Your generated artifacts will appear here' 
                  : 'Your conversation history will be displayed here'
                }
              </CardDescription>
            </CardHeader>
          </Card>
        </main>

        {/* Toolbar */}
        <div className='toolbar'>
          <div className="commands">
            <Button variant="ghost" size="icon" onClick={handleUndo} className="p-0 m-0 bg-transparent border-transparent shadow-none hover:bg-accent/10 focus:bg-transparent active:bg-transparent transition-colors" style={{color: 'hsl(var(--foreground))'}} title="Undo">
              <Undo className="size-5" style={{color: 'hsl(var(--foreground))'}} />
            </Button>
            <Button variant="ghost" size="icon" onClick={handleRedo} className="p-0 m-0 bg-transparent border-transparent shadow-none hover:bg-accent/10 focus:bg-transparent active:bg-transparent transition-colors" style={{color: 'hsl(var(--foreground))'}} title="Redo">
              <Redo className="size-5" style={{color: 'hsl(var(--foreground))'}} />
            </Button>
            <Button variant="ghost" size="icon" onClick={handleSave} className="p-0 m-0 bg-transparent border-transparent shadow-none hover:bg-accent/10 focus:bg-transparent active:bg-transparent transition-colors" style={{color: 'hsl(var(--foreground))'}} title="Save">
              <Save className="size-5" style={{color: 'hsl(var(--foreground))'}} />
            </Button>
            <Button variant="ghost" size="icon" onClick={handleRevert} className="p-0 m-0 bg-transparent border-transparent shadow-none hover:bg-accent/10 focus:bg-transparent active:bg-transparent transition-colors" style={{color: 'hsl(var(--foreground))'}} title="Restore">
              <RotateCcw className="size-5" style={{color: 'hsl(var(--foreground))'}} />
            </Button>
          </div>
          <Button variant="ghost" size="icon" onClick={handleRevert} className="p-0 m-0 bg-transparent border-transparent shadow-none hover:bg-accent/10 focus:bg-transparent active:bg-transparent transition-colors" style={{color: 'hsl(var(--foreground))'}} title="Add">
            <Plus className="size-5" style={{color: 'hsl(var(--foreground))'}} />
          </Button>
        </div>

        {/* Prompt Input */}
        <div className="prompt">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={handleAttachment}
            className="shrink-0 p-0 m-0 bg-transparent border-transparent shadow-none hover:bg-accent/10 focus:bg-transparent active:bg-transparent transition-colors"
            style={{color: 'hsl(var(--foreground))'}}
            title="Attach file"
          >
            <Paperclip className="size-5" style={{color: 'hsl(var(--foreground))'}} />
          </Button>
          
          <div className="relative flex-1">
            <Textarea
              placeholder="Type your prompt here..."
              value={message}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value)}
              className="min-h-0 resize-none border-border/10 bg-transparent focus:border-border/30 focus:bg-muted/5 transition-all duration-200 px-4 py-3 text-base leading-relaxed shadow-none"
              style={{color: 'hsl(var(--foreground))', '--placeholder-color': 'hsl(var(--foreground) / 0.6)'} as React.CSSProperties & {'--placeholder-color': string}}
              rows={2}
            />
          </div>
          
          <Button 
            onClick={handleSendMessage} 
            variant="default"
            size="default"
            className="shrink-0 px-6 py-3 transition-colors shadow-sm font-medium"
            style={{backgroundColor: 'hsl(var(--primary))', color: 'hsl(var(--primary-foreground))'}}
            disabled={!message.trim()}
          >
            <ArrowUp className="size-4 mr-2" style={{color: 'hsl(var(--primary-foreground))'}} />
            Send
          </Button>
        </div>
      </div>
    </div>
  );
};

export default VhybZApp;