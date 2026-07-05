import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BrainCircuit, MessageSquare, Activity, Users, Plus } from "lucide-react";

const STATS = [
  { title: "Active Agents", value: "12", icon: BrainCircuit, trend: "+2 from last week" },
  { title: "Conversations", value: "1,204", icon: MessageSquare, trend: "+15% from last week" },
  { title: "Tasks Automated", value: "8,592", icon: Activity, trend: "+42% from last week" },
  { title: "Team Members", value: "24", icon: Users, trend: "+4 from last week" },
];

export default function DashboardPage() {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Overview</h2>
          <p className="text-muted-foreground">Monitor your AI workforce and system performance.</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" /> Deploy Agent
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {STATS.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {stat.title}
              </CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground mt-1">
                {stat.trend}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>
              A timeline of agent actions and human approvals across your workspace.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Activity className="h-4 w-4 text-primary" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium">Research Agent compiled competitive analysis report</p>
                    <p className="text-xs text-muted-foreground">2 minutes ago</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Agent Status</CardTitle>
            <CardDescription>
              Real-time health of your deployed agents.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {["Data Analyst", "Support Escalation", "Code Reviewer"].map((agent) => (
                <div key={agent} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <BrainCircuit className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm font-medium">{agent}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                    <span className="text-xs text-muted-foreground">Online</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
