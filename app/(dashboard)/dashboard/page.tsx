import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BrainCircuit, MessageSquare, Activity, Users, Plus, Database } from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Overview</h2>
          <p className="text-muted-foreground">Monitor your AI workforce and system performance.</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" /> Deploy Agent
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {/* Recent Chats Card */}
        <Card className="flex flex-col">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5 text-primary" />
              Recent Chats
            </CardTitle>
            <CardDescription>Latest interactions with your agents</CardDescription>
          </CardHeader>
          <CardContent className="flex-1">
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-start justify-between border-b border-border/50 pb-4 last:border-0 last:pb-0">
                  <div className="space-y-1">
                    <p className="text-sm font-medium">Research Query #{2048 - i}</p>
                    <p className="text-xs text-muted-foreground truncate max-w-[200px]">How does our product compare to competitors?</p>
                  </div>
                  <span className="text-xs text-muted-foreground">{i * 2}h ago</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* AI Agents Card */}
        <Card className="flex flex-col">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BrainCircuit className="h-5 w-5 text-primary" />
              Active Agents
            </CardTitle>
            <CardDescription>Real-time status of deployed agents</CardDescription>
          </CardHeader>
          <CardContent className="flex-1">
            <div className="space-y-4">
              {["Data Analyst Agent", "Support Copilot", "Code Reviewer"].map((agent, index) => (
                <div key={agent} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-md bg-primary/10 flex items-center justify-center">
                      <BrainCircuit className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-sm font-medium">{agent}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${index === 2 ? 'bg-yellow-500' : 'bg-green-500'}`} />
                    <span className="text-xs text-muted-foreground">{index === 2 ? 'Busy' : 'Online'}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Knowledge Base Card */}
        <Card className="flex flex-col">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Database className="h-5 w-5 text-primary" />
              Knowledge Base
            </CardTitle>
            <CardDescription>Recently indexed documents for RAG</CardDescription>
          </CardHeader>
          <CardContent className="flex-1">
            <div className="space-y-4">
              {[
                { name: "Q3_Financial_Report.pdf", size: "2.4 MB" },
                { name: "API_Documentation_v2.md", size: "45 KB" },
                { name: "Employee_Handbook_2024.docx", size: "1.2 MB" },
              ].map((doc) => (
                <div key={doc.name} className="flex items-center justify-between">
                  <div className="flex items-center gap-2 overflow-hidden">
                    <div className="w-8 h-8 rounded-md bg-muted flex items-center justify-center shrink-0">
                      <Database className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <span className="text-sm font-medium truncate">{doc.name}</span>
                  </div>
                  <span className="text-xs text-muted-foreground shrink-0 ml-2">{doc.size}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
